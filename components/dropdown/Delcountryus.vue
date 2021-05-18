<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdowne"
      :class="{ 'is-active': focused }"
    >
      <div class="">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center w-fit button border rounded clickable w-fit select-none space-x-1"
            @click="
              {
                focused = !focused
              }
            "
          >
            <span class="size-13 logo-color font-semibold block w-fit">{{
              ctry
            }}</span>
            <svg
              class="w-4 h-4 logo-color relative top-01x"
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
          </div>
        </client-only>
      </div>
      <div
        v-show="focused"
        id="dropdown-menu"
        class="dropdown-menu walele"
        role="menu"
      >
        <div class="dropdown-content bg-white border h292">
          <div class="">
            <div class="mb-2 mt-1 px-1">
              <label class="relative flex align-center px-2">
                <input
                  v-model="searching"
                  type="search"
                  placeholder="Choisir un pays"
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
            <div class="overflow-y-auto aside h200">
              <a
                v-for="(element, i) in language"
                :key="i"
                class="dropdown-item clickable flex align-center space-x-1"
                @click="setLang(element)"
              >
                <span
                  class="size-125"
                  :class="{ 'font-semibold': ctry === element }"
                  >{{ element }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pays } from '@/pays/pays'
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    // eslint-disable-next-line no-sequences
    .reduce((res, key) => ((res[key] = obj[key]), res), {})
export default {
  data() {
    return {
      focused: false,
      searching: '',
      pays,
      ctry: '--Choisir un pays--',
    }
  },
  computed: {
    language() {
      return Object.filter(pays, (x) =>
        x.toLowerCase().includes(this.searching.toLowerCase())
      )
    },
  },
  mounted() {
    if (
      this.$auth.user.adresse !== null &&
      this.$auth.user.adresse !== undefined
    ) {
      this.ctry =
        this.$auth.user.adresse.pays === null ||
        this.$auth.user.adresse.pays === undefined
          ? '--Choisir un pays--'
          : this.$auth.user.adresse.pays
    }
    this.$emit('ctry', this.ctry)
  },
  methods: {
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.ctry = value
      this.focused = false
      this.$emit('ctry', this.ctry)
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.8rem !important;
  /*right: -12.1rem !important; */
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
