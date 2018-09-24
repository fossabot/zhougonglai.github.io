import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import {set, analyticsMiddleware} from 'vue-analytics'
import {UUIDGeneratorBrowser} from './utils'
import user from './store/user'
import global from './store/global'
import provider from './store/provider'

Vue.use(Vuex)

// @flow
const uuid = UUIDGeneratorBrowser()

export default new Vuex.Store({
  state: {
    env: process.env.NODE_ENV,
    uuid,
  },
  mutations: {
    SET_UUID (state, uuid){
      state.uuid = uuid
    }
  },
  actions: {
    appInit({state, commit}){
      if(state.uuid){
        set('userId', uuid)
      } else {
        commit('SET_UUID', uuid)
      }
    }
  },
  modules: {
    user, global, provider
  },
  plugins: [
    createPersistedState({
       key: 'teacher',
    }), analyticsMiddleware
  ]
})
