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
            <button @click="gotos('image')">
              <svg
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                  :stroke="!onimage ? '#2d3748' : '#fff'"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              :class="{
                noclick: !hasvideo,
                click: hasvideo,
              }"
              @click="gotos('video')"
            >
              <svg
                class="w-7 h-7"
                :class="{
                  'logo-color': onimage,
                  'text-white': !onimage,
                }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="wmin-900 m-0-auto h-x620 pt-8 px-30">
        <div v-show="onimage" class="bg-e6e6e6 h-full w-full relative">
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

        <div v-if="false">
          <div
            class="flex align-center space-x-8 w-fit mx-auto border rounded px-5 py-2"
          >
            <p
              v-if="links.fb !== null && links.fb !== undefined"
              class="clickable"
              :class="{ noclick: links.fb === null || links.fb === undefined }"
              @click="
                {
                  curvid = 'fb'
                }
              "
            >
              <img src="/social/fb.png" alt="" class="h-8 w-8" />
            </p>
            <p
              v-if="links.yt !== null && links.yt !== undefined"
              class="clickable"
              :class="{ noclick: links.yt === null || links.yt === undefined }"
              @click="
                {
                  curvid = 'yt'
                }
              "
            >
              <img src="/social/yt.png" alt="" class="h-8 w-8" />
            </p>
            <p
              v-if="links.tiktok && links.tiktok !== undefined"
              class="clickable"
              :class="{
                noclick: links.tiktok === null || links.tiktok === undefined,
              }"
              @click="
                {
                  curvid = 'tiktok'
                }
              "
            >
              <img src="/social/tiktok.png" alt="" class="h-8 w-8" />
            </p>
            <p
              v-if="links.insta !== null && links.insta !== undefined"
              class="clickable"
              :class="{
                noclick: links.insta === null || links.insta === undefined,
              }"
              @click="
                {
                  curvid = 'insta'
                }
              "
            >
              <img src="/social/insta.png" alt="" class="h-8 w-8" />
            </p>
          </div>
          <div
            v-show="curvid === 'tiktok'"
            class="color-white sm:px-10 px-5 pt-5"
          >
            <svg
              class="w-6 h-6 min-h-6 min-w-6 color-white h-centers mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="text-white"
              >Si la video Tik Tok ne fonctionne pas convenablement, essayez de
              désactiver votre bloqueur de publicité(AdBlock) puis
              réessayer.</span
            >
          </div>
          <div
            class="pt-10"
            :class="{
              ' w-fit mx-auto':
                curvid === 'yt' || curvid === 'tiktok' || curvid === 'insta',
            }"
          >
            <div class="flex flex-col items-center">
              <fb
                v-show="
                  links.fb !== null && links.fb !== undefined && curvid === 'fb'
                "
                :link="links.fb"
              ></fb>
            </div>
            <yt
              v-show="
                links.yt !== null && links.yt !== undefined && curvid === 'yt'
              "
              :link="links.yt"
            ></yt>
            <tiktok
              v-show="
                links.tiktok &&
                links.tiktok !== undefined &&
                curvid === 'tiktok'
              "
              :link="links.tiktok"
            ></tiktok>
            <insta
              v-show="
                links.insta !== null &&
                links.insta !== undefined &&
                curvid === 'insta'
              "
              :link="links.insta"
            ></insta>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Smstype from '../dropdown/Smstype.vue'
import Fb from '~/components/social/Fb.vue'
import Yt from '~/components/social/Yt.vue'
import Tiktok from '~/components/social/Tiktok.vue'
import Insta from '~/components/social/Insta.vue'
import Slider from '~/components/slider/Slider.vue'
export default {
  components: { Slider, Fb, Yt, Tiktok, Insta },
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
