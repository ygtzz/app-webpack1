<template>
    <div class="test stage">
        <h2>test</h2>
        <c-slider class="swiper" :loop="true">
            <c-sliderItem v-for="n in list" :key="n">
                <div class="slide">{{n}}</div>
            </c-sliderItem>
        </c-slider>
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
import {slider, sliderItem } from 'we-vue-slider';
import 'we-vue-slider/dist/vue-slider.css';

Vue.component('c-slider',slider);
Vue.component('c-sliderItem',sliderItem);

export default {
    name:'v-test',
    created() {
        setTimeout(() => {
            this.list = [1,2,3,4];
        },3000);
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
       
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>