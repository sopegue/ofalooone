<template>
  <div class="wmax-x656 plus50px flex align-center relative">
    <client-only>
      <div
        v-if="size >= 640"
        class="absolute is-lights rounded left-0 nexttag z-15 p-1"
        :class="{ hidden: !scrollxl }"
        @click="scrollLeft"
      >
        <button
          class="hover-008489 no-outline mt-1 bg-008489 rounded relative z-15"
        >
          <svg
            :width="size > 767 ? 56 : 48"
            :height="size > 767 ? 56 : 48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </client-only>
    <div
      id="eltoscrol"
      class="flex relative space-x-6 wtag overflow-x-auto scrollnone"
    >
      <homepropsame
        v-for="(index, i) in data"
        :key="i"
        :property="index"
      ></homepropsame>
    </div>

    <client-only>
      <div
        v-if="size >= 640"
        class="absolute is-lights right-0 nexttag z-15 p-1"
        :class="{ hidden: scrollxr }"
        @click="scrollRight"
      >
        <button
          class="hover-008489 no-outline mt-1 bg-008489 rounded relative z-15"
        >
          <svg
            :width="size > 767 ? 56 : 48"
            :height="size > 767 ? 56 : 48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </client-only>
  </div>
</template>
<script>
import Homepropsame from './propriete/Homepropsame.vue'
export default {
  components: { Homepropsame },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    indexer: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: 0,
      tagscrol: false,
      reachtotal: false,
      active: 0,
      totalscroll: 0,
      nbscroll: 0,
      clw: 0,
      scrw: 0,
      hasscroll: false,
      properties: [],
      clr: 1024,
    }
  },
  computed: {
    canscroll() {
      return this.hasscroll === true
    },
    scrolling() {
      return this.scroll
    },
    scrollxl() {
      return this.tagscrol === true
    },
    scrollxr() {
      return this.reachtotal === true
    },
    now() {
      return this.active
    },
    size() {
      return this.$store.state.size
    },
  },
  watch: {
    indexer(nv, ov) {
      this.active = nv
    },
    size(nv, ov) {
      if (nv < 1024) this.clr = 767
      if (nv < 724) this.clr = 256
      if (nv < 460) this.clr = 320
    },
    active(nv, ov) {
      this.$emit('changeactive', nv)
    },
  },
  beforeMount() {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  updated() {
    this.scrollable()
  },
  mounted() {
    this.large()
  },
  methods: {
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    scrollLeft() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scroll - this.clr > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('eltoscrol').scroll({
        top: scroll - this.clr,
        left: scroll - this.clr,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll + this.clr) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
      // this.sleep(this.clr)
    },
    scrollRight() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scroll + this.clr > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('eltoscrol').scroll({
        top: scroll + this.clr,
        left: scroll + this.clr,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll - this.clr) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
    },
    handleScroll() {
      const cl = document.getElementById('eltoscrol').clientWidth
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
    },
    scrollable() {
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (scr > cl) {
        this.hasscroll = true
      } else {
        this.hasscroll = false
      }
    },
    large() {
      const el = document.getElementById('eltoscrol')
      if (el !== null) {
        const scr = el.scrollWidth
        const cl = el.clientWidth
        if (cl >= scr) {
          this.tagscrol = 0
          this.reachtotal = true
        }
        this.clw = cl
        this.scrw = scr
        this.totalscroll = Math.floor((scr - cl) / this.clr) + 1
        if (this.nbscroll - Math.floor(this.clw / this.clr) + 1)
          this.nbscroll = 0
        else this.nbscroll = this.nbscroll - Math.floor(this.clw / this.clr) + 1
        if (!this.reachtotal) this.hasscroll = true
      }
    },
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.plus50px {
  animation: 0.3s appear;
  scrollbar-width: none !important;
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
@keyframes appear {
  0% {
    transform: translateY(-10px);
  }
}
</style>
