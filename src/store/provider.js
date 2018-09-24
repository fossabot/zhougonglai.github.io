import {exception} from 'vue-analytics'

export default {
  namespaced: true,
  state: {
    permissions: [],
    position: {},
    timeZone: {}
  },
  mutations: {
    SET_POSITION(state, position) {
      state.position = position
    },
    SET_TIMEZONE(state, timeZone) {
      state.timeZone = timeZone
    },
    SET_PERMISSIONS(state, permissions) {
      state.permissions = permissions
    }
  },
  actions: {
    getPosition({state, commit}){
      return new Promise((resolve, reject) => {
        if('coords' in state.position){
          resolve(state.position.coords);
        }else{
          navigator.geolocation.getCurrentPosition(({coords, timestamp})=>{
            const {latitude, longitude, accuracy} = coords;
            commit('SET_POSITION', {latitude, longitude, accuracy, timestamp});
            resolve({coords, timestamp});
          }, (err) => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            exception(err.message || err)
            reject(err)
          }, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 600000
          });
        }
      })
    },
    getTimeZone({state, commit}) {
      if('dstOffset' in state.timeZone){
        return state.timeZone;
      }else{
        commit('SET_TIMEZONE', {
          "dstOffset" : 3600,
          "rawOffset" : -28800,
          "status" : "OK",
          "timeZoneId" : "America/Los_Angeles",
          "timeZoneName" : "Pacific Daylight Time"
       })
        /**
        const {latitude, longitude, timestamp} = state.position;
        $fetch.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${[latitude, longitude].join()}&timestamp=${timestamp}&key=AIzaSyAizNI6D7DlBiG3ajfi1oZA5KXL6WZ1nAk`)
        .then((result) => {
          commit(result);
        }).catch((err) => {
          exception(err)
        });
         */
      }
    },
    addPermission({state, commit}, permission) {
      if(!state.permissions.includes(permission))
        commit('SET_PERMISSIONS', state.permissions.concat(permission))
    },
    removePermission({state, commit}, permission) {
      if(state.permissions.includes(permission))
        commit('SET_PERMISSIONS', state.permissions.filter(p => p !== permission))
    }
  }
}