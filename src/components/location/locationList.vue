<template>
    <div class="location-lsit">
        <div class="location-p">
            <h1>{{locationText}}</h1>
            <p><span>公司</span>{{tel}}{{name}}</p>
        </div>
        <span class="icon iconfont icon-bianji"></span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            location:{
                locationText:"安科大厦北信源8楼（广聚路35号）",
                tel:"18256013225",
                name:"尤鹏程"
            }
        }
    }
}
</script>
<style lang="stylus">

</style>

