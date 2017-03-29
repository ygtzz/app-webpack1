<template>
    <ul class="list">
        <li class="item" v-for="item in foods">
            <div class="inner">
                <div class="img mr10">
                    <img :src="item.icon" alt="foods icon">
                </div>
                <div class="info">
                    <p class="title">{{item.name}}</p>
                    <p class="desc f12">{{item.description}}</p>
                    <p class="sale f12">月售{{item.sellCount}}份  好评率{{item.rating}}%</p>
                    <p class="price">¥{{item.price}}</p>
                </div>
                <div class="other">
                    <span class="add dib f18">+</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<style lang="sass" scoped>
    .item{
        padding:15px;
        &:last-child{padding-bottom:22px;}
        &:not(:last-child) .inner{border-bottom:1px solid #f3f3f4;}
    }
    .inner{display:flex;padding-bottom:20px;height:100%;}
    .img{
        img{width:57px;height:57px;}
    }
    .info{flex:1}
    .desc{color:#93999F}
    .sale{color:#93999F}
    .price{color:#F34949}
    .other{display:flex;flex-direction:column;justify-content:flex-end}
    .add{background:#00A0DC;color:#fff;border-radius:50%;width:20px;height:20px;line-height:1;text-align:center;}
</style>
<script>
import data from 'index/mock/data';

export default {
    name:'c-food',
    props:{
        foods:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
           
        }
    },
    methods:{
        fMenuItemClick(item){
            this.activeMenuName = item.name;
        }
    }
}
</script>