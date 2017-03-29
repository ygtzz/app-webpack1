import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
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
  const toPath = to.fullPath;
  const toPath_end = toPath.lastIndexOf('/');
  const backPath = toPath.slice(0, toPath_end);
  store.commit('BACK_PATH', backPath);
  next();
});


sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
