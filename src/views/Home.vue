<template>
  <div class="home">
    <div slot="content" class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <Head/>
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
  </div>
</template>

<script type="text/ecmascript-6">
import StoreList from "@/components/home/StoreList.vue"
import Head from "@/components/home/Head.vue"
export default {
  data() {
    return {
      items: [
        {
          url: '',
          image: 'http://img3.imgtn.bdimg.com/it/u=3149396442,2490075865&fm=26&gp=0.jpg'
        },
        {
          url: '',
          image: 'http://img3.imgtn.bdimg.com/it/u=3149396442,2490075865&fm=26&gp=0.jpg'
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
    Head
  },
  computed: {
    
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
  height 100%
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