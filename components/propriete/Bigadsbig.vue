<template>
  <div class="bg-e6e6e6 h-full w-full relative">
    <slidermin
      class="h-402max"
      :index="index"
      :adslength="ads.length"
      @gowhere="goexact"
      @goindex="goindex"
    >
      <figure
        class="image clickable h-full w-full relative"
        @mouseleave="
          {
            hovered1 = false
          }
        "
        @click="show_quick"
        @mouseover="
          {
            hovered1 = true
          }
        "
      >
        <button
          class="absolute bottom-0 right-0 mb-2 mr-2 z-10"
          title="Aller à la vidéo"
        >
          <svg
            class="w-7 h-7 text-white"
            fill="#00000041"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg>
          <!-- <svg
            class="w-7 h-7 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg> -->
        </button>
        <div
          v-show="hovered1"
          class="absolute appearZ z-0 top-0 left-0 w-full h-full bg-black-trer"
        ></div>
        <a
          v-for="(img, i) in ads"
          :key="i"
          class="h-full hiddenmox w-full"
          :class="{
            slide: index === i + 1,
          }"
          ><img class="h-full w-full" :src="img" alt="Placeholder image"
        /></a></figure
    ></slidermin>
  </div>
</template>

<script>
import Slidermin from '../slider/Slidermin.vue'
export default {
  components: { Slidermin },
  props: {
    ads: {
      type: Array,
      default: () => [],
    },
    indexer: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      hasimage: true,
      left: false,
      index: 1,
      hovered1: false,
    }
  },
  computed: {
    imaging() {
      return this.hasimage === true
    },
    myindex() {
      return this.indexer
    },
  },
  watch: {
    myindex(nv, ov) {
      if (nv !== this.index) {
        this.index = nv
      }
    },
  },
  methods: {
    goexact(where) {
      this.hasimage = false
      if (where === 'left') {
        this.left = true
        if (this.index <= 1) {
          this.index = this.ads.length
        } else this.index = this.index - 1
      } else if (where === 'right') {
        this.left = false
        if (this.index >= this.ads.length) {
          this.index = 1
        } else this.index = this.index + 1
      }
      this.hasimage = true
      this.$emit('indexed', this.index)
    },
    show_quick() {
      this.$emit('show_quicks', this.index)
    },
    goindex(value) {
      this.hasimage = false
      this.index = value
      this.hasimage = true
      this.$emit('indexed', this.index)
    },
  },
}
</script>

<style scoped>
.slide {
  display: block !important;
  animation: 0.7s appearZ;
}
</style>
