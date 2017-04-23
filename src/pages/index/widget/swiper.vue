<template>
    <div class="swiper">
        <div ref="slideWrapper" class="slide-wrap">
            <slot></slot>
        </div>
        <div class="pager-wrap">
            <ul class="pagerList">
                <li v-for="n in pageCount" class="pagerItem">
                    <span class="icon icon-dot" :class="{'active':n==idx+1}"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .swiper{position:relative;width:100%;min-height:6.4rem;}
    .slide-wrap{position:relative;width:100%;}
    .pager-wrap{position:absolute;bottom:10px;right:20px;}
    .pagerItem{display:inline-block;margin-right:5px;}
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
            this.width = this.$el.getBoundingClientRect().width;
            this.amount = this.$children.length;
            this.fInitPages();
            this.fBindEvent();
        });
    },
    props:{
        speed:{
            type:Number,
            default:300
        },
        loop:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            pageCount:1,
            width:0,
            amount:0,
            startX:0,
            startTime:0,
            offsetX:0,
            idx:0,
            direction:'horizontal'//vertical
        }
    },
    computed:{
        towards(){
            //up,down,left,right
            return this.offsetX < 0 ? 'left' : 'right';
        }
    },
    methods:{
        fInitPages(){
            const self = this;
            this.pageCount = this.$children.length;
            this.$children.forEach((item,index) => {
                item.style.webkitTransform = 'translate3d(' + index * 100 + '%,0,0)';
            });
            this.$children[this.pageCount-1].style.webkitTransform = 'translate3d(' + -100 + '%,0,0)';
        },
        fBindEvent:function(){
            const self = this,el = self.$el;
            //wrap add event,not child
            el.addEventListener('touchstart',function(e){
                self.startX = e.touches[0].pageX;
                self.startTime = +new Date();
                //clear offsetX
                self.offsetX = 0;
            });
            el.addEventListener('touchmove',function(e){
                e.preventDefault();
                self.offsetX = e.touches[0].pageX - self.startX;
                self.fSwipePage();
            });
            el.addEventListener('touchend',function(e){   
                self.fGoPage();
            });
        },
        fSwipePage(){
            const self = this;
            const aPageIndex = self.fGetPageIndex(self.idx);
            aPageIndex.forEach(item => {
                if(self.$children[item]){
                    self.$children[item].style.webkitTransition = '';
                }
            });
            aPageIndex.forEach((item,i) => {
                if(self.$children[item]){
                    self.$children[item].style.webkitTransform = 'translate3d('+ ((i-1)*100 + (self.offsetX/self.width)*100) +'%,0,0)';
                }
            });
        },
        fGoPage(){
            const self = this;
            const boundary = self.width/4,
                  endTime = +new Date();
            //slow swipe,more than 300ms
            if(endTime - self.startTime > 300){
                if(self.offsetX >= boundary){
                    self.fGoIndex(-1);
                }
                else if(self.offsetX <= -boundary){
                    self.fGoIndex(1);
                }
                else{
                    self.fGoIndex(0);
                }
            }
            //quick swipe
            else{
                if(self.offsetX > 50){
                    self.fGoIndex(-1);
                }
                else if(self.offsetX < -50){
                    self.fGoIndex(1);
                }
                else{
                    self.fGoIndex(0);
                }
            }
        },  
        fGoIndex:function(n){
            const self = this, 
            cIdx = self.idx + n;
            let aPageIndex = self.fGetPageIndex(cIdx);
            self.idx = aPageIndex[1];
            let aPageTrans = aPageIndex;
            if(self.towards == 'left' && n != 0){
                aPageTrans = aPageIndex.slice(0,-1);
            }
            else if(self.towards == 'right' && n != 0){
                aPageTrans = aPageIndex.slice(1);
            }
            aPageTrans.forEach(item => {
                if(self.$children[item]){
                    self.$children[item].style.webkitTransition = '-webkit-transform ' + self.speed + 'ms ease-out';
                }
            });
            aPageIndex.forEach((item,index) => {
                if(self.$children[item]){
                    self.$children[item].style.webkitTransform = 'translate3d(' + (index-1)*100 + '%,0,0)';
                }
            });
        },
        fGetPageIndex(cIdx){
            const self = this;
            const len = self.$children.length;
            if(self.loop){
                if(cIdx > len -1){
                    cIdx = 0;
                }
                else if(cIdx < 0){
                    cIdx = len - 1;
                }                
            }
            else{
                if(cIdx > len -1){
                    cIdx = len - 1;
                }
                else if(cIdx < 0){
                    cIdx = 0;
                }
            }
            //range check
            let pre = cIdx - 1,
                next = cIdx + 1;
            
            if(self.loop){
                pre = pre < 0 ? len - 1 : pre;
                next = next > len - 1 ? 0 : next;
            }
            else{
                pre = pre < 0 ? -1 : pre;
                next = next > len - 1 ? len : next;
            }
            let aPageIndex = [pre,cIdx,next];
            return aPageIndex;
        }
    },
    components:{

    }
}
</script>
