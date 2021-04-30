<template>
  <div class="bg-e6e6e6 h-full w-full relative">
    <slider
      :index="index"
      :adslength="ads.length"
      @gowhere="goexact"
      @goindex="goindex"
    >
      <figure class="image h-full relative w-full">
        <a
          v-for="(img, i) in ads"
          :key="i"
          class="h-full relative hiddenmox w-full"
          :class="{
            slide: index === i + 1,
          }"
          ><img class="h-full w-full" :src="img" alt="Image" />
          <a
            v-if="link"
            class="absolute bottom-0 right-0 mb-2 mr-2 z-10"
            title="Contient un ou plusieurs lien(s) vidéo(s)"
            :href="'/propriete?wyzes=' + ids + '#social'"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="#00000041"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="#00000041"
              />
            </svg> </a
        ></a></figure
    ></slider>
  </div>
</template>

<script>
import Slider from '~/components/slider/Slider.vue'
export default {
  components: { Slider },
  props: {
    ads: {
      type: Array,
      default: () => [],
    },
    link: {
      type: Boolean,
      default: false,
    },
    indexer: {
      type: Number,
      default: 1,
    },
    ids: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      hasimage: true,
      left: false,
      index: 1,
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
