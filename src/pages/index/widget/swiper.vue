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
        this.fInitPages();        
        this.pageCount = this.$children.length;
    },
    data(){
        return {
            pageCount:1,
            swipeW:window.innerWidth
        }
    },
    computed:{
        
    },
    watch:{
        
    },
    methods:{
        fInitPages(){
            const self = this;
            this.$children.forEach((item,index) => {
                item.style.webkitTransform = 'translate3d(' + index * self.swipeW + 'px,0,0)';
            });
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
                //e.stopPropagation();
                self.offsetX = e.touches[0].pageX - self.startX;
                //alert(self.offsetX)
                for(var i=self.idx-1;i<self.idx+2;i++){
                    if(self.pages[i]){
                        //self.pages[i].style.transition = 'transform 0 ease-out';
                        self.pages[i].style.webkitTransition = '-webkit-transform 0 ease-out';                                                                        
                    }
                }
                for(var i=self.idx-1;i<self.idx+2;i++){
                    if(self.pages[i]){
                        //self.pages[i].style.transform = 'translate3d('+ ((i-self.idx)*self.swipeW + self.offsetX) +'px,0,0)';
                        self.pages[i].style.webkitTransform = 'translate3d('+ ((i-self.idx)*self.swipeW + self.offsetX) +'px,0,0)';                        
                    }
                }
            });
            el.addEventListener('touchend',function(e){
                e.preventDefault();
                //e.stopPropagation();            
                var boundary = self.swipeW/6,
                    endTime = +new Date();
                //slow swipe,more than 300ms
                if(endTime - self.startTime > 300){
                    if(self.offsetX >= boundary){
                        self.fGoIndex(-1)
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
            });
        },
    },
    components:{

    }
}
</script>
