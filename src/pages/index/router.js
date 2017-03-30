import me from './views/me.vue';
import productList from './views/productList.vue';
import detail from './views/detail.vue';
import home from './views/home.vue';

export default [
    { path: '/', redirect:'/home'},
    { path: '/home', component: home, name:'home'},            
    { path: '/me', component: me, name:'me'},    
    { path: '/finance', component: productList, name:'finance'},
    { path: '/detail', component: detail, name:'detail'}
];