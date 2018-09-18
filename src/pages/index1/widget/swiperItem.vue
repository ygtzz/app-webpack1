<template>
    <div class="swiperItem" :style="style">
        <slot></slot>
    </div>
</template>
<style lang="sass" scoped>
    .swiperItem{position:absolute;width:100%;height:100%}
</style>
<script>
export default {
    name:'c-swiperItem',
    created(){
        this.$parent.init();
    },
    data(){
        return {
            style:{
                webkitTransform:'',
                webkitTransiton:''
            }
        }
    }
}
</script>
