<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
      @mouseleave="hide"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center space-x-1 button bg-transparent border-none rounded-full clickable select-none"
            @mouseover="
              {
                focused = true
              }
            "
            @click="
              {
                focused = !focused
              }
            "
          >
            <p class="flex align-center">
              <span
                v-show="title === 'Acheter'"
                class="size-13 font-semibold block w-fit"
                :class="{
                  'logo-color': color !== 'text-white',
                  'text-white': color === 'text-white',
                }"
                >{{ title }}</span
              >
              <span
                v-show="title === 'Louer'"
                class="size-13 font-semibold block w-fit"
                :class="{
                  'logo-color': color !== 'text-white',
                  'text-white': color === 'text-white',
                }"
                >{{ title }}</span
              >
              <span
                v-show="title === 'Trouver une propriété'"
                class="size-13 font-semibold block w-fit"
                :class="{
                  'logo-color': color !== 'text-white',
                  'text-white': color === 'text-white',
                }"
                >{{ title }}</span
              >
              <svg
                class="w-4 h-4 relative transform top-03x ml-px text-white"
                :class="{
                  'rotate-180 trans-x300': focused,
                  'logo-color': color !== 'text-white',
                  'text-white': color === 'text-white',
                }"
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
          v-show="title === 'Louer'"
          class="dropdown-content bg-white border"
        >
          <a class="dropdown-item size-13 clickable" @click="location('totale')"
            >Location totale</a
          >
          <a
            class="dropdown-item size-13 clickable"
            @click="location('partielle')"
            >Louer une part</a
          >
        </div>
        <div
          v-show="title === 'Acheter'"
          class="dropdown-content bg-white border"
        >
          <a class="dropdown-item size-13 clickable" @click="achat('total')"
            >Achat total</a
          >
          <a class="dropdown-item size-13 clickable" @click="achat('partiel')"
            >Acheter une part</a
          >
        </div>
        <div
          v-show="title === 'Trouver une propriété'"
          class="dropdown-content bg-white border"
        >
          <a class="dropdown-item size-13 clickable" @click="hide"
            >Acheter une propriété</a
          >
          <a class="dropdown-item size-13 clickable" @click="hide"
            >Louer une proprité</a
          >
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
      focused: false,
    }
  },
  computed: {},
  methods: {
    hide() {
      this.focused = false
    },
    achat(val) {
      sessionStorage.removeItem('filter')
      sessionStorage.removeItem('search')
      sessionStorage.removeItem('txt')
      sessionStorage.removeItem('sort')
      this.filter.what = 'Acheter'
      if (val === 'total') {
        this.filter.achat_location.multiple = ['Achat total']
      } else this.filter.achat_location.multiple = ['Acheter une part']
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      this.hide()
      location.assign('/recherche')
    },
    location(val) {
      sessionStorage.removeItem('filter')
      sessionStorage.removeItem('search')
      sessionStorage.removeItem('txt')
      sessionStorage.removeItem('sort')
      this.filter.what = 'Louer'
      if (val === 'totale') {
        this.filter.achat_location.multiple = ['Location totale']
      } else this.filter.achat_location.multiple = ['Louer une part']
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      this.hide()
      location.assign('/recherche')
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.8rem !important;
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
