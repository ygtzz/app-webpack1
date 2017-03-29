<template>
    <div class="unbind">
        <h2>home</h2>
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
    name:'v-unbind',
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