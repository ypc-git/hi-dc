<template>  
    <div class="header">
        <h1>{{title}}</h1>
        <i @click="back" class="cubeic-back"></i>
    </div>
</template>

<script type="text/ecmascript-6">
import router from "@/router.js"
export default {
  name:"backHeader",
  props: {
    title:{
        type:String
    }
  },
  methods: { 
    back(){
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
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
