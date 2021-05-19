<template>
  <div class="modal ml0 is-active" :class="{ 'min-w-70': size <= 768 }">
    <div class="modal-background w-full h-full bg-foot"></div>
    <div class="absolute top-0 left-0 ml-12 mt-2 z-10">
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
    <div
      class="modal-content w-full h-full"
      :class="{ 'pt-12 min-w-70': size <= 768 }"
    >
      <div
        class="m-0-auto md:px-30 lg:w-2/3 md:w-full sm:max-w-360"
        :class="{ h416: size > 500, 'h-76': size <= 500 }"
      >
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
        <span
          :class="{
            visibles: desc[index - 1] !== null,
            invisibles: desc[index - 1] === null,
          }"
          class="py-2 block text-white text-center"
          >Description: {{ desc[index - 1] }}</span
        >
        <div class="flex justify-center w-auto pt-1">
          <div class="flex space-x-5 pt-3.5 pb-2 px-1.5 overflow-x-auto">
            <a
              v-for="(i, j) in ads"
              :key="j"
              class="clickable w-fit h-fit rounded border border-transparent"
              :class="{ shadow: now === j, 'hover:border-white': now !== j }"
              @click="
                {
                  index = j + 1
                }
              "
            >
              <figure
                class="image is-96x96 rounded"
                :class="{ 'border-2': now === j }"
              >
                <img class="rounded w-full" :src="i" alt="Image" />
              </figure>
            </a>
          </div>
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
    desc: {
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
    now() {
      return this.index - 1
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
    this.active = this.index
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
    console.log(this.desc)
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
