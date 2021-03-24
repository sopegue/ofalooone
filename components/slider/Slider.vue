<template>
  <div class="relative slider flex justify-between h-full w-full">
    <div class="eded h-fit vertical-center leftag z-10 relative left-0 px-3">
      <button
        class="-ml-3 rounded-full no-outlines outline-none z-10 border-2 border-transparent"
        @click="go('left')"
      >
        <svg
          class="transform rotate-90 color-white me-white"
          :class="{
            'w-20 h-20': size >= 460,
            'w-12 h-12': size < 460,
          }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-width="1"
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-show="size >= 460"
      class="d-dot block h-fit z-10 self-end mb-2 flex align-center space-x-3"
    >
      <span
        v-for="i in adslength"
        :key="i"
        class="ads-dot clickable block rounded-full bg-dot border-none"
        :class="{
          'bg-white': i === index,
          ' bg-dot border-none': i !== index,
        }"
        @click="goindex(i)"
      ></span>
    </div>
    <div class="bg-e6e6e6 h-full w-full absolute"><slot></slot></div>
    <div class="eded h-fit vertical-center relative rightag z-10 right-0">
      <button
        class="rounded-full no-outlines outline-none z-10 border-2 border-transparent"
        @click="go('right')"
      >
        <svg
          class="transform -rotate-90 color-white relative me-white"
          :class="{
            'w-20 h-20': size >= 460,
            'w-12 h-12': size < 460,
          }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-width="1"
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
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
