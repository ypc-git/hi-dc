<template>
    <div class="EditLocation-page">
      <header class="header">
        <h1>{{title}}</h1>
        <i @click="back" class="cubeic-back"></i>
      </header>
      <form>
        <div class="input-group">
          <label>姓名</label>
          <input />
        </div>
        <div class="input-group">
          <label>电话</label>
          <input />
        </div>
      </form>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        title:"编辑收货地址",
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.EditLocation-page
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
</style>
