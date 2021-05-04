<template>
  <a href="/" class="flex w-fit align-center">
    <logo :color="color" :scale="scaling"></logo>
    <span
      class="font-semibold select-none transform pl-2.5 size-28"
      :class="{
        'col-1f2937': textcolor === '#1f2937',
        'text-white': textcolor === '#fff',
        'col-008489': textcolor === '#008489',
      }"
      >Ofaloo</span
    >
  </a>
</template>
<script>
import Logo from '~/components/logo/Logo.vue'
export default {
  components: { Logo },
  props: {
    scale: {
      type: Number,
      default: 0,
    },
    textscale: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#1f2937',
    },
    textcolor: {
      type: String,
      default: '#1f2937',
    },
  },
  computed: {
    scaling() {
      return this.scale
    },
    textscaling() {
      return this.textscale
    },
  },
}
</script>
<style scoped></style>
