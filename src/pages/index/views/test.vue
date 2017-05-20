<template>
    <div class="test stage">
        <h2>test</h2>
        <c-swiper class="swiper" :loop="true">
            <c-swiperItem v-for="n in list">
                <div class="slide">{{n}}</div>
            </c-swiperItem>
        </c-swiper>
        <button @click="fToast">toast</button>
        
    </div>
</template>
<style lang="sass" scoped>
    .swiper{background-image:url('http://pic2.ooopic.com/10/55/95/20b1OOOPICfa.jpg');background-size:cover;}
    .slide{width:750px;height:300px;text-align:center;font-size:80px;line-height:300px;}
    .slide:nth-child(1){background-color:pink;}
    .slide:nth-child(2){background-color:lightgreen;}
    .slide:nth-child(3){background-color:pink;}
    .luck-unit{width:174px;height:167px;background-color:green;}
</style>
<script>
import Vue from 'vue';
import swiper from 'index/widget/swiper.vue';
import swiperItem from 'index/widget/swiperItem.vue';

console.log(swiper.name);
console.log(swiperItem.name);

Vue.component(swiper.name, swiper);
Vue.component(swiperItem.name, swiperItem);

export default {
    name:'v-test',
    created() {
        // setTimeout(() => {
        //     this.list = [1,2,3,4];
        // },3000);
    },
    data() {
      return {
        list:[]
      }
    },
    watch:{
        
    },
    computed:{
       
    },
    methods:{
        fToast(){
this.$toast('lalala1',{
    mode:'queue',
    duration:2000
});
this.$toast('lalala2',{
    mode:'queue',
    duration:2000
});
this.$toast('lalala3',{
    mode:'queue',
    duration:2000
});
this.$toast('lalala4',{
    mode:'queue',
    duration:2000
});
        }
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>