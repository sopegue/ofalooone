<template>
  <nuxt-link to="/" class="flex w-fit align-center">
    <logo :color="color" :scale="scaling"></logo>
    <span
      class="font-semibold select-none transform pl-5"
      :class="{
        'col-1f2937': textcolor === '#1f2937',
        'text-white': textcolor === '#fff',
        'col-008489': textcolor === '#008489',
        'scale-125': textscaling === 25,
        'scale-150': textscaling === 50,
        'scale-110': textscaling === 10,
      }"
      >Ofaloo</span
    >
  </nuxt-link>
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
