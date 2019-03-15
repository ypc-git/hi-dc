<template>
  <div class="orderForm">
    <BackHead :title="title"/>
    <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <cube-scroll ref="scroll">
          <h1>我的订单</h1>
          <OrderformList />
        </cube-scroll>
      </div>
    </div>
    <Tab :labelDefault="orderform"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
import BackHead from "@/components/common/BackHead.vue"
import OrderformList from "@/components/orderform/OrderformList.vue"
export default {
  data() {
    return {
      orderform:"orderform",
      title:"订单"
    }
  },
  components: {
    BackHead,
    Tab,
    OrderformList
  },
}
</script>
<style lang="stylus" scoped>
.orderForm
  height -webkit-calc(100% - 94px)
  height -moz-calc(100% - 94px)
  height calc(100% - 94px)
  .scroll-wrapper 
    height 100%
  .scroll-list-wrap 
    height 100%
    h1
      text-align: left;
      padding:15px 10px;
      font-size 18px
      font-weight 500
      color #333
      border-bottom: 1px solid #e6e6e6;
</style>

