import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { set} from 'vue-analytics'
import {UUIDGeneratorBrowser} from './utils'
import user from './store/user'
import global from './store/global'
import provider from './store/provider'

Vue.use(Vuex)

const user_id = UUIDGeneratorBrowser()

export default new Vuex.Store({
  state: {
    env: process.env.NODE_ENV,
    uuid:{user_id},
  },
  mutations: {
  },
  actions: {
    appInit(){
      set('userId', user_id)
    }
  },
  modules: {
    user, global, provider
  },
  plugins: [
    createPersistedState({
       key: 'teacher',
    })
  ]
})
