<template>
  <div
    class="bg-white h-10 flex align-center rounded relative"
    :class="{
      border: color !== 'text-white',
    }"
  >
    <div>
      <div
        v-click-outside="hide"
        class="dropdown"
        :class="{ 'is-active': focused }"
      >
        <div class="dropdown-trigger">
          <client-only>
            <div
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              class="flex align-center space-x-1 h-full bg-transparent clickable select-none px-3"
              :class="{
                'border-r': color !== 'text-white',
                'border-none': color === 'text-white',
              }"
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
        <div
          id="dropdown-menu"
          class="dropdown-menu walele"
          role="menu"
          :class="{
            '-mt-2': color !== 'text-white',
          }"
        >
          <div class="dropdown-content bg-white border">
            <a
              v-for="(element, i) in currencies"
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
    <div class="relative flex align-center w-full h-full mr-10">
      <div
        v-show="inputfocused"
        class="rounded-bl rounded-br bg-white h-10 w-full absolute z-12 top-0 mt-10"
      ></div>
      <input
        class="w-full h-full outline-none pr-2 size-17 bg-white rounded-tl rounded-bl"
        :class="{
          'ml-2': color !== 'text-white',
        }"
        type="search"
        :placeholder="
          currency === 'Agent'
            ? 'Rechercher une propriété par agent...'
            : 'Rechercher par ville, quartier, code postal...'
        "
        @focus="
          {
            inputfocused = true
          }
        "
        @blur="
          {
            inputfocused = false
          }
        "
      />
    </div>
    <button
      class="h-full btn-008489 absolute h-10 right-0 px-3 rounded-tr rounded-br text-white size-13 font-semibold"
    >
      <svg
        class="w-5 h-5 text-white"
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
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-white',
    },
  },
  data() {
    return {
      inputfocused: false,
      focused: false,
      currency: '',
      currencies: ['Acheter', 'Louer', 'Agent'],
    }
  },
  mounted() {
    this.currency = this.currencies[0]
  },
  methods: {
    hide() {
      this.focused = false
    },
    setcur(cur) {
      this.currency = cur
      this.hide()
    },
  },
}
</script>

<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2rem !important;
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
