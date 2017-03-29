<template>
    <div class="c" ref="comment">
        <div class="scroll-content">
            <div class="rate f12">
                <div class="left tc">
                    <p class="score">{{seller.score}}</p>
                    <p>综合评分</p>
                    <p class="gray">高于周边商家{{seller.rankRate}}%</p>
                </div>
                <div class="right">
                    <p class="score-wrap">
                        <span>服务态度</span>
                        <span class="mid">
                            <c-star :score="seller.serviceScore"></c-star>
                        </span>
                        <span>{{seller.serviceScore}}</span>
                    </p>
                    <p class="score-wrap">
                        <span>商品评分</span>
                        <span class="mid">
                            <c-star :score="seller.foodScore"></c-star>
                        </span>
                        <span>{{seller.foodScore}}</span>
                    </p>
                    <p class="time">
                        <span>送达时间</span>
                        <span class="mid gray">{{seller.deliveryTime}}分钟</span>
                    </p>
                </div>
            </div>
            <div class="comment-wrap">
                <div class="count">
                    <span @click="fSelectComment(2)" :class="{'active':selectType==2}" class="all">全部 {{ratings.length}}</span>
                    <span @click="fSelectComment(0)" :class="{'active':selectType==0}" class="satisfy ml5">满意 {{aSatisfy.length}}</span>
                    <span @click="fSelectComment(1)" :class="{'active':selectType==1}" class="unsatisfy ml5">不满意 {{aUnSatisfy.length}}</span>
                    <div class="split mt20"></div>
                </div>
                <div class="set" @click="fToggleComment">
                    <span :class="{'active':!bShowNoContent}" class="check-wrap vm">
                        <i class="fa fa-check-circle"></i>
                    </span>
                    <span class="set-text vm gray">只看有内容的评价</span>
                </div>
                <ul class="commentList">
                    <li v-for="rating in ratings" v-show="fShow(rating.rateType, rating.text)" class="item">
                        <div class="item-inner">
                            <div class="img">
                                <img :src="rating.avatar" alt="avatar">
                            </div>
                            <div class="info">
                                <p class="user fix mb4">
                                    <span>{{rating.username}}</span>
                                    <span class="gray r">{{rating.rateTime | fmtDate}}</span>
                                </p>
                                <p class="rating mb4">
                                    <span class="star-wrap">
                                        <c-star :score="4"></c-star>
                                    </span>
                                    <span class="gray">{{rating.score}}</span>
                                </p>
                                <p class="comment mb5">
                                    {{rating.text}}
                                </p>
                                <p class="tag" v-show="rating.recommend && rating.recommend.length">
                                    <ul class="dib tagList">
                                        <span class="thumb-wrap dib mr3">
                                            <i class="fa fa-thumbs-up"></i>
                                        </span>
                                        <li v-for="item in rating.recommend" class="tag-item">{{item}}</li>
                                    </ul>
                                </p>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .c{font-size:dpr(12px);height:480px;overflow:hidden;}
    .rate{display:flex;
        padding:15px 10px;
        .left{border-right:1px solid #b1b5b9;padding-right:10px;}
        .right{flex:1;padding-left:20px;padding-top:5px;
            p{*{display:inline-block;}}
        }
        border-bottom:1px solid #b1b5b9;
    }
    .score-wrap{margin-bottom:8px;}
    .mid{padding:0 10px;width:90px;}
    :global(.mid .fa-star){font-size:dpr(16px)}
    .score{font-size:50px;color:#FF9900;}
    .count{padding:22px;font-size:dpr(12px);padding-bottom:0;
        .split{border-bottom:1px solid #F3F3F4;}
    }
    .all{padding:8px 12px;background:#CCECF8;color:#606C75;}
    .satisfy{padding:8px 12px;background:#CCECF8;color:#606C75;}
    .unsatisfy{padding:8px 12px;background:#DBDDDE;color:#606C75;}
    .all,.satisfy{&.active{background:#00A0DC;color:#fff;}}   
    .unsatisfy{&.active{background:#4D555D;color:#fff;}} 
    .set{padding:10px 22px;}
    .check-wrap{color:#93999F;font-size:dpr(22px);
        &.active{color:#00C850}
    }
    .commentList{border-top:1px solid #b1b5b9;}
    .item{padding:0 18px;}
    .item-inner{display:flex;padding:15px;padding-left:22px;border-bottom:1px solid #E6E7E8;}
    .img{
        margin-right:10px;
        img{width:28px;height:28px;border-radius:50%;}
    }
    .info{flex:1;
        .star-wrap{width:65px;display:inline-block;margin-left:-2px;}
        .thumb-wrap{color:#00A0DC;}
    }
    .tagList{}
    .tag-item{border:1px solid #b1b5b9;padding:1px 5px;display:inline-block;color:#9CA2A7;
        margin-top:2px;transform:scale(.9);border-radius:1px;
    }
</style>
<script>
import star from './star.vue';
import data from 'index/mock/data';
import {fmtDate} from 'widget/util/util';
import BScroll from 'better-scroll';

export default {
    name:'c-comment',
    created(){
        this.ratings = data.ratings;
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.comment,{
                click:true
            })
        });
    },
    mounted(){
        
    },
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data(){
        return {
            bShowNoContent:false,
            ratings:[],
            commentType:{
                ALL : 2,
                POSITIVE : 0,
                NEGATIVE : 1
            },
            selectType:2,
            scroll:''
        }
    },
    computed:{
        aSatisfy(){
            return this.ratings.filter(item => {
                return item.rateType == this.commentType['POSITIVE'];
            })
        },
        aUnSatisfy(){
            return this.ratings.filter(item => {
                return item.rateType == this.commentType['NEGATIVE'];
            })
        }
    },
    methods:{
        fToggleComment(){
            this.bShowNoContent = !this.bShowNoContent;
            this.$nextTick(() => {
                this.scroll.refresh();
            });
        },
        fSelectComment(type){
            this.selectType = type;
            this.$nextTick(() => {
                this.scroll.refresh();
            });
        },
        fShow(type,content){
            if(content == '' && !this.bShowNoContent){
                return false;
            }
            if(this.selectType == this.commentType['ALL']){
                return true;
            }
            else{
                return type == this.selectType;
            }
        }
    },
    components:{
        'c-star':star
    },
    filters:{
        'fmtDate':fmtDate
    }
}
</script>