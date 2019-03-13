<template>
  <div class="home">
    <Head/>
    <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <cube-scroll ref="scroll">
          <cube-slide :data="items"  class="cubeList"/>
          <div class="titel">
            <h1>{{titel}}</h1>
            <p>{{titel_p}}</p>
          </div>
          <StoreList class="storeList"/>
        </cube-scroll>
      </div>
    </div>
    <Tab :labelDefault="home"/>
  </div>
</template>

<script type="text/ecmascript-6">
import StoreList from "@/components/home/StoreList.vue"
import Head from "@/components/home/Head.vue"
import Tab from "@/components/home/Tab.vue"

export default {
  data() {
    return {
      home:"home",
      items: [
        {
          url: '',
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553048518&di=8c451d4509494c8afe3ef489fe02d497&imgtype=jpg&er=1&src=http%3A%2F%2Fp3.so.qhimgs1.com%2Ft01b10155e101fd7173.jpg'
        },
        {
          url: '',
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552453800706&di=7155268543ce773eb13067631e2b9afd&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F69%2F99%2F66%2Fs_1024_9fce5755f081660431464492a9aeb003.jpg'
        },
        {
          url: '',
          image: 'http://img3.imgtn.bdimg.com/it/u=3149396442,2490075865&fm=26&gp=0.jpg'
        }
      ],
      titel:"今日推荐",
      titel_p:"大家都在点，邀您体验"
    }
  },
   components: {
    StoreList,
    Head,
    Tab
  },
  computed: {
    
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
  height -webkit-calc(100% - 102px)
  height -moz-calc(100% - 102px)
  height calc(100% - 102px)
.cubeList
  height 120px
  margin 10px 15px
  img
    background-color #e3f4fd
    width 100%
.titel
  height 30px
  margin 15px 15px 0 15px
  text-align left 
  line-height 20px
  h1
    font-size 18px
  p 
    color #bbbbbb
    font-size 12px
</style>