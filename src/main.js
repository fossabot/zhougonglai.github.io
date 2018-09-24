import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAnalytics, {time} from 'vue-analytics'
import VueFire from '@vuefire/vuefire'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import App from './App.vue'
import router from './router'
import store from './store'
import { $fetch } from './utils/index'
import './registerServiceWorker'
import './main.styl'
import './utils/prototype'


Raven
    .config('https://1b3b2970e8b44fd1985f2ba239734959@sentry.io/1280406')
    .addPlugin(RavenVue, Vue)
    .install();

Vue.use(Vuetify,{
  theme: {
    primary: '#46D4DD'
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-108084575-2',
  checkDuplicatedScript: true,
  router, store,
  autoTracking: {
    skipSamePath: true,
    exception: true
  },
  debug: {
    enabled: false, 
    trace: process.env.NODE_ENV === 'production',
    sendHitTask: process.env.NODE_ENV === 'production',
  },
  commands: {
    /**
     * @argument { category<String>, action<String>, label<String>, value<Number>}
     * @description 分类, 动作, 标签, 价值
     */
    trackEvent (){
      this.$ga.event(...arguments)
    },
    /**
     * @argument { category<String>, variable<String>, value<Number>, label<String>}
     * @description 分类, 变量, 时间, 携参
     */
    timeTaken (){
      this.$ga.time(...arguments)
    }
  }
})

Vue.use(VueFire,{
  project:{
    apiKey: "AIzaSyAizNI6D7DlBiG3ajfi1oZA5KXL6WZ1nAk",
    authDomain: "teacher-landi.firebaseapp.com",
    databaseURL: "https://teacher-landi.firebaseio.com",
    projectId: "teacher-landi",
    storageBucket: "teacher-landi.appspot.com",
    messagingSenderId: "752477753928"
  },
  vuex: {
    namespaces: ['firebase'],
    store
  }
})

Vue.config.performance = true
Vue.prototype.$fetch = $fetch

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function() {
  if(process.env.NODE_ENV !== 'development'){
    /**
      observer.observe({
        entryTypes: ['measure']
      });
    */
    performance.getEntriesByType('resource').forEach(({entryType, name, duration,initiatorType}) => {
      time(entryType, name, duration, initiatorType)
    })
  }
};