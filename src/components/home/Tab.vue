<template>
  <cube-tab-bar
    v-model="newLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>
</template>
<script type="text/ecmascript-6">
import router from "@/router.js"
export default {
    data () {
        return {
          newLabelDefault:"",
          tabs: [{
                  label: '外卖',
                  icon: 'icon iconfont icon-waimai1',
                  value:'home'
              }, {
                  label: '超市',
                  icon: 'icon iconfont icon-chaoshi1',
                  value:'supermarket'
              }, {
                  label: '订单',
                  icon: 'icon iconfont icon-dingdan1',
                  value:'orderform'
              }, {
                  label: '我的',
                  icon: 'icon iconfont icon-wode4',
                  value:'my'
              }],
        }
    },
    props: {
      labelDefault:{
        type:String,
        default:""
      }
    },
    mounted: function(){
        this.newLabelDefault = this.labelDefault
    },
    methods: {
        clickHandler (value) {
        // if you clicked home tab, then print 'Home'
        console.log(value)
        router.push({ path: value })
        },
        changeHandler (icon) {
        // if you clicked different tab, this methods can be emitted
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-tab
    .icon
      font-size 22px
    div
      font-size 12px
</style>