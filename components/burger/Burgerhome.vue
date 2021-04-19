<template>
  <div v-click-outside="hide" class="relative">
    <button
      class="p-2 h-auto w-auto rounded-full h-fit w-fit p-1 no-outlines outline-none"
      :class="{
        dezz: color === 'logo-color',
        'button is-lights': color !== 'logo-color',
      }"
      @click="openmodal"
    >
      <svg
        class="w-6 h-6"
        :class="{
          'logo-color': color === 'logo-color',
          'text-white': color !== 'logo-color',
        }"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-show="menu"
      class="fixed top-0 left-0 right-0 bottom-0 z-40 h-full w-full appearxh flex"
    >
      <div class="w240e h-full bg-color-white z-40">
        <button
          class="border-none dezz rounded-full h-fit w-fit p-1 mt-2 ml-2 relative right-0"
          @click="hide"
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
        <div class="flex flex-col mt-5">
          <propertydrop :title="'Acheter'"></propertydrop>
          <propertydrop :title="'Louer'"></propertydrop>
          <a
            href="/devenir-agent"
            class="eefd border-b hover-008489 logo-color size-13 font-semibold pl-4 py-3"
            @click="hide"
            >Devenir agent</a
          >
        </div>
      </div>
      <div class="w-full bg-black-tr h-full z-40" @mousedown="hide"></div>
    </div>
  </div>
</template>

<script>
// import Currencymenu from '../dropdown/Currencymenu'
import Propertydrop from '../dropdown/Propertydrop'
export default {
  components: { Propertydrop },
  props: {
    color: {
      type: String,
      default: 'logo-color',
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
  methods: {
    openmodal() {
      this.menu = true
      document.body.style.overflow = 'hidden'
    },
    hide() {
      this.menu = false
      document.body.style.overflow = 'visible'
    },
  },
}
</script>

<style scoped></style>
