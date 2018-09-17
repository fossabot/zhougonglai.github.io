export default {
  namespaced: true,
  state: {
    info: {}
  },
  mutations: {
    SET_INFO (state, info){
      state.info = info
    }
  },
  actions: {
    setInfo ({commit}, user){
      commit('SET_INFO', user)
    }
  }
}