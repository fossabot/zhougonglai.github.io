export default {
  namespaced: true,
  state: {
    snackbar:{
      status: false,
      message: ''
    }
  },
  mutations: {
    SET_SNACKBAR (state, snackbar){
      state.snackbar = {
        ...state.snackbar,
        ...snackbar
      }
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
    }
  }
}