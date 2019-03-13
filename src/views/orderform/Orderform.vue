<template>
  <div class="order-form">
        <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <h1>This is an eeee </h1>
      </div>
    </div>
    <Tab :labelDefault="orderform"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
export default {
  data() {
    return {
      orderform:"orderform"
    }
  },
  components: {
    Tab
  },
}
</script>
<style lang="stylus">
.order-form
  height -webkit-calc(100% - 50px)
  height -moz-calc(100% - 50px)
  height calc(100% - 50px)
</style>

