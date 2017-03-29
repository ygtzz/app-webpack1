<template>
    <div class="shopcart f12">
        <div class="left">
            <span class="cart-outer dib">
                 <span class="cart-inner">
                    <i class="fa fa-shopping-cart f20"></i>
                </span>
            </span>
            <span class="price b f16 ml10">¥{{price}}</span>
            <span class="f18 ml5">|</span>
            <span class="ml5">另需配送费¥4元</span>
        </div>
        <div class="right">¥20元起送</div>
    </div>
</template>
<style lang="sass" scoped>
    .shopcart{height:48px;line-height:48px;background:#141D27;color:#72777D;display:flex;align-items:center;}
    .left{flex:1;}
    .price{}
    .right{padding:0 15px;color:#7D8287;background:#2B333B}
    .cart-outer{padding:5px;border-radius:50%;background:#141d27;position:relative;top:-10px;margin-left:10px;}
    .cart-inner{padding:14px;background:#2B343C;border-radius:50%;}
</style>
<script>
export default {
    name:'c-shopcart',
    data(){
        return {
            price:0
        }
    },
    props:{
        
    }
}
</script>