<template>
    <div class="star">
        <ul class="list">
            <li class="item" v-for="n in 5">
                <i class="fa fa-star" :class="{'active':n<=score}"></i>
            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    .star{text-align:center;width:100%;}
    .list{width:100%;display:flex;font-size:dpr(12px);justify-content:space-around;}
    .item{color:#D4D6D9;}
    .active{color:#FF9900}
</style>
<script>
export default {
    name:'c-star',
    props:{
        score:{
            type:Number,
            required:true
        }
    }
}
</script>