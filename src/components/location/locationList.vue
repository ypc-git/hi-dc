<template>
    <div>
        <div class="location-lsit" v-for="item in items" :key="item.locationText">
            <div class="location-p">
                <h1>{{item.locationText}}</h1>
                <p><span>公司</span>{{item.tel}}{{item.name}}</p>
            </div>
            <span class="icon iconfont icon-bianji"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props: {
       items:{
           type:Array
       }
    }
}
</script>
<style lang="stylus">

</style>

