<template>
  <div class="location-page">
    <BackHead :title="title"/>
    <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <cube-scroll ref="scroll">
          <div class="add-location" @click="toAdd">
            <span class="icon iconfont icon-icon-xinzeng"></span>
            添加新地址
          </div>
          <LocationLsit :locationData="locationData"/>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LocationLsit from "@/components/location/LocationList.vue"
import BackHead from "@/components/common/BackHead.vue"
import locationData from '@/datas/data-locations.json'
import router from "@/router.js"
  export default {
    data(){
        return {
            title:"收货地址",
            locationData:locationData.locations
        }
    },
    components: {
      LocationLsit,
      BackHead
    },
    methods: {        
      toAdd(){
        router.push({ path: 'editLocation', query: { type: "add" }})
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.location-page
    height -webkit-calc(100% - 44px)
    height -moz-calc(100% - 44px)
    height calc(100% - 44px)
    background-color #f1f4f5
    .scroll-wrapper
      height 100%
      .scroll-list-wrap
        height 100%
        .add-location
            height 45px
            line-height 45px
            color red
            margin-bottom 5px
            background-color #fff
</style>
