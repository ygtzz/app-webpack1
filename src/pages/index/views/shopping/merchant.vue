<template>
    <div class="merchant" ref="merchant">
        <div class="c">
        <div class="shop">
            <div class="left">
                <div class="title f16">{{seller.name}}</div>
                <div class="desc">
                    <span class="star-wrap dib">
                        <c-star :score="seller.score"></c-star>
                    </span>
                    <span>({{seller.ratingCount}})</span>
                    <span class="orders ml10">
                        月售{{seller.sellCount}}单
                    </span>
                </div>
            </div>
            <div class="right">
                <span @click="fCollect" class="collect-wrap tc">
                    <p class="collect" :class="{'active':bCollect}">
                        <i class="fa fa-heart"></i>
                    </p>
                    <p class="text">{{collectText}}</p>
                </span>
            </div>
        </div>
        <div class="sale">
            <span class="minPrice">
                <p class="gray">起送价</p>
                <p><span class="f24">{{seller.minPrice}}</span><span>元</span></p>
            </span>
            <span class="deliveryPrice">
                <p class="gray">商家配送</p>
                <p><span class="f24">{{seller.deliveryPrice}}</span><span>元</span></p>
            </span>
            <span class="deliveryTime">
                <p class="gray">平均配置时间</p>
                <p><span class="f24">{{seller.deliveryTime}}</span><span>分钟</span></p>
            </span>
        </div>
        <div class="annouce">
            <div class="title f14">公告与活动</div>
            <div class="content-wrap">
                <p class="content">
                    {{seller.bulletin}}
                </p>
                <ul v-if="seller.supports" class="supports">
                    <li v-for="(item,index) in seller.supports" class="support-item">
                        <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                        <span>{{seller.supports[index].description}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="scenery">
            <div class="title f14">商家实景</div>
            <div class="slide-wrap mt5">
                <div class="slide-content" ref="picScroll">
                    <ul class="picList">
                        <li v-for="pic in seller.pics" class="pic-item">
                            <img :src="pic" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="title f14">商家信息</div>
            <div class="content mt8">
                <ul class="infoList">
                    <li v-for="info in seller.infos" class="info-item">{{info}}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<style lang="sass" scoped>
    .merchant{height:480px;overflow-y:hidden;}
    .c{font-size:dpr(12px)}
    .shop{padding:15px 20px;display:flex;
        .star-wrap{width:90px;}
    }
    .sale{padding:15px 0;border-top:1px solid #dbdbdb;
        display:flex;justify-content:space-around;line-height:1.2;
        &>span{flex:1;text-align:center;}
        &>span:not(:last-child){border-right:1px solid #dbdbdb;}
    }
    .left{flex:1}
    .collect-wrap{}
    .collect{color:#d4d6d9;font-size:dpr(20px);
        width:40px;
        &.active{color:#f01414}
    }
    .annouce{padding:15px 22px;border-top:1px solid #dbdbdb;
        .content-wrap{padding:5px 10px;}
        .content{color:#f01414;}
    }
    .supports{margin-top:15px;}
    .support-item{padding:10px 0;border-top:1px solid #dbdbdb;
        *{vertical-align:middle}
    }
    .decrease{
        background-image:url(./merchant/decrease_4@2x.png)
    }
    .discount{background-image:url(./merchant/discount_4@2x.png)} 
    .special{background-image:url(./merchant/special_4@2x.png)} 
    .invoice{background-image:url(./merchant/invoice_4@2x.png)} 
    .guarantee{background-image:url(./merchant/guarantee_4@2x.png)}
    .scenery{padding:15px 22px;
        border-top:1px solid #dbdbdb;
        border-bottom:1px solid #dbdbdb;
        .slide-content{width:100%;overflow:hidden;}
        .picList{height:90px;width:505px;}
        .pic-item{display:inline-block;
            img{height:90px;width:120px;}
        }
        .pic-item:not(:last-child){margin-right:8px;}
    }
    .info{padding:15px 22px;padding-bottom:0;
        .info-item{padding:10px;border-top:1px solid #dbdbdb;}
    }
</style>
<script>
import star from './star.vue';
import BScroll from 'better-scroll';

export default {
    name:'c-merchant',
    mounted(){
        this.$nextTick(() => {
            this.fInitScroll();
            this.fInitPicScroll();
        })
    },
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data(){
        return {
            classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee'],
            scroll:'',
            picScroll:'',
            bCollect:false
        }
    },
    computed:{
        collectText(){
            return this.bCollect ? '已收藏' : '收藏';
        }
    },
    wacth:{
        seller:function(){
            this.$nextTick(() => {
                this.fInitScroll();
                this.fInitPicScroll();
            })
        }
    },
    methods:{
        fCollect(){
            this.bCollect = !this.bCollect;
        },
        fInitScroll(){
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.merchant,{
                    click:true
                })
            }
            else{
                this.scroll.refresh();
            }
        },
        fInitPicScroll(){
            if(!this.picScroll){
                this.picScroll = new BScroll(this.$refs.picScroll,{
                    scrollX:true,
                    eventPassthrough:'vertical'
                })
            }
            else{
                this.picScroll.refresh();
            }
        }
    },
    components:{
        'c-star':star
    }
}
</script>