<template>
    <div class="c">
        <div class="main">
            <div class="left" ref="menuWrapper">
                <ul class="menu" >
                    <li @click="fMenuItemClick(item,index)" :class="{'active':activeMenuIndex==index}" class="item f12" v-for="(item,index) in goods">{{item.name}}</li>
                </ul>
            </div>
            <div class="right" ref="foodsWrapper">
                <ul>
                    <li v-for="item in goods" ref="foodList">
                        <div class="title f12"> {{item.name}}</div>
                        <c-food :foods="item.foods"></c-food>
                    </li>
                </ul>
            </div>
        </div>
        <footer>
            <c-shopcart></c-shopcart>        
        </footer>
    </div>
</template>
<style lang="sass" scoped>
    .c{display:flex;flex-direction:column;}
    .main{display:flex;flex:1;}
    footer{position:fixed;bottom:0;width:100%;}
    .left{width:80px;height:438px;overflow-y:hidden;}
    .right{flex:1;
        height:470px;
        overflow-y:hidden;
    }
    .item{padding:15px;background-color:#F3F5F7;
        &.active{background-color:#fff}
    }
    .title{color:#93999f;line-height:2.1;background:#F3F5F7;padding-left:14px;border-left:2px solid #D9DDE1;}
</style>
<script>
import data from 'index/mock/data';
import food from './food.vue';
import BScroll from 'better-scroll';
import _ from 'lodash';
import shopcart from './shopcart.vue';

export default {
    name:'c-goods',
    created(){
        this.goods = data.goods;
        this.fFoodsScrollThrottle = _.throttle(this.fFoodsScroll,50);
    },
    mounted(){
        this.$nextTick(() => {
            this.fInitScroll();
            this.fCalcFoodHeight();
        });
    },
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            goods:[],
            scrollY: 0,
            menuScroll:'',
            foodsScroll:'',
            aFoodHeight:[]
        }
    },
    computed:{
        activeMenuIndex(){
            let index = 0;
            const aFoodHeight = this.aFoodHeight;
            for(let i=0;i<this.aFoodHeight.length;i++){
                if(aFoodHeight[i] <= this.scrollY && this.scrollY < aFoodHeight[i+1]){
                    index = i;
                }
            }
            return index;
        }
    },
    methods:{
        fMenuItemClick(item,index){
            this.activeMenuId = index;
            const foodList = this.$refs.foodList;
            const el = foodList[index];
            this.foodsScroll.scrollToElement(el,300);
        },
        fInitScroll(){
            this.meunScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            });
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                click: true,
                probeType: 3
            });
            this.foodsScroll.on('scroll', (pos) => {
                this.fFoodsScrollThrottle(pos);
            });
        },
        fFoodsScroll(pos){
            this.scrollY = Math.abs(Math.round(pos.y));
        },
        fCalcFoodHeight(){
            const aFood = this.$refs.foodList;
            this.aFoodHeight.push(0);
            Array.prototype.forEach.call(aFood,item => {
                this.aFoodHeight.push(this.aFoodHeight[this.aFoodHeight.length-1] + item.offsetHeight);
            });
            this.aFoodHeight.push(Number.Max_VALUE);
        }
    },
    components:{
        'c-food':food,
        'c-shopcart':shopcart
    }
}
</script>