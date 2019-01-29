<template>
  <div class="home">
    <div slot="content" class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <cube-scroll ref="scroll" :data="items">
          <cube-slide :data="items"  class="cubeList"/>
          <StoreList class="storeList"/>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import StoreList from "@/components/home/StoreList.vue"
export default {
  data() {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://p0.meituan.net/deal/__19893680__3455268.jpg'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://img3.imgtn.bdimg.com/it/u=3149396442,2490075865&fm=26&gp=0.jpg'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://imgsrc.baidu.com/forum/w=580/sign=9f81b466b63eb13544c7b7b3961fa8cb/bdd0d3355982b2b7cf29a14a3badcbef77099b1b.jpg'
        }
      ]
    }
  },
   components: {
    StoreList
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
  height 160px
</style>