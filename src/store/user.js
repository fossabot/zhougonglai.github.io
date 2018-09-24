import {$fetch} from '../utils'

const baseContext = () => process.env.NODE_ENV !== 'development' 
  ? 'http://rap2api.taobao.org/app/mock/5248/'
  : '/'

export default {
  namespaced: true,
  state: {
    info: {},
    securitys: [],
    calendar: [],
    api:{
      teacher: `${baseContext()}teacher/get`,
      security: `${baseContext()}teacher/security`,
      calendar: `${baseContext()}teacher/calendar`
    }
  },
  mutations: {
    SET_INFO (state, info){
      state.info = info
    },
    SET_SECURITY (state, securitys){
      state.securitys = securitys
    },
    SET_CALENDAR (state, calendar){
      state.calendar = calendar
    }
  },
  actions: {
    setInfo: ({commit}, info) => commit('SET_INFO', info),
    async getInfo ({commit, state, rootState}, tid){
      const {data} = await $fetch.get(state.api.teacher, {tid : tid ? tid: rootState.uuid})
      commit('SET_INFO', data)
      return data
    },
    async securityLog ({commit, state, rootState}, tid){
      const {data} = await $fetch.get(state.api.security, {tid : tid ? tid: rootState.uuid})
      commit('SET_SECURITY', data)
      return data
    },
    async getCalendar ({commit, state, rootState}, tid){
      const {data} = await $fetch.get(state.api.calendar, {tid: tid ? tid: rootState.uuid})
      commit('SET_CALENDAR', data.tasks)
      return data
    }
  }
}