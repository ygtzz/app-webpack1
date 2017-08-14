import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import cookies from 'js-cookie';
import 'static/css/normalize.css';
import 'static/css/quick-layout.css';
import 'static/css/site.css';
import './index.scss';
import routeConfig from './router.js';
//import FastClick from 'fastclick';
import App from './app.vue';
import cHeader from './widget/cHeader.vue';
import {types} from 'index/vuex/mutation-types'
import toast from 'vue-easy-toast';

if(__DEV__){
    const eruda = require('eruda');
    eruda.init();
}

Vue.component('c-cHeader',cHeader);

Vue.use(VueRouter);
Vue.use(toast);

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// });

const router = new VueRouter({
    mode:'hash',
    routes:routeConfig
});

router.beforeEach((to, from, next) => {
  if(to.path === '/home'){
      const userId = 'lalala';
      if(!userId){
          alert('no user')
      }
      else{
          store.commit(types['setUser'],{userId:userId});
          next(); 
      }
  }
  else{
    next();
  }
});

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
