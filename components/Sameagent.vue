<template>
  <div>
    <div class="py-1">
      <h4 class="logo-color size-16 font-semibold">
        {{ title }}
      </h4>
    </div>
    <div class="py-1.5">
      <imgs></imgs>
    </div>
  </div>
</template>

<script>
import Imgs from './Imgs.vue'
export default {
  components: { Imgs },
  props: {
    title: {
      type: String,
      default: " D'autres propriétés du même agent",
    },
  },
}
</script>

<style scoped></style>
