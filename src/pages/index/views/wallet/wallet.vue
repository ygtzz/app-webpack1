<template>
    <div>
        <h2>钱包</h2>
        <ul>
            <li>
                <router-link to="userCenter">个人中心</router-link>
            </li>
            <li>
                <router-link to="settings">设置</router-link>
            </li>
            <li>
                <router-link to="importNumWallet">导入数字钱包</router-link>
            </li>
            <li>
                <router-link to="billDetail">账单明细</router-link>
            </li>
            <li>
                <router-link to="bank">银行卡</router-link>
            </li>
            <li>
                <router-link to="walletFinance">钱包理财</router-link>
            </li>
            <li>
                <router-link to="walletLife">钱包生活</router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    
</style>
<script>
import Vue from 'vue';

export default {
    name:'v-wallet',
    created() {
    
    },
    data() {
      return {
        
      }
    },
    watch:{
        
    },
    computed:{
       
    },
    methods:{
        
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>