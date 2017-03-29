<template>
    <div class="detail">
        <div class="banner">
            <p>7%稳赚一年</p>
            <p>69%用户的安心之选，投5万赚3500元</p>
            <div class="btn-wrap">
                <button>我要稳赚</button>
            </div>
        </div>
        <div class="panel short">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>
                    <span>短期</span>
                </span>
                <span>快进快出，短小精赚</span>
                <span class="r">
                    <span>查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib">
                    <p>3.2%</p>
                    <p>预期年化收益率</p>
                </div>
                <div class="dib">
                    <p>
                        <span>65天</span>
                        <span>限量爆款</span>
                    </p>
                    <p>天金所发行 · 长安保险承保</p>
                </div>
            </div>
        </div>
        <div class="panel medium">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>
                    <span>中期</span>
                </span>
                <span>收益稳定，省心省力</span>
                <span class="r">
                    <span>查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib">
                    <p>4.7%</p>
                    <p>预期年化收益率</p>
                </div>
                <div class="dib">
                    <p>
                        <span>128天</span>
                    </p>
                    <p>天金所发行，长安保险承保</p>
                </div>
                <div class="icon icon-start-sell"></div>
            </div>
        </div>
        <div class="panel long">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>
                    <span>长期</span>
                </span>
                <span>一年整一次，一次整一年</span>
                <span class="r">
                    <span>查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib">
                    <p>5.3%</p>
                    <p>预期年化收益率</p>
                </div>
                <div class="dib">
                    <p>
                        <span>360天</span>
                    </p>
                    <p>天金所发行 · 长安保险承保</p>
                </div>
                <div class="icon icon-start-sell"></div>
            </div>
        </div>
        <div class="text-info">
            <span class="line"></span>
            <span class="text">优质资产，保险保障</span>
            <span class="line"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    
</style>
<script>
import {mapGetters,mapActions} from "vuex";
import header from './shopping/header.vue';
import {urlParse,fmtDate} from 'widget/util/util';
import _ from 'lodash';
import data from 'index/mock/data';

export default {
    name:'v-detail',
    created() {
        
    },
    data() {
      return {
        seller: data.seller,
        aMenu:['商品','评论','商家'],
        sActiveId:''
      }
    },
    computed:{
       
    },
    methods:{
        fMenuItemClick(index){
            this.sActiveId = index;
            const map = {0:'goods',1:'comment',2:'merchant'};
            this.$router.push({name:map[index]});
        }
    },
    components:{
        'c-header':header
    },
    filters:{
        fmtDate:fmtDate
    }
}
</script>