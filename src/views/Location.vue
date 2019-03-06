<template>
  <div class="location-page">
    <header class="header">
      <h1>{{title}}</h1>
      <i @click="back" class="cubeic-back"></i>
    </header>
    <div class="wrapper">
      <div class="add-location" @click="toAdd">
        <span class="icon iconfont icon-icon-xinzeng"></span>
        添加新地址
      </div>
      <LocationLsit :locationData="locationData"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LocationLsit from "@/components/location/LocationList.vue"
import locationData from '@/datas/data-locations.json'
import router from "@/router.js"
  export default {
    data(){
        return {
            title:"收货地址",
            locationData:locationData.locations
        }
    },
    props: {

    },
    components: {
      LocationLsit
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
    width: 100%
    height: 100%
    background-color #f1f4f5
    .header
      position: relative
      height: 44px
      line-height: 44px
      text-align: center
      background-color: #edf0f4
      -webkit-backface-visibility: hidden
      backface-visibility: hidden
      z-index: 5
      h1
        font-size: 16px
        font-weight: 700
      .cubeic-back
        position: absolute
        top: 0
        left: 0
        padding: 0 15px
    >.wrapper
      height: calc(100% - 44px)
      overflow-x: hidden
      overflow-y: auto
      .add-location
          height 45px
          line-height 45px
          color red
          margin-bottom 5px
          background-color #fff
</style>
