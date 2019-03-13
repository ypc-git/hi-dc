<template>
  <div class="order-form">
    <div class="scroll-wrapper">
      <BackHead :title="title"/>
      <div class="scroll-list-wrap">
        <h1>This is an eeee </h1>
      </div>
    </div>
    <Tab :labelDefault="orderform"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
import BackHead from "@/components/common/BackHead.vue"
export default {
  data() {
    return {
      orderform:"orderform",
      title:"订单"
    }
  },
  components: {
    BackHead,
    Tab
  },
}
</script>
<style lang="stylus" scoped>
.order-form
  height -webkit-calc(100% - 50px)
  height -moz-calc(100% - 50px)
  height calc(100% - 50px)
  .scroll-wrapper
    height: 100%;
</style>

