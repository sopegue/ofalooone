<template>
  <div class="flex align-center space-x-8">
    <div>
      <div v-show="size > 830" class="flex align-center space-x-5 w-fit">
        <div class="flex align-center space-x-5 w-fit">
          <propertydrophome :title="'Acheter'"></propertydrophome>
          <propertydrophome :title="'Louer'"></propertydrophome>
        </div>
        <a
          href="/devenir-agent"
          class="text-white size-13 rounded font-semibold px-4 pb-1.5 button is-lights"
          >Devenir agent</a
        >
      </div>
    </div>
    <div
      class="flex align-center"
      :class="{
        'space-x-8': size > 404,
      }"
    >
      <!-- <div v-show="size > 490">
        <currency></currency>
      </div> -->
      <div v-show="size <= 403" class="z-10">
        <button
          v-show="!minsearch"
          class="button is-lights rounded-full"
          @click="showminsearch"
        >
          <svg
            class="w-6 h-6 text-white font-semibold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <signdrop></signdrop>
    </div>
  </div>
</template>

<script>
// import Currency from '../dropdown/Currency.vue'
import Propertydrophome from '../dropdown/Propertydrophome.vue'
import Signdrop from '../dropdown/Signdrop.vue'
export default {
  components: { Propertydrophome, Signdrop },
  computed: {
    size() {
      return this.$store.state.size
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    showminsearch() {
      this.$store.commit('set_MinSearch', true)
    },
  },
}
</script>
