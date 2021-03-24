<template>
  <div>
    <div v-show="loading"></div>
    <div v-show="!loading" id="ofaloo" class="m-0-auto max-w-x1366">
      <headerhome v-if="curoute === '/' && size >= 404"></headerhome>
      <headers
        v-if="curoute !== '/' || size < 404"
        class="sticky top-0 z-20"
      ></headers>
      <home v-if="curoute === '/'"></home>
      <nuxt-child
        v-else
        keep-alive
        :keep-alive-props="{ max: 10 }"
        :class="{ 'px-10': size > 640, 'px-4': size <= 640 }"
      />
      <div
        v-show="scrollpos > 728"
        class="sticky h-fits w-full appearyh bottom-0 z-30 pb-16 pt-2 pr-4"
      >
        <button
          class="button bg-white rounded shadow no-outlines border-gray-400 absolute right-0 gotop mr-8 -mt-10"
          @click="scrolltop"
        >
          <svg
            class="w-5 h-5 transform rotate-180 logo-color relative"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import Footers from '~/components/footer/Footers.vue'
import Headerhome from '~/components/header/Headerhome.vue'
import Headers from '~/components/header/Headers.vue'
import Home from '~/components/Homepage.vue'
export default {
  components: { Footers, Headers, Headerhome, Home },
  data() {
    return {
      scroll: false,
      scrollpos: 0,
      opacity: -1,
      width: 9999,
      stillscrolling: false,
    }
  },
  computed: {
    isScrolled() {
      return this.$store.state.scrollpos === true
    },
    curoute() {
      return this.$route.path
    },
    loading() {
      return this.$store.state.domloading === true
    },
    size() {
      return this.$store.state.size
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  mounted() {
    this.large()
    this.handleScroll()
    this.checkDomload()
  },
  methods: {
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    checkDomload() {
      if (document.readyState !== 'loading') {
        this.domload()
      } else {
        window.addEventListener('DOMContentLoaded', this.domload, false)
      }
    },
    large() {
      this.width = window.innerWidth
      this.$store.commit('set_Size', window.innerWidth)
    },
    domload() {
      this.$store.commit('set_Domload', false)
    },
    handleScroll() {
      if (window.scrollY > 0) {
        if (!this.stillscrolling) {
          this.scroll = true
          this.$store.commit('set_HasScrolled', true)
          this.stillscrolling = true
        }
      } else {
        this.scroll = false
        this.$store.commit('set_HasScrolled', false)
        this.stillscrolling = false
      }
      this.scrollpos =
        Math.abs(window.scrollY) ||
        Math.abs(window.scrollTop) ||
        Math.abs(document.getElementsByTagName('html')[0].scrollTop)
      this.$store.commit('set_Scroll', this.scrollpos)
    },
  },
}
</script>
