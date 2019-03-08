<template>
    <div :class="{head: isActive}">
        <div class="head-left" @click="toLocation()">
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
  padding 10px 20px
  display flex
  align-items center
  justify-content space-between
  box-shadow:0 2px 5px #b8c6d4;
.head-right
  span
    padding-left 1rem
</style>

