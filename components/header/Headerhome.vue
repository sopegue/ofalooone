<template>
  <div class="header-home relative w-full" :style="setheight(610)">
    <div class="absolute bgtr h-full w-full z-0"></div>
    <div
      class="z-10 relative"
      :class="{ 'px-8': size > 640, 'px-2': size <= 640 }"
    >
      <div
        v-show="!minsearch || size >= 404"
        class="flex z-20 align-center justify-between pt-5"
      >
        <div class="z-20 relative w-fit flex align-center space-x-5">
          <burgerhome v-show="size <= 830" :color="'fs'"></burgerhome
          ><home
            :color="'#fff'"
            :textcolor="'#fff'"
            :scale="10"
            :textscale="50"
          ></home>
        </div>
        <rightheader class="z-20 w-fit"></rightheader>
      </div>
      <div
        v-show="minsearch && size < 404"
        class="z-20 flex align-center space-x-2 pt-6"
      >
        <button
          class="button is-lights rounded-full h-fit w-fit p-1"
          @click="hideminsearch"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <searchbar></searchbar>
      </div>
      <searchadvanced v-show="size >= 404"></searchadvanced>
    </div>
  </div>
</template>

<script>
import Rightheader from './Rightheader.vue'
import Searchadvanced from './Searchadvanced.vue'
import Home from '~/components/logo/Home.vue'
import Burgerhome from '~/components/burger/Burgerhome.vue'
import Searchbar from '~/components/search/Searchbar'
export default {
  components: { Home, Rightheader, Burgerhome, Searchadvanced, Searchbar },
  computed: {
    size() {
      return this.$store.state.size
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    setheight(val) {
      if (this.size >= 404) return 'height: ' + val + 'px'
      return 'height: ' + 96 + 'px'
    },
    hideminsearch() {
      this.$store.commit('set_MinSearch', false)
    },
  },
}
</script>
<style scoped>
.header-home {
  background-image: url('https://ofaloo.herokuapp.com/images/9.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.bgtr {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
