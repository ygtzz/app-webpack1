import {types} from '../mutation-types'
import _ from 'lodash';

const state = {
    loading:false,
     "control": {
        "message": "操作成功",
        "error": 0,
        "serverTime": 1482290477171,
        "type": 400,
        "version": "2.0"
    },
    "data": {
        "userId": "F04FD5F19C6AF5515812E29ED9B789BD",
        "other": {
            "noticeMaxId": 27,
            "unbindCopywrite": '' //未绑卡文案
        },
        "act": {
            "welfareNum": "13张礼券",  //几张未使用
            "ifDot": "0",                          //是否打点            (2,"我的礼券");
            "mineDot": "0",       //是否打点   (1,"我的")    
            "actFlag": 0
        },
        "user": {
            "toBeCollectedInterest": 128.37,                        //// 待收收益            
            "totalAmount": "52118.97",                         // 总资产
            "cash": 121.17,                      // 用户余额
            "accountType": 3,                 //绑卡状态
            "userName": "13232",                          /** 昵称 */
            "userTotalInterest": 1120.6,                       //// 用户的累计收益
            "toBeCollectedPrincipal": 23169.43,               // 待收本金
            "portraitPath": "http://tva1.sinaimg.cn/crop.0.0.664.664.50/005TtEDDjw8f77epfuemlj30ig0ig74g.jpg"
        }
    }
}
const mutations = {
    [types['getUserInfo.start']](state, payload) {
        state.loading = true;
    },
    [types['getUserInfo.ok']](state, payload) {
        state.loading = false;
        console.log('user ok')
        console.log(payload)
        _.merge(state,payload);
    },
    [types['getUserInfo.error']](state, payload) {
        
    }
}

export default {
    state,
    mutations
}
