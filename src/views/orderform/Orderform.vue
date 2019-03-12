<template>
  <div class="Orderform">
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

