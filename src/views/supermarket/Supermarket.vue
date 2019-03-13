<template>
  <div class="supermarket">
        <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <h1>This is an ssss </h1>
      </div>
    </div>
    <Tab :labelDefault="supermarket"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
export default {
  data() {
    return {
      supermarket:"supermarket"
    }
  },
  components: {
    Tab
  },
}
</script>
<style lang="stylus">
.supermarket
  height -webkit-calc(100% - 50px)
  height -moz-calc(100% - 50px)
  height calc(100% - 50px)
</style>
