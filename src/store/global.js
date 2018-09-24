export default {
  namespaced: true,
  state: {
    snackbar:{
      status: false,
      message: '',
    },
    activeDate: '',
  },
  mutations: {
    SET_SNACKBAR (state, snackbar){
      state.snackbar = {
        ...state.snackbar,
        ...snackbar
      }
    },
    SET_ACTIVE_DATE (state, date) {
      state.activeDate = date
    }
  },
  actions: {
    closeSnackBar ({commit}){
      commit('SET_SNACKBAR', {status: false})
    },
    openSnackBar ({commit}, {status = true,message, ...args}){
      commit('SET_SNACKBAR', {
        status, message, ...args
      })
    },
    setActiveDate: ({commit}, date) => commit('SET_ACTIVE_DATE', date)
  }
}