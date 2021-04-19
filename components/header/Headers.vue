<template>
  <div
    class="bg-white relative w-full"
    :class="{ 'border-b': scrollpos >= 0 }"
    :style="setheight(76)"
  >
    <div class="absolute bgtr h-full w-full z-0"></div>
    <div
      class="z-10 relative"
      :class="{ 'px-8': size > 640, 'px-2': size <= 640 }"
    >
      <div
        v-if="!minsearch || size >= 700"
        class="flex z-20 align-center pt-3"
        :class="{
          'space-x-16': size > 889,
          'space-x-10 justify-between': size <= 889,
        }"
      >
        <div class="z-20 relative w-fit flex align-center space-x-5">
          <burgerhomes v-show="size <= 1100"></burgerhomes
          ><home :color="'#004e66'" :scale="10" :textscale="50"></home>
        </div>
        <searchbar v-if="size >= 700" color="ded" class="w-full"></searchbar>
        <rightheaders class="z-20 w-fit"></rightheaders>
      </div>
      <div
        v-if="minsearch && size < 700"
        class="z-20 flex align-center space-x-2 pt-6"
      >
        <button
          class="button border-none dezz rounded-full h-fit w-fit p-1"
          @click="hideminsearch"
        >
          <svg
            class="w-6 h-6 logo-color"
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
        <searchbar color="ded" class="w-full"></searchbar>
      </div>
    </div>
  </div>
</template>

<script>
import Rightheaders from './Rightheaders.vue'
import Home from '~/components/logo/Home.vue'
import Burgerhomes from '~/components/burger/Burgerhomes.vue'
import Searchbar from '~/components/search/Searchbar'
export default {
  components: { Home, Burgerhomes, Searchbar, Rightheaders },
  computed: {
    size() {
      return this.$store.state.size
    },
    scrollpos() {
      return this.$store.state.scrollpos
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px'
    },
    hideminsearch() {
      this.$store.commit('set_MinSearch', false)
    },
  },
}
</script>
<style scoped></style>
