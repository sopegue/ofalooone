<template>
  <div>
    <div class="pb-1 pt-2.5">
      <h4 class="logo-color size-16 font-semibold">
        {{ title }}
      </h4>
    </div>
    <div class="pb-1.5">
      <imges></imges>
    </div>
  </div>
</template>

<script>
import Imges from './Imges.vue'
export default {
  components: { Imges },
  props: {
    title: {
      type: String,
      default: " D'autres propriétés du même agent",
    },
  },
}
</script>

<style scoped></style>
