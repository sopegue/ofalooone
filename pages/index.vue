<template>
  <div class="relative">
    <div v-if="signing" class="z-50">
      <loginmodal></loginmodal>
    </div>
    <div v-if="delmod" class="z-50">
      <delmodal></delmodal>
    </div>
    <div
      v-if="deleting"
      class="fixed z-10000 top-0 bottom-0 right-0 left-0 bg-black-tr"
    >
      <span
        class="size-20 font-semibold text-white block h-fit w-fit vertical-center m-0-auto"
        >Compte en cours de suppression...</span
      >
    </div>
    <div v-show="loading"></div>
    <div v-show="!loading" id="ofaloo" class="m-0-auto max-w-x1366 relative">
      <headerhome v-if="curoute === '/' && size >= 404"></headerhome>
      <headers
        v-if="curoute !== '/' || size < 404"
        class="sticky top-0 z-20"
      ></headers>
      <!-- <div class="fixed w-fit top-0 right-0 mt-18.7 appearxhz z-20">
        <span
          class="block text-c bg-red-500 py-3 px-10 text-white font-semibold size-12"
          >Oops désolé, il y a eu une erreur!</span
        >
      </div> -->
      <home v-if="curoute === '/'"></home>
      <nuxt-child
        v-else
        :class="{ 'px-10': size > 640, 'px-4': size <= 640 }"
      />
      <button
        v-show="scrollpos > 728"
        class="button w-fit h-fit sticky appearyh bottom-19 right-5 pos-right absolute z-16 bg-white rounded shadow no-outlines border-gray-400 gotop self-end"
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
      <div class="clear-both"></div>
      <footers></footers>
    </div>
    <popup></popup>
  </div>
</template>

<script>
import Footers from '~/components/footer/Footers.vue'
import Popup from '~/components/agreement/Popup.vue'
import Loginmodal from '~/components/modal/Loginmodal.vue'
import Headerhome from '~/components/header/Headerhome.vue'
import Headers from '~/components/header/Headers.vue'
import Home from '~/components/Homepage.vue'
import Delmodal from '~/components/modal/Delmodal.vue'
export default {
  components: {
    Footers,
    Headers,
    Headerhome,
    Home,
    Loginmodal,
    Popup,
    Delmodal,
  },
  data() {
    return {
      scroll: false,
      scrollpos: 0,
      opacity: -1,
      width: 9999,
      stillscrolling: false,
      previous: '/',
      has_previous: false,
    }
  },
  computed: {
    url() {
      return this.$store.state.url
    },
    title() {
      return this.$store.state.title
    },
    delmod() {
      return this.$store.state.delmod === true
    },
    description() {
      return this.description
    },
    image() {
      return this.$store.state.image
    },

    isScrolled() {
      return this.$store.state.scrollpos === true
    },
    curoute() {
      return this.$route.path
    },
    woprevious() {
      return this.$store.state.from
    },
    previously() {
      return this.has_previous === true
    },
    loading() {
      return this.$store.state.domloading === true
    },
    size() {
      return this.$store.state.size
    },
    deleting() {
      return this.$store.state.accountdeleting === true
    },
    ip() {
      return this.$store.state.ip
    },
    signing() {
      return this.$store.state.quicksign === true
    },
  },
  watch: {
    curoute(nv, ov) {
      this.scrolltop()
      if (nv !== '/') {
        sessionStorage.removeItem('filter_home')
        sessionStorage.removeItem('activesearch')
      }
      if (!nv.includes('/recherche')) {
        sessionStorage.removeItem('search')
        sessionStorage.removeItem('txt')
        sessionStorage.removeItem('sort')
      }
    },
  },
  beforeMount() {
    window.addEventListener('DOMContentLoaded', this.domload, false)
    if (!localStorage.cookies) localStorage.setItem('cookies', 'approving')
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
    this.checkIP()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  async mounted() {
    if (document.readyState !== 'loading') {
      this.domload()
    } else {
      window.addEventListener('DOMContentLoaded', this.domload, false)
    }
    this.large()
    this.handleScroll()
    this.scrolltop()
    if (!this.curoute.includes('/recherche')) {
      sessionStorage.removeItem('search')
      sessionStorage.removeItem('txt')
      sessionStorage.removeItem('sort')
    }
    if (this.curoute !== '/') {
      sessionStorage.removeItem('filter_home')
      sessionStorage.removeItem('activesearch')
    }
    if (!this.curoute.includes('/confirmation-success')) {
      localStorage.removeItem('success')
    }
    if (!this.curoute.includes('/expirated-link')) {
      localStorage.removeItem('invalid')
    }
    if (!this.curoute.includes('/confirmation')) {
      localStorage.removeItem('conf')
    }
    if (!this.$auth.loggedIn) {
      if (localStorage.hdzd) {
        const data = await JSON.parse(localStorage.getItem('hdzd'))
        this.logoutImmediatly(data)
      }
    }
    this.checkSearch()
    this.redir()
  },
  methods: {
    checkIP() {
      this.getIP().then(() => {
        if (this.ip !== null) {
          if (sessionStorage.ip) sessionStorage.removeItem('ip')
          sessionStorage.setItem('ip', JSON.stringify(this.ip))
        } else {
          if (sessionStorage.ip) {
            const ip = JSON.parse(sessionStorage.getItem('ip'))
            this.$store.commit('set_ip', ip)
          } else {
            sessionStorage.setItem('ip', JSON.stringify({}))
          }
          console.log('perm denied for ip access')
        }
      })
    },
    async getIP() {
      try {
        const result = await fetch(
          'https://ipinfo.io/?token=c2507a294b3386'
        ).then((res) => res.json())
        this.$store.commit('set_ip', result)
      } catch (error) {
        this.$store.commit('set_ip', null)
        console.log("Can't read ipadresse")
      }
    },
    redir() {
      if (
        this.$route.query.q !== undefined &&
        this.$route.query.q !== 'super-agent'
      )
        return location.assign('/recherche')
      if (
        this.$route.query.q !== null &&
        this.$route.query.q !== undefined &&
        this.$route.query.ofloowa !== null &&
        this.$route.query.ofloowa !== undefined
      )
        return location.assign('/recherche')
      if (
        this.$route.query.ofloowa !== null &&
        this.$route.query.ofloowa !== undefined
      ) {
        if (!this.$route.query.ofloowa.includes(' ')) {
          if (
            !isNaN(this.$route.query.ofloowa) &&
            !this.$route.query.ofloowa.includes('.')
          ) {
            if (this.$route.query.ofloowa === '') {
              return location.assign('/recherche')
            }
          } else return location.assign('/recherche')
        } else return location.assign('/recherche')
      }
    },
    checkSearch() {
      if (!localStorage.history) {
        localStorage.setItem(
          'history',
          JSON.stringify({
            searches: [],
          })
        )
      }
    },
    async logoutImmediatly(data) {
      await this.$axios
        .$get('client/logout/notoken/' + data.odzd + '/' + data.scds)
        .then((res) => {
          // console.log(res.json())
          localStorage.removeItem('hdzd')
        })
    },
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
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
