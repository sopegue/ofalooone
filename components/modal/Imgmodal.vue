<template>
  <div class="modal ml0 is-active">
    <div class="modal-background w-full h-full bg-foot"></div>
    <div class="absolute top-0 left-0 ml-12 mt-3 z-10">
      <button class="bg-transparent no-outlines outline-none" @click="close">
        <svg
          class="w-8 h-8 color-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="modal-content w-full h-full" :class="{ 'py-5': size <= 768 }">
      <div class="border-b pb-3">
        <div class="w-fit m-0-auto">
          <div class="flex align-center space-x-3">
            <button class="cursor-default">
              <svg
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                  stroke="#2d3748"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="wmin-900 m-0-auto h-x620 pt-8 px-30">
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
                ><img class="h-full w-full" :src="img" alt="Image"
              /></a>
            </figure>
          </slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Smstype from '../dropdown/Smstype.vue'
import Slider from '~/components/slider/Slider.vue'
export default {
  components: { Slider },
  props: {
    activeindex: {
      type: Number,
      default: 1,
    },
    ads: {
      type: Array,
      default: () => [],
    },
    links: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      inside: false,
      curimage: true,
      hovered1: false,
      hovered2: false,
      hovered3: false,
      zoom: false,
      active: 0,
      index: 1,
      left: false,
      imaging: true,
      curvid: '',
    }
  },
  computed: {
    hasvideo() {
      return this.links !== null && this.links !== undefined
    },
    myindex() {
      return this.indexer
    },
    size() {
      return this.$store.state.size
    },
    curindex() {
      return this.index - 1
    },
    onimage() {
      return this.imaging === true
    },
    yoindex() {
      return this.index
    },
  },
  mounted() {
    this.index = this.activeindex
    if (this.hasvideo) {
      if (this.links.fb !== null && this.links.fb !== undefined)
        this.curvid = 'fb'
      else if (this.links.yt !== null && this.links.yt !== undefined)
        this.curvid = 'yt'
      else if (this.links.tiktok !== null && this.links.tiktok !== undefined)
        this.curvid = 'tiktok'
      else if (this.links.insta !== null && this.links.insta !== undefined)
        this.curvid = 'insta'
    }
  },
  methods: {
    gotos(val) {
      if (val === 'image') {
        this.imaging = true
      } else {
        this.imaging = false
      }
    },
    hidebody() {
      document.body.style = 'overflow: hidden !important;'
    },
    govidimg() {
      if (this.ads[this.index - 1].includes('videos')) this.curimage = false
      else this.curimage = true
    },
    close() {
      this.$emit('close_quick')
    },
    indexed(val) {
      this.index = val
    },
    goexact(where) {
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
      this.govidimg()
    },
    goindex(value) {
      this.index = value
      this.govidimg()
    },
  },
}
</script>
<style scoped>
.slide {
  display: block !important;
  animation: 0.7s appearZ;
}
.zoomimg {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}
.haszoomed {
  transform: scale(2) !important;
  cursor: zoom-out !important;
}
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>
