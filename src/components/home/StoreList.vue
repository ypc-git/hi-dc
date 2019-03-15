<template>
    <div class="storeList">
      <ul class="stores-wrapper">
        <li v-for="store in items" class="store-item border-1px" :key="store.index" @click="toStore()">
          <div class="icon">
            <img width="57" height="57" :src="store.icon">
          </div>
          <div class="store-content">
            <div class="store-content-right">
              <h2 class="name">{{store.name}}</h2>
              <p class="description">{{store.description}}</p>
              <div class="extra">
                <span class="count">月售{{store.sellCount}}份</span><span>好评{{store.serviceScore}}</span>
              </div>
              <div class="price">
                <span class="now" v-for="offer in store.offers" :key="offer.index">
                  {{offer.totalPrice}}减{{offer.reducePrice}}
                </span>
              </div>
            </div>
            <div class="deliveryTime">
              <p>{{store.deliveryTime}}分钟<span>{{store.distance}}km</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import storesData from '@/datas/data-stores.json'
import router from "@/router.js"
import Vue from 'vue'
let _stores = []
storesData.stores.forEach(item => {
  _stores = _stores.concat(item)
})
export default {
  data() {
    return {
      items: _stores,
    }
  },
  components: {
    
  },
  computed: {

  },
  methods: {
    toStore(){
      router.push({ path: 'store', query: { storeId: 'store' }})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.scroll-wrapper 
   height 100%
  .cube-pulldown-wrapper 
    .before-trigger 
      font-size 30px
      line-height 30px
      align-self flex-end
      span 
        display inline-block
        transition all 0.3s
        color #666
        &.rotate 
          transform: rotate(180deg)
    .after-trigger
      .refresh-text
        color grey
.scroll-list-wrap 
  height 100%
  overflow hidden
.stores-wrapper 
  .store-item 
    display flex
    padding 15px
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    &:last-child 
      border-none()
      margin-bottom 0
    .icon 
      flex 0 0 57px
      margin-right 10px
      img
        background-color #f9e2bb
    .store-content 
      flex 1
      padding-left 10px
      text-align left 
      align-content center
      .store-content-right
        float left
        max-width 170px
        .name 
          font-size 18px
          color rgb(7, 17, 27)
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .description, .extra 
          line-height 12px
          font-size 12px
          color rgb(147, 153, 159)
        .description 
          line-height 12px
          margin-bottom 8px
        .extra 
          .count 
            margin-right 12px
        .price 
          font-weight 700
          line-height 24px
          overflow hidden
          .now 
            margin-right 8px
            font-size 10px
            color rgb(240, 20, 20)
            border 1px solid rgba(240, 20, 20, 0.3)
            border-radius 5px
            padding 0 1px
        .cartcontrol-wrapper 
          position absolute
          right 0
          bottom 12px
      .deliveryTime
        float right
        font-size 12px
        p
          line-height 60px
          overflow hidden
          span 
            padding-left 2px
</style>