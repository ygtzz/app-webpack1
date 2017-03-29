<template>
    <div class="home">
        <div class="header">
            <div class="home-banner">
                <div class="banner-top">
                    <div class="user fix f24">
                        <span class="icon avatar dib vm">
                            <img src="./me/avatar@2x.png" alt="avatar">
                        </span>
                        <span class="name vm">Hi，喵了个咪~</span>
                        <span class="icon r icon-tree tree"></span>
                    </div>
                    <div class="title-wrap tc">
                        <p class="f40 white">提取绑卡，理财快人一步</p>
                    </div>
                    <div class="bind-wrap tc">
                        <button class="btn btn-bind">绑定银行卡</button>
                    </div>
                </div>
                <div class="arc"></div>
            </div>
            <div class="slide-wrap">
                <mt-swipe class="slide-list" :auto="40000">
                    <mt-swipe-item class="slide">1</mt-swipe-item>
                    <mt-swipe-item class="slide">2</mt-swipe-item>
                    <mt-swipe-item class="slide">3</mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="panel fast">
            <div class="header">
                <span class="f28 g3">快速投资</span>
            </div>
            <div class="body">
                <div ref="fastWrapper" class="fast-wrap">
                    <ul class="fast-list">
                        <li class="fast-item">
                            <p class="fast-title">短期(1-3月)</p>
                            <p class="c-orange f40">2.6%~3.1%</p>
                        </li>
                        <li class="fast-item">
                            <p class="fast-title">中期(4-6个月)</p>
                            <p class="c-orange f40">3.6%~4.1%</p>
                        </li>
                        <li class="fast-item">
                            <p class="fast-title">长期(7-12个月)</p>
                            <p class="c-orange f40">4.6%~5.3%</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel newer">
            <div class="header">
                <span class="f28 g3">新手推荐</span>
                <span class="dn r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">5.7%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">360天</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
            </div>
        </div>
        <div class="panel choice">
            <div class="header">
                <span class="f28 g3">精选理财</span>
                <span class="r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">3.7%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">90天</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
            </div>
        </div>
        <div class="text-info tc">
            <span class="icon icon-managemoney"></span>
            <span class="text">微博上的理财平台</span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .home{background:#f2f2f2;width:100%;
        .header,.info,.panel{background:#fff}
        .header{height:570px;}
    }
    .home-banner{
        .banner-top{
            height:374px;
            background-image:url('./common/banner-1px.png');
            background-size:100% 100%;
            background-color:#ff5a00;
            padding-top:36px;
        }
        .arc{
            height:24px;
            background-image:url('./home/banner-home-arc.png');
        }
    }
    .user{padding-left:25px;padding-right:20px;line-height:80px;}
    .avatar{
        height:60px;width:60px;margin-right:24px;
        img{border-radius:50%;}
        img{width:100%;height:100%;}  
    }    
    .title-wrap{
        margin-top:42px;
    }
    .bind-wrap{margin-top:45px;}
    .btn-bind{background-color:#fff072;color:#ff5000;border:0;border-radius:4px;
        width:314px;height:82px;
        font-size:dpr(36px);
    }
    .slide-wrap{height:180px;}
    :global(.slide-list .mint-swipe-indicators){
        left:90%
    }
    :global(.slide-list .mint-swipe-indicator.is-active){
        background: #ff8200;
    }
    .slide{line-height:180px;text-align:center;font-size:40px;}
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
    .fast{.body{padding:26px;}}
    .fast-wrap{width:100%;}
    .fast-list{width:900px;}
    .fast-item{border:1px solid #e5e5e5;display:inline-block;padding:30px;
        text-align:center;
        &:not(:last-child){margin-right:30px;}
    }
    .fast-title{color:#7a7a7a;font-size:dpr(28px)}    
    .text-info{height:95px;line-height:95px;}
    .icon-tree{background-image:url('./home/tree@2x.png');width:70px;height:80px;}
    .icon-managemoney{background-image:url('./home/managemoney@2x.png');width:54px;height:27px;}
</style>
<script>
import Vue from 'vue';
import {mapGetters,mapActions} from "vuex";
import BScroll from 'better-scroll';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    name:'v-home',
    created() {
        this.$nextTick(() => {
            this.fastScroll = new BScroll(this.$refs.fastWrapper,{
                click: true,
                scrollX: true
            })
        });
    },
    data() {
      return {
        fastScroll:''
      }
    },
    computed:{
       
    },
    methods:{
        fMenuItemClick(index){
           
        }
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>