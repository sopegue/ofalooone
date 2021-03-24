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
              <span class="block w-fit logo-color size-13 mr-1"
                >Trier par:</span
              >
              <span class="size-12 font-semibold block w-fit logo-color">{{
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
        <div
          class="dropdown-content bg-white border h-40maxs overflow-y-auto aside"
        >
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
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Trouver une propriété',
    },
  },
  data() {
    return {
      focused: false,
      currency: '',
      currencies: [
        'Le plus récent',
        'Le plus ancien',
        'Prix croissant',
        'Prix décroissant',
        'Maison',
        'Appartement',
        'Villa',
        'Haut-Standing',
        'Bureau',
        'Magasin',
        'Terrain',
        'Agent, A-Z',
        'Agent, Z-A',
      ],
    }
  },
  computed: {},
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
  top: 1.5rem !important;
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
