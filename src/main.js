import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import HeroBanner from '@/components/HeroBanner'

Vue.component('HeroBanner', HeroBanner)

import '../node_modules/hooper/dist/hooper.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
