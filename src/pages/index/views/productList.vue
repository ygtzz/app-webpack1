<template>
    <div class="productList">
        <div class="productList-banner tc">
            <p class="f60">7%稳赚一年</p>
            <p class="f28 title2">69%用户的安心之选，投5万赚3500元</p>
            <div class="btn-wrap">
                <button class="btn btn-want">我要稳赚</button>
            </div>
            <div class="bg"></div>
        </div>
        <div class="panel short">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>   
                    <span class="f24 text">短期</span>
                </span>
                <span class="f28 g6">快进快出，短小精赚</span>
                <span class="r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">3.2%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">65天</span>
                        <span class="icon icon-limit">限量爆款</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
            </div>
        </div>
        <div class="panel medium">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>   
                    <span class="f24 text">中期</span>
                </span>
                <span class="f28 g6">收益稳定，省心省力</span>
                <span class="r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">4.7%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">128天</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
                <div class="icon icon-start-sell"></div>                
            </div>
        </div>
        <div class="panel long">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>   
                    <span class="f24 text">长期</span>
                </span>
                <span class="f28 g6">一年整一次，一次整一年</span>
                <span class="r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">5.3%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">360天</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
                <div class="icon icon-sell-out"></div>                
            </div>
        </div>
        <div class="text-info">
            <span class="line vm"></span>
            <span class="text">优质资产，保险保障</span>
            <span class="line vm"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .productList{
        background-color:#f2f2f2;
    }
    .productList-banner{padding-top:68px;padding-bottom:50px;position:relative;
            background-color:rgba(0,0,0,.9);color:#fff;
            .title2{margin-top:18px;}    
            .btn-wrap{margin-top:39px;}
            .bg{background-image:url('./productList/banner-bg.png');
                width:100%;height:100%;top:0;left:0;
                position:absolute;}     
    }
    .btn-want{padding:12px 32px;border:1px solid #fff;background-color:transparent;}
    .panel{background-color:#fff;margin-top:20px;
        border-top:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        .header{height:100px;line-height:100px;border-bottom:1px solid #e5e5e5;
             padding-left:26px;padding-right:26px;
            *{vertical-align:middle;}
        }
        .body{padding-top:47px;padding-bottom:60px;position:relative;}
        .left{padding-left:60px;padding-right:40px;
            border-right:1px solid #e5e5e5;
        }
        .right{padding-left:44px;}
    }
    .text-info{height:80px;line-height:80px;color:#cbcbcb;text-align:center;
        letter-spacing:5px;
    }
    .icon-wrap{
        border:2px solid #ffa200;border-radius:4px;
        height:39px;line-height:1;color:#ffa200;
        display:inline-block;
        *{vertical-align:middle;}
        .icon{background-color:#ffa200;padding:6px;}
        .text{padding-left:1px;padding-right:7px;}
    }
    .icon-short{background-image:url('./productList/rmb@2x.png');height:100%;width:35px;
        background-size:25px 23px;}
    .icon-medium{background-image:url('./productList/dollar@2x.png');background-size:25px 23px;}
    .icon-long{background-image:url('./productList/diamond@2x.png');background-size:25px 23px;}
    
    .icon-start-sell{background-image:url('./productList/begin-sell@2x.png');
        width:100px;height:105px;position:absolute;bottom:0;right:0;}
    .icon-sell-out{background-image:url('./productList/sell-out@2x.png');
        width:100px;height:105px;position:absolute;bottom:0;right:0;}
</style>
<script>
import {mapGetters,mapActions} from "vuex";
import header from './shopping/header.vue';
import {urlParse,fmtDate} from 'widget/util/util';
import _ from 'lodash';
import data from 'index/mock/data';

export default {
    name:'v-productList',
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