import {types} from './mutation-types';
import Vue from 'vue';
import url from './url';

export function fGetUserInfo({commit},payLoad) {
    commit(types['getUserInfo.start']);
    return Vue.http.get(url['getUserInfo'],{params:payLoad}).then(function(res) {
        commit(types['getUserInfo.ok'], res.data);
    }).catch(function(err){
        commit(types['getUserInfo.error'],err);
        return Promise.reject(err);
    });
}

export function fGetFinanceListData({commit},payLoad) {
    commit(types['getFinanceListData.start']);
    return Vue.http.get(url['getFinanceListData'],{params:payLoad}).then(function(res) {
        commit(types['getFinanceListData.ok'], res.data.data);
    }).catch(function(err){
        commit(types['getFinanceListData.error'],err);
        return Promise.reject(err);
    });
}

export function fRequestIndexData({commit},payLoad) {
    commit(types['requestIndexData.start']);
    return Vue.http.get(url['requestIndexData'],{params:payload}).then(function(res) {
        commit(types['requestIndexData.ok'], res.data);
    }).catch(function(err){
        commit(types['requestIndexData.error'],err);
        return Promise.reject(err);
    });
}

