// import me from './views/me.vue';
// import productList from './views/productList.vue';
// import detail from './views/detail.vue';
// import home from './views/home.vue';
// import test from './views/test.vue';

const me = resolve => {
  require.ensure(['./views/me/me.vue'], () => {
    resolve(require('./views/me/me.vue'))
  },'me')
}
const productList = resolve => {
  require.ensure(['./views/productList/productList.vue'], () => {
    resolve(require('./views/productList/productList.vue'))
  },'producsList')
}
const detail = resolve => {
  require.ensure(['./views/detail/detail.vue'], () => {
    resolve(require('./views/detail/detail.vue'))
  },'detail')
}
const home = resolve => {
  require.ensure(['./views/home/home.vue'], () => {
    resolve(require('./views/home/home.vue'))
  },'home')
}

export default [
    { path: '/', redirect:'/home'},
    { 
        path: '/home', 
        name:'home',
        component: home
    },            
    { 
        path: '/me', 
        name:'me',
        component: me
    },    
    { 
        path: '/finance', 
        name:'finance',
        component: productList        
    },
    { 
        path: '/detail', 
        name:'detail',
        component: detail        
    }
];