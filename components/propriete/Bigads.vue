<template>
  <div class="bg-e6e6e6 h-full w-full relative">
    <slider
      :index="index"
      :adslength="ads.length"
      @gowhere="goexact"
      @goindex="goindex"
    >
      <figure class="image h-full w-full">
        <a
          v-for="(img, i) in ads"
          :key="i"
          class="h-full hiddenmox w-full"
          :class="{
            slide: index === i + 1,
          }"
          ><img
            v-show="img.includes('images')"
            class="h-full w-full"
            :src="img"
            alt="Placeholder image" />
          <p v-show="!img.includes('images')" class="w-full h-full">
            <video
              id="my-video"
              class="w-full h-full"
              controls
              preload="auto"
              data-setup="{}"
            >
              <source :src="img" type="video/mp4" />
            </video></p
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
