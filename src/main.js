
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routerConfig from './router-config';

import './config/rem';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/scss/common.css';
Vue.use(Mint);

Vue.use(VueRouter);


const router = new VueRouter({
   routes:routerConfig,
})


new Vue({
  el: '#app',
  router,
  template: '<App/>', 
  components: { App }
})
