<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown w-fit"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center space-x-1 w-fit button bg-transparent ml-0 border rounded clickable select-none px-3 py-1"
            @click="
              {
                focused = !focused
              }
            "
          >
            <p class="flex align-center">
              <span class="size-13 font-semibold block w-fit logo-color">{{
                currency
              }}</span>
              <svg
                class="w-4 h-4 relative top-03x ml-px logo-color transform"
                :class="{ 'rotate-180 trans-x300': focused }"
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
            </p>
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu walele" role="menu">
        <div class="dropdown-content bg-white border">
          <div v-if="content.includes('Abidjan')" class="mb-2 mt-1 px-1">
            <label class="relative flex align-center px-2">
              <input
                v-model="searching"
                type="search"
                :placeholder="placeholder"
                class="border border-gray-400 w-full no-outlines pl-2 pr-6 py-1 rounded size-14"
              />
              <svg
                class="w-4 h-4 absolute right-0 mr-4 text-gray-800"
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
            </label>
          </div>
          <div v-if="content.includes('10%')" class="mb-2 mt-1 px-1">
            <label class="relative flex align-center px-2">
              <input
                v-model="percenting"
                type="text"
                :placeholder="placeholder"
                class="border border-gray-400 w-full no-outlines pl-2 pr-6 py-1 rounded size-14"
                @keyup.enter="percent"
              />
            </label>
          </div>
          <div class="h-40maxs overflow-y-auto aside">
            <a
              v-for="(element, i) in language"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setcur(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                >{{ element }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    first: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      focused: false,
      currency: '',
      searching: '',
      percenting: '',
    }
  },
  computed: {
    language() {
      return this.content.filter((x) =>
        x.toLowerCase().includes(this.searching.toLowerCase())
      )
    },
  },
  watch: {
    percenting(nv, ov) {
      if (this.$linker.isNumber(nv)) {
        if (nv.length < 4 && +nv < 100) {
          this.percenting = (+nv).toString()
        } else this.percenting = ov
      } else this.percenting = ov
    },
  },
  mounted() {
    if (this.first === '') this.currency = this.content[0]
    else this.currency = this.first
    this.emitres()
  },
  methods: {
    hide() {
      this.focused = false
    },
    percent() {
      if (this.percenting.length > 0) {
        if (+this.percenting > 0 && +this.percenting < 99) {
          this.currency = this.percenting + '%'
          this.emitres()
          this.hide()
        }
      }
    },
    emitres() {
      this.$emit('val', this.currency)
    },
    setcur(cur) {
      this.currency = cur
      this.emitres()
      this.hide()
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.5rem !important;
  left: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
