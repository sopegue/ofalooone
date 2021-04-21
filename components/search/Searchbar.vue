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
        v-show="inputfocused && search !== ''"
        class="rounded-bl border rounded-br bg-white h-10 shadow-xs w-full absolute z-12 top-0 mt-9.5 -ml-0.8"
      ></div>
      <input
        id="byuyc"
        v-model="search"
        autocomplete="none"
        class="w-full h-full outline-none pr-7.5 size-15 bg-white rounded-tl rounded-bl"
        :class="{
          'ml-2': color !== 'text-white',
        }"
        type="search"
        :placeholder="
          currency === 'Agent'
            ? 'Rechercher une propriété par agent...'
            : 'Rechercher une propriété par ville, quartier...'
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
      <button
        v-show="search !== ''"
        class="absolute right-0 delete mr-2"
        @click="
          {
            search = ''
          }
        "
      ></button>
    </div>
    <button
      class="h-full btn-008489 absolute h-10 right-0 px-3 rounded-tr rounded-br text-white size-13 font-semibold"
      @click="searching"
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
      filter: {
        what: 'all',
        achat_location: {
          multiple: ['Tous types'],
        },
        part: {
          tous: 'Toute part',
        },
        type_loc: {
          tous: 'Tous types',
        },
        achat: {
          type: "Tous types d'achats",
          multiple: [],
        },
        rent: {
          type: 'Tous types de locations',
          multiple: [],
        },
        property: {
          tous: 'Tous types de propriétés',
          multiple: [],
          tous_search: 'Tous types',
        },
        bed: {
          tous: 'Tous types de pièces',
          tous_search: 'Tous types',
        },
        bath: {
          tous: 'Tous types',
        },
        search_price: {
          tous: 'Tout prix',
          min: 0,
          max: 0,
        },
        price: {
          tous: 'Tout prix',
          min: 0,
          max: 0,
        },
        price_loc: {
          tous: 'Tout prix',
          min: 0,
          max: 0,
        },
        taille: {
          tous_search: 'Tous types',
          tous: 'Tous types de tailles',
          min: 0,
          max: 0,
        },
        garage: {
          tous_search: 'Tous types',
          tous: 'Tous types de garages',
        },
        date: {
          tous: 'Tous temps',
          date: null,
        },
        availability: {
          tous: 'Tous types',
          multiple: [],
        },
        indoor: {
          multiple: [],
        },
        outdoor: {
          multiple: [],
        },
        energy: {
          multiple: [],
        },
      },
      inputfocused: false,
      focused: false,
      search: '',
      currency: '',
      currencies: ['Acheter', 'Louer', 'Agent'],
    }
  },
  computed: {
    curoute() {
      return this.$route.path
    },
  },
  watch: {
    curoute(nv, ov) {
      if (nv !== '/' && !nv.includes('/recherche')) {
        sessionStorage.removeItem('filter')
        sessionStorage.removeItem('search')
        sessionStorage.removeItem('txt')
        sessionStorage.removeItem('sort')
        this.currency = 'Acheter'
        this.search = ''
      }
    },
  },
  mounted() {
    this.currency = this.currencies[0]
    if (sessionStorage.search) {
      this.search = sessionStorage.getItem('search')
    }
    if (sessionStorage.txt) {
      this.currency = sessionStorage.getItem('txt')
    }
    this.autoff()

    if (this.curoute !== '/' && !this.curoute.includes('/recherche')) {
      sessionStorage.removeItem('filter')
      sessionStorage.removeItem('search')
      sessionStorage.removeItem('txt')
      sessionStorage.removeItem('sort')
      this.currency = 'Acheter'
      this.search = ''
    }
  },
  methods: {
    autoff() {
      const myel = document.getElementById('byuyc')
      myel.setAttribute('autocomplete', 'off')
    },
    hide() {
      this.focused = false
    },
    setcur(cur) {
      this.currency = cur
      this.hide()
    },
    async searching() {
      if (this.search !== '') {
        sessionStorage.removeItem('search')
        sessionStorage.setItem('search', this.search)
      } else sessionStorage.removeItem('search')

      sessionStorage.removeItem('txt')
      sessionStorage.setItem('txt', this.currency)

      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
        if (this.currency === 'Acheter') {
          this.filter.what = 'Acheter'
          this.filter.achat_location.multiple = ["Tous types d'achats"]
        } else if (this.currency === 'Louer') {
          this.filter.what = 'Louer'
          this.filter.achat_location.multiple = ['Tous types de locations']
        } else {
          this.filter.what = 'Agent'
          this.filter.achat_location.multiple = ['Tous types']
        }
      } else {
        if (this.currency === 'Acheter') {
          this.filter.what = 'Acheter'
          this.filter.achat_location.multiple = ["Tous types d'achats"]
        }
        if (this.currency === 'Louer') {
          this.filter.what = 'Louer'
          this.filter.achat_location.multiple = ['Tous types de locations']
        }
        if (this.currency !== 'Louer' && this.currency !== 'Acheter') {
          this.filter.what = 'Agent'
          this.filter.achat_location.multiple = ['Tous types']
        }
      }
      if (sessionStorage.sort) sessionStorage.removeItem('sort')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      location.assign('/recherche')
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
