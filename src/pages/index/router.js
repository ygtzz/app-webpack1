// import me from './views/me.vue';
// import productList from './views/productList.vue';
// import detail from './views/detail.vue';
// import home from './views/home.vue';
// import test from './views/test.vue';
import project from './views/project/project.vue';
import wallet from './views/wallet/wallet.vue';

const projectDetail = resolve => {
  require.ensure(['./views/projectDetail/projectDetail.vue'], () => {
    resolve(require('./views/projectDetail/projectDetail.vue'))
  },'projectDetail')
}
const calculator = resolve => {
  require.ensure(['./views/calculator/calculator.vue'], () => {
    resolve(require('./views/calculator/calculator.vue'))
  },'calculator')
}
const moreDetail = resolve => {
  require.ensure(['./views/moreDetail/moreDetail.vue'], () => {
    resolve(require('./views/moreDetail/moreDetail.vue'))
  },'moreDetail')
}
const buyNow = resolve => {
  require.ensure(['./views/buyNow/buyNow.vue'], () => {
    resolve(require('./views/buyNow/buyNow.vue'))
  },'buyNow')
}
const importNumWallet = resolve => {
  require.ensure(['./views/importNumWallet/importNumWallet.vue'], () => {
    resolve(require('./views/importNumWallet/importNumWallet.vue'))
  },'importNumWallet')
}
const importWalletResult = resolve => {
  require.ensure(['./views/importWalletResult/importWalletResult.vue'], () => {
    resolve(require('./views/importWalletResult/importWalletResult.vue'))
  },'importWalletResult')
}
const dealPassword = resolve => {
  require.ensure(['./views/dealPassword/dealPassword.vue'], () => {
    resolve(require('./views/dealPassword/dealPassword.vue'))
  },'dealPassword')
}
const userCenter = resolve => {
  require.ensure(['./views/userCenter/userCenter.vue'], () => {
    resolve(require('./views/userCenter/userCenter.vue'))
  },'userCenter')
}
const realNameAuth = resolve => {
  require.ensure(['./views/realNameAuth/realNameAuth.vue'], () => {
    resolve(require('./views/realNameAuth/realNameAuth.vue'))
  },'realNameAuth')
}
const passwordManage = resolve => {
  require.ensure(['./views/passwordManage/passwordManage.vue'], () => {
    resolve(require('./views/passwordManage/passwordManage.vue'))
  },'passwordManage')
}
const settings = resolve => {
  require.ensure(['./views/settings/settings.vue'], () => {
    resolve(require('./views/settings/settings.vue'))
  },'settings')
}
const billDetail = resolve => {
  require.ensure(['./views/billDetail/billDetail.vue'], () => {
    resolve(require('./views/billDetail/billDetail.vue'))
  },'billDetail')
}
const bank = resolve => {
  require.ensure(['./views/bank/bank.vue'], () => {
    resolve(require('./views/bank/bank.vue'))
  },'bank')
}
const bindBank = resolve => {
  require.ensure(['./views/bindBank/bindBank.vue'], () => {
    resolve(require('./views/bindBank/bindBank.vue'))
  },'bindBank')
}
const walletFinance = resolve => {
  require.ensure(['./views/walletFinance/walletFinance.vue'], () => {
    resolve(require('./views/walletFinance/walletFinance.vue'))
  },'walletFinance')
}
const walletLife = resolve => {
  require.ensure(['./views/walletLife/walletLife.vue'], () => {
    resolve(require('./views/walletLife/walletLife.vue'))
  },'walletLife')
}
const transferAccount = resolve => {
  require.ensure(['./views/transferAccount/transferAccount.vue'], () => {
    resolve(require('./views/transferAccount/transferAccount.vue'))
  },'transferAccount')
}

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
        path: '/project', 
        name:'project',
        component: project,//项目页面，首页
        title:'项目'
    },
    { 
        path: '/projectDetail', 
        name:'projectDetail',
        component: projectDetail,//项目详情页面
        title:'项目详情'
    },  
    { 
        path: '/calculator', 
        name:'calculator',
        component: calculator,//计算器页面
        title:'计算器'
    },  
    { 
        path: '/moreDetail', 
        name:'moreDetail',
        component: moreDetail,//更多详情页面
        title:'更多详情'
    },  
    { 
        path: '/buyNow', 
        name:'buyNow',
        component: buyNow,//立即购买页面
        title:'立即购买'
    },  
    { 
        path: '/wallet', 
        name:'wallet',
        component: wallet,//钱包页面
        title:'钱包'
    }, 
    { 
        path: '/importNumWallet', 
        name:'importNumWallet',
        component: importNumWallet,//导入数字钱包账户页面
        title:'导入数字钱包账户'
    }, 
    { 
        path: '/importWalletResult', 
        name:'importWalletResult',
        component: importWalletResult,//导入数字钱包结果页面
        title:'申请创建数字钱包账户'
    }, 
    { 
        path: '/dealPassword', 
        name:'dealPassword',
        component: dealPassword,//设置交易密码页面
        title:'设置交易密码'
    }, 
    { 
        path: '/userCenter', 
        name:'userCenter',
        component: userCenter,//个人中心
        title:'个人中心'
    }, 
    { 
        path: '/realNameAuth', 
        name:'realNameAuth',
        component: realNameAuth,//实名认证
        title:'实名认证'
    }, 
    { 
        path: '/passwordManage', 
        name:'passwordManage',
        component: passwordManage,//密码管理
        title:'密码管理'
    }, 
    { 
        path: '/settings', 
        name:'settings',
        component: settings,//用户设置页面
        title:'设置'
    }, 
    { 
        path: '/billDetail', 
        name:'billDetail',
        component: billDetail,//账单明细页面
        title:'账单明细'
    }, 
    { 
        path: '/bank', 
        name:'bank',
        component: bank,//银行卡页面
        title:'银行卡'
    }, 
    { 
        path: '/bindBank', 
        name:'bindBank',
        component: bindBank,//绑定银行卡页面
        title:'绑定银行卡'
    }, 
    { 
        path: '/walletFinance', 
        name:'walletFinance',
        component: walletFinance,//钱包理财页面
        title:'钱包理财'
    }, 
    { 
        path: '/walletLife', 
        name:'walletLife',
        component: walletLife,//钱包生活页面
        title:'钱包生活'
    }, 
    { 
        path: '/transferAccount', 
        name:'transferAccount',
        component: transferAccount,//转账页面
        title:'转账'
    }, 
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