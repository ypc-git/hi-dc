<template>
    <div :class="{head: isActive}" @click="toLocation()">
        <div class="head-left">
            <span class="icon iconfont icon-dingwei2"></span>
            {{location.locationText}}
            <span class="icon iconfont icon-paixujiantouxia"></span>
        </div>
        <div class="head-right">
           <span class="icon iconfont icon-saoyisao1"></span>
           <span class="icon iconfont icon-tianqi-"></span>
        </div>
    </div>
</template>
<script>
import router from "@/router.js"
export default {
    data() {
        return {
            location:{
                position:[123.12,12.00],
                locationText:"新城科技园"
            },
            isActive:true
        }
    },
    methods: {
        toLocation(){
           router.push({ path: 'location', query: { plan: 'location' }})
        }
    }
}
</script>

<style lang="stylus" scoped>
.head
  height 2rem
  margin 10px 20px
  display flex
  align-items center
  justify-content space-between
.head-right
  span
    padding-left 1rem
</style>

