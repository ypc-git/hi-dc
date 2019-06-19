<template>
    <div class="skip" @click="toHome">
       跳过<span>{{newCountdown}}</span>
    </div>
</template>
<script>
import router from "@/router.js"
export default {
    name:'skip',
    props: {
        countdown: Number
    },
    data() {
        return {
            newCountdown: this.countdown
        }
    },
    mounted:function(){
       this.countDown();
    },
    methods:{
        countDown(){
            let _this = this;
            let t = setInterval(()=>{
               if(_this.newCountdown>0){
                    _this.newCountdown--
                 }else{
                     window.clearInterval(t);
                    _this.toHome();
                 } 
            } ,1000);
        },
        toHome(){
            router.push({ path: 'home', query: { plan: 'private' }})
        }
    }
}
</script>
<style lang="stylus" scoped>
.skip
   display block
   position absolute
   top 2rem
   right 2rem
   border 1px solid #808080;
   color #808080
   border-radius 2rem
   padding 0.3rem
   font-size 13px
</style>

