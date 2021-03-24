<template>
  <div class="relative slider flex justify-between h-full w-full">
    <div class="bg-e6e6e6 h-full w-full absolute"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 1,
    },
    adslength: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
  methods: {
    go(value) {
      this.$emit('gowhere', value)
      document.body.style = 'overflow: hidden !important;'
    },
    goindex(i) {
      this.$emit('goindex', i)
    },
  },
}
</script>

<style scoped>
/* .hvme {
  background-color: #008489;
  animation: 0.2s appearZ;
} */
.ads-dot {
  width: 8px !important;
  height: 8px !important;
}
.eded:hover {
  animation: 0.5s appearZ;
  background-color: rgba(0, 0, 0, 0.295);
}
</style>
