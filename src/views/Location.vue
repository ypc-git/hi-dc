<template>
  <div class="location-page">
    <header class="header">
      <h1>{{title}}</h1>
      <i @click="back" class="cubeic-back"></i>
    </header>
    <div class="wrapper">
      <LocationLsit />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
        return {
            title:"收货地址"
        }
    },
    props: {

    },
    components: {
      LocationLsit
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.location-page
    width: 100%
    height: 100%
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
</style>
