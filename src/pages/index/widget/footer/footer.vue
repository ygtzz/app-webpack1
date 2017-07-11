<template>
    <div class="footer" v-show="bShowFooter">
        <router-link :class="{'active':sNavActiveName==item.name}" v-for="item in aNav" :key="'nav' + item" :to="{name:item.name}">
            <div @click="fNavClick(item)" class="inner">
                <i class="icon" :class="[item.icon]"></i>
                <p class="mt5" v-text="item.text"></p>
            </div>
        </router-link>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-footer',
    className: 'footer',
    props:{
        routeName:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            aNav:[
                 {
                    name:'project',
                    icon:'icon-home',
                    text:'项目'
                },
                {
                    name:'wallet',
                    icon:'icon-finance',
                    text:'钱包'
                }
                // {
                //     name:'home',
                //     icon:'icon-home',
                //     text:'首页'
                // },
                // {
                //     name:'finance',
                //     icon:'icon-finance',
                //     text:'理财'
                // },
                // {
                //     name:'me',
                //     icon:'icon-me',
                //     text:'我的'
                // }
            ],
            sNavActiveName:'project'
        }
    },
    watch:{
        routeName:function(val){
            console.log('val ' + val)
            this.sNavActiveName = val;
        }
    },
    computed:{
        bShowFooter(){
            return this.sNavActiveName == 'project' || this.sNavActiveName == 'wallet';
        }
    },
    methods:{
        fNavClick(item){
            this.sNavActiveName = item.name;
        }
    }
}
</script>
<style lang="sass" scoped>
    .footer{
        width:100%;
        height:100%;
        text-align: center;
        color:#5D656B;
        background-color:#f9f9f9;
        font-size:24px;
        a:link,a:visited,a:hover,a:active{color:#929292}
        a{
            display:inline-block;
            width:44%;
            text-decoration:none;
            cursor:pointer;
            padding-top:16px;
            padding-bottom:16px;
        }
        a.active{
            color:#ff8200;
            .icon-home{
                background-image:url('./images/home-active@2x.png');
            }
            .icon-finance{
                background-image:url('./images/finance-active@2x.png');
            }
            .icon-me{
                background-image:url('./images/me-active.png');
            }
        }
        p{transform:scale(0.9)}
        i{
            font-size:28px;
        }
        .dot{width:11px;height:11px;margin-left:-8px;margin-top:1px}
        .count{background-color:#f43531;color:#fff;font-size:14px;line-height:(18/14);border-radius:9px;padding:0px 4px;position:absolute;margin-left:-8px;
            font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;
        }
        .icon-home{
            background-image:url('./images/home@2x.png');height:43px;width:43px;
            &.active{background-image:url('./images/home-active@2x.png');}
        }
        .icon-finance{
            background-image:url('./images/finance@2x.png');height:43px;width:43px;
            &.active{background-image:url('./images/finance-active@2x.png')}
        }
        .icon-me{
            background-image:url('./images/me@2x.png');height:43px;width:43px;
            &.active{background-image:url('./images/me-active.png')}
        }
    }
</style>