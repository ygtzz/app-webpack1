<template>
    <div class="shopping">
        <header>
            <c-header :seller="seller"></c-header>
        </header>
        <section class="body">
            <ul class="menu">
                <li @click="fMenuItemClick(index)" :class="{'active':index==sActiveId}" class="item" v-for="(item,index) in aMenu">{{item}}</li>
            </ul>
            <div class="wrap">
                <router-view :seller="seller"></router-view>
            </div>
        </section>
        <footer>
        </footer>
    </div>
</template>
<style lang="sass" scoped>
    .shopping{display:flex;flex-direction:column;height:100%;overflow:hidden;}
    .body{flex:1;}
    .menu{display:flex;align-items:center;border-bottom:1px solid #ccc;}
    .item{flex:1;text-align:center;padding:8px 0;
        &.active{color:#F45858;}
    }
</style>
<script>
import {mapGetters,mapActions} from "vuex";
import header from './shopping/header.vue';
import {urlParse,fmtDate} from 'widget/util/util';
import _ from 'lodash';
import data from 'index/mock/data';

export default {
    name:'v-shopping',
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