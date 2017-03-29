<template>
    <div>
        <div class="header">
            <div class="banner">
                <div class="img">
                    <img :src="seller.avatar" alt="seller">
                </div>
                <div class="info">
                    <p class="title"><span class="brand"></span><span v-text="seller.name"></span></p>
                    <p class="delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
                    <p class="discount" v-if="seller.supports">
                        <span class="icon decrease mr5"></span>
                        <span>{{seller.supports[0].description}}</span>
                    </p>
                </div>
                <div class="other" v-if="seller.supports" @click="fShowDetail(true)">
                    <span class="count">{{seller.supports.length}}个<span class="fa fa-angle-right ml5"></span></span>
                </div>
            </div>
            <div class="bulletin" @click="fShowDetail(true)">
                <span class="bulletin-icon dib"></span>
                <span class="bulletin-text dib ell" v-text="seller.bulletin"></span>
                <span class="fa fa-angle-right ml2"></span>
            </div>
            <div class="bg">
                <img :src="seller.avatar" alt="bg">
            </div>
        </div>
        <transition name="fade">
            <div class="stage detail f12" v-show="bShowDetail">
                <h3 class="name tc f16">{{seller.name}}</h3>
                <div class="star-wrap">
                    <c-star :score="4"></c-star>
                </div>
                <div class="title mt15">
                    <div class="line"></div>
                    <div class="text f16">优惠信息</div>
                    <div class="line"></div>
                </div>
                <ul v-if="seller.supports" class="supports mt15">
                    <li class="support-item" v-for="(item,index) in seller.supports">
                        <span class="icon vm" :class="classMap[seller.supports[index].type]"></span>
                        <span class="text vm">{{seller.supports[index].description}}</span>
                    </li>
                </ul>
                <div class="title mt20">
                    <div class="line"></div>
                    <div class="text f16">商家公告</div>
                    <div class="line"></div>
                </div>
                <div class="mt15">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
                <div class="close tc mt20" @click="fShowDetail(false)">
                    <i>×</i>
                </div>
            </div>
        </transition>
    </div>
</template>
<style lang="sass" scoped>
    .header{width:100%;height:134px;position:relative;background:rgba(7,17,27,.5);color:#fff;}
    .banner{width:100%;position:relative;display:flex;padding:24px 12px 18px 24px;box-sizing:border-box;}
    .img{img{width:64px;height:64px;margin-right:16px;vertical-align:middle;}}
    .info{flex:1;font-size:dpr(12px);line-height:1;
        .delivery{margin-top:8px}
        .discount{margin-top:10px}
        .brand{width: 30px;height: 18px;background-image:url(./header/brand@2x.png);
            background-size: cover;vertical-align: bottom;display: inline-block;margin-right:6px;}
        .discount{& *{vertical-align:middle}}
        .decrease{background-image:url(./header/decrease_1@2x.png);width:12px;height:12px;display:inline-block;}
        .title{font-size:dpr(16px);& *{vertical-align:middle}}
    }
    .other{display:flex;align-items:flex-end;}
    .count{padding:2px 8px;border-radius:22px;background:rgba(0,0,0,0.2);font-size:dpr(12px)}
    .bulletin{display:flex;align-items:center;padding:0 22px 0 12px;box-sizing:border-box;background:rgba(7,17,27,0.2);line-height:2;height:28px;}
    .bulletin-icon{width:22px;height:12px;margin-right:3px;background:url(./header/bulletin@2x.png);}    
    .bulletin-text{flex:1;font-size:dpr(12px)}
    .bg{filter:blur(10px);width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;
        img{width:100%;height:100%;vertical-align:middle}
    }
    .detail{
         line-height:2;
         background:rgba(7,17,27,0.8);z-index:2;color:#fff;padding:30px 40px;
         .name{margin-top:23px;}
        .title{display:flex;align-items:center}        
        .text{padding:0 10px;}
        .line{height:0;border:1px solid rgba(255,255,255,0.2);flex:1}
        .star-wrap{width:200px;margin:0 auto;}
        :global(.star-wrap .star .fa-star){font-size:dpr(20px)}
        .close{font-size:100px;}
        .decrease{background-image:url('./header/decrease_1@2x.png')}
        .discount{background-image:url('./header/discount_1@2x.png')}
        .guarantee{background-image:url('./header/guarantee_1@2x.png')}
        .invoice{background-image:url('./header/invoice_1@2x.png')}
        .special{background-image:url('./header/special_1@2x.png')}  
    }
</style>
<script>
import {fmtDate} from 'widget/util/util';
import star from './star.vue';

export default {
    name:'shopping-header',
    created() {
        
    },
    props:{
        seller:{
            type:Object
        }
    },
    data(){
        return {
            bShowDetail:false,
            classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    },
    computed:{
       
    },
    methods:{
        fShowDetail(bShow){
            this.bShowDetail = bShow;
        }
    },
    components:{
        'c-star':star
    },
    filters:{
        fmtDate:fmtDate
    }
}
</script>