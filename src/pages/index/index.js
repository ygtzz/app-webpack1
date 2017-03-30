import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import cookies from 'js-cookie';
import 'static/css/normalize.css';
import 'static/css/quick-layout.css';
import 'static/css/font-awesome.min.css';
import 'static/css/site.css';
import './index.scss';
import routeConfig from './router.js';
//import FastClick from 'fastclick';
import App from './app.vue';
//common Component
import cHeader from './widget/cHeader.vue';
import {types} from 'index/vuex/mutation-types'

Vue.component('c-cHeader',cHeader);

Vue.use(VueRouter);

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// });

const router = new VueRouter({
    mode:'hash',
    routes:routeConfig
});

router.beforeEach((to, from, next) => {
  if(to.path === '/home'){
      //mock add cookie
      cookies.set('wlcUserId',escape("886E41417490442887380A7F7A8B48B5"))
      const userId = cookies.get('wlcUserId');
      console.log(userId)
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
