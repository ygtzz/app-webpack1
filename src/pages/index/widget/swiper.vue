<template>
    <div class="swiper">
        <div ref="slideWrapper" class="slide-wrap">
            <slot></slot>
        </div>
        <div class="pager-wrap">
            <ul class="pagerList">
                <li v-for="n in pageCount" class="pagerItem">
                    <span class="icon icon-dot"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .swiper{position:relative;}
    .slide-wrap{position:relative;}
    .swiperItem{}
    .pager-wrap{position:absolute;bottom:10px;right:10px;}
    .icon-dot{width:10px;height:10px;border-radius:50%;background-color:#ccc;
        &.active{background-color:red;}
    }
</style>
<script>
export default {
    name:'c-swiper',
    created(){
        
    },
    mounted(){
        this.$nextTick(() => {
            console.log(this.$refs.slideWrapper.children)
            this.pageCount = this.$refs.slideWrapper.children.length;
        });
    },
    data(){
        return {
            pageCount:1
        }
    },
    computed:{
        
    },
    watch:{
        
    },
    methods:{
    },
    components:{

    }
}
</script>
