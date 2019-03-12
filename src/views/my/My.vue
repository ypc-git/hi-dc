<template>
  <div class="Orderform">
    <div class="scroll-wrapper">
      <div class="scroll-list-wrap">
        <h1>This is an my </h1>
      </div>
    </div>
    <Tab :labelDefault="my"/>
  </div>
</template>
<script>
import Tab from "@/components/home/Tab.vue"
export default {
  data() {
    return {
      my:"my"
    }
  },
  components: {
    Tab
  },
}
</script>