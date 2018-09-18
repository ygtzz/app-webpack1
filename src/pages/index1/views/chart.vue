<template>
    <div class="chart stage">
        <h2>chart</h2>
        <div class="chart-warp">
            <canvas id="chart-line" width="750" height="600"></canvas>
        </div>
    </div>
</template>
<style lang="sass" scoped>
  .chart-wrap{width:100%}
</style>
<script>
import Vue from 'vue'

export default {
    name:'v-chart',
    created() {
        
    },
    mounted(){
        this.fInitChart();
    },
    data() {
      return {
        
      }
    },
    watch:{
        
    },
    computed:{
       data(){
           return {

           }
       }
    },
    methods:{
        fInitChart(){
            var data = {
                labels : ["二月","三月","四月","五月","六月","七月",'八月'],
                datasets : [
                    {
                        name : 'A产品',
                        fillColor : "rgba(220,220,220,0.5)",
                        color : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointBorderColor : "#fff",
                        data : [65,59,90,-81,56,55,40,20,13,20,11,60,65,59,90,81,56,55,40,20,11,20,10,60,11,60,65]
                    }
                ]
            }
            var line = new JChart.Line(data,{
                id : 'chart-line',
                height : 600,
                width : 672,
                datasetGesture : true,
                smooth:false
            });
            line.draw();
        }
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>