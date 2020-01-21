import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import HeroBanner from '@/components/HeroBanner'
Vue.component('HeroBanner', HeroBanner)
import '../node_modules/hooper/dist/hooper.css';

import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)

Vue.config.productionTip = false

import { TweenMax, TimelineLite, TweenLite, Power2, Back } from "gsap";

Vue.prototype.TweenMax = TweenMax;
Vue.prototype.TimelineLite = TimelineLite;
Vue.prototype.TweenLite = TweenLite;
Vue.prototype.Power2 = Power2;
Vue.prototype.Back = Back;

import "@/assets/scss/normalize.scss"
import "@/assets/scss/icomoon.scss"
import "@/assets/scss/app.scss"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
