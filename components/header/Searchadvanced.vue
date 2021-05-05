<template>
  <div class="z-10x wsearch m-0-auto pt-28">
    <div class="flex align-center space-x-2">
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white py-2x size-13 font-semibold"
        :class="{
          'adv-active': activesearch === 'Acheter',
          'w-full': size <= 500,
        }"
        @click.stop="
          {
            activesearch = 'Acheter'
          }
        "
      >
        Acheter
      </button>
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white size-13 py-2x font-semibold"
        :class="{
          'adv-active': activesearch === 'Louer',
          'w-full': size <= 500,
        }"
        @click.stop="
          {
            activesearch = 'Louer'
          }
        "
      >
        Louer
      </button>
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white size-13 py-2x font-semibold"
        :class="{
          'adv-active': activesearch === 'Agent',
          'w-full': size <= 500,
        }"
        @click.stop="
          {
            activesearch = 'Agent'
          }
        "
      >
        Agent
      </button>
    </div>
    <div class="relative w-full hsearch btn-adv rounded-br rounded-bl">
      <div class="absolute bgtr h-full w-full z-10"></div>
      <div
        class="z-12 relative w-full px-8 pt-5"
        :class="{
          'pb-6': activesearch === 'Agent',
          'pb-2': activesearch !== 'Agent',
        }"
      >
        <h4 v-show="activesearch === 'Acheter'" class="size-18 text-white mb-3">
          Trouver une propriété à acheter
        </h4>
        <h4 v-show="activesearch === 'Louer'" class="size-18 text-white mb-3">
          Trouver une propriété à louer
        </h4>
        <h4 v-show="activesearch === 'Agent'" class="size-18 text-white mb-3">
          Trouver une propriété par agent
        </h4>
        <form
          class="flex align-center hsin w-full"
          @submit.prevent="searchingme"
        >
          <div
            v-click-outside="hidesearch"
            class="relative flex align-center w-full h-full rounded-tl rounded-bl"
          >
            <div
              v-show="
                inputfocused &&
                activesearch !== 'Agent' &&
                (searches.length > 0 || saved.length > 0)
              "
              class="rounded-bl flex pb-2 flex-col border shadow rounded-br bg-white max-h-82 w-full absolute z-12 top-0 mt-11.5"
            >
              <client-only>
                <div
                  v-show="
                    searches !== null &&
                    searches !== undefined &&
                    searches.length > 0
                  "
                  class="max-h-40 pt-2 w-full overflow-y-auto"
                  :class="{ 'border-b mb-1.5': saved.length > 0 }"
                >
                  <div class="flex flex-col pb-2">
                    <div
                      v-for="(res, i) in searches"
                      :key="i"
                      class="flex align-center space-x-1.5 px-3 py-1 clickable hover:bg-gray-100"
                      @click.stop="setSearch(res.adresse, res.ville)"
                    >
                      <svg
                        class="w-5 h-5 min-w-5 min-h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <a class="search-res lowercase color-363636 oneline"
                        >{{ res.adresse }}, {{ res.ville }}</a
                      >
                    </div>
                  </div>
                </div>
              </client-only>
              <client-only>
                <div
                  v-show="saved.length > 0"
                  class="max-h-35 flex flex-col space-y-1.5 pb-0.5 px-4 overflow-y-auto"
                >
                  <div
                    class="flex align-center space-x-3"
                    :class="{ 'pt-2': searches.length <= 0 }"
                  >
                    <h4 class="size-14 font-semibold logo-color">
                      Recherches récentes
                    </h4>
                    <a class="delete mt-1" @click.stop="deleteSearch"></a>
                  </div>
                  <div class="flex flex-wrap">
                    <a
                      v-for="(ss, j) in saved"
                      :key="j"
                      class="flex align-center space-x-2 button py-0 is-light rounded-full w-fit m-1.5"
                      @click.stop="gose(ss)"
                    >
                      <span class="py-0.5 pl-1 size-13 font-semibold">{{
                        ss
                      }}</span>
                      <svg
                        class="w-4 h-4 color-363636"
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
                    </a>
                  </div>
                </div>
              </client-only>
            </div>
            <svg
              class="w-6 h-6 logo-color absolute left-0 ml-3"
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
            <input
              v-model="search"
              class="w-full h-full outline-none pl-12 pr-6.5 size-16 bg-white rounded-tl rounded-bl"
              type="search"
              :placeholder="
                activesearch === 'Agent'
                  ? 'Rechercher une propriété par agent...'
                  : 'Rechercher par ville, quartier...'
              "
              @focus="
                {
                  inputfocused = true
                }
              "
            />
            <a
              v-show="search !== ''"
              class="absolute right-0 delete mr-1.5"
              @click.stop="
                {
                  search = ''
                }
              "
            ></a>
          </div>
          <button
            class="h-full button btn-008489 rounded-tr rounded-br text-white size-13 font-semibold"
            :class="{ 'px-6': size > 500, 'px-3': size <= 500 }"
            @click.stop="gotosearch"
          >
            Rechercher
          </button>
        </form>
        <div
          v-show="activesearch === 'Acheter' || activesearch === 'Louer'"
          class="flex align-center flex-wrap pt-2"
        >
          <optionadvanced
            v-show="activesearch === 'Acheter'"
            class="mr-1 my-1"
            :left="true"
            :what="'achat'"
            :currencies="[
              'Tous types d\'achats',
              'Achat total',
              'Acheter une part',
            ]"
            @options="achat"
          ></optionadvanced>
          <optionadvanced
            v-show="activesearch === 'Louer'"
            class="mr-1 my-1"
            :left="true"
            :what="'location'"
            :currencies="[
              'Tous types de locations',
              'Location totale',
              'Louer une part',
            ]"
            @options="location"
          ></optionadvanced
          ><optionadvanced
            class="mx-1 my-1"
            :what="'type'"
            :left="true"
            :currencies="[
              'Tous types de propriétés',
              'Studio',
              'Maison',
              'Appartement',
              'Villa',
              'Haut-Standing',
              'Bureau',
              'Magasin',
              'Terrain',
            ]"
            @options1="properties"
          ></optionadvanced
          ><optionadvanced
            class="mx-1 my-1"
            :what="'bed'"
            :left="true"
            :currencies="[
              'Tous types de pièces',
              '1 pièce et plus',
              '2 pièces et plus',
              '3 pièces et plus',
              '4 pièces et plus',
              '5 pièces et plus',
            ]"
            @options="beding"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Acheter'"
            class="mx-1 my-1"
            :what="'price'"
            :left="true"
            :currencies="['Tout prix']"
            @options2="pricing"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Louer'"
            class="mx-1 my-1"
            :what="'price-loc'"
            :left="true"
            :currencies="['Tout prix']"
            @options2="pricingloc"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Louer' || activesearch === 'Acheter'"
            class="mx-1 my-1"
            :what="'size'"
            :left="true"
            :currencies="['Tous types de tailles']"
            @options2="sizing"
          ></optionadvanced>
          <optionadvanced
            v-show="activesearch === 'Louer' || activesearch === 'Acheter'"
            class="mx-1 my-1"
            :what="'garage'"
            :left="true"
            :currencies="[
              'Tous types de garages',
              '1 garage et plus',
              '2 garages et plus',
              '3 garages et plus',
              '4 garages et plus',
              '5 garages et plus',
            ]"
            @options="garaging"
          ></optionadvanced>
          <optionadvanced
            v-if="false"
            class="mx-1 my-1"
            :what="'date'"
            :left="true"
            :currencies="[
              'Tous temps',
              'Maintenant',
              'Cette semaine',
              'La semaine prochaine',
              'Le mois prochain',
            ]"
            @options="dating"
            @optionsd="datingd"
          ></optionadvanced>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Optionadvanced from '../dropdown/Optionadvanced'
export default {
  components: { Optionadvanced },
  data() {
    return {
      activesearch: 'Acheter',
      inputfocused: false,
      search: '',
      results: [],
      history: {
        searches: [],
      },
      timestamp: 0,
      toSearch: '',
      filter: {
        what: 'Acheter',
        achat_location: {
          multiple: ['Tous types'],
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
        part: {
          tous: 'Toute part',
        },
        type_loc: {
          tous: 'Tous types',
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
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    saved() {
      return this.history !== null &&
        this.history !== undefined &&
        this.history.searches !== undefined &&
        this.history.searches !== undefined &&
        this.history.searches.length > 0
        ? this.history.searches
        : []
    },
    searches() {
      return this.results !== null &&
        this.results !== undefined &&
        this.results.length > 0
        ? this.results.slice(0, 10)
        : []
    },
  },
  watch: {
    activesearch(newv, oldv) {
      this.filter.what = newv
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
      if (sessionStorage.activesearch) sessionStorage.removeItem('activesearch')
      sessionStorage.setItem('activesearch', newv)
    },
    search(nv, ov) {
      if (nv !== '') {
        if (this.timestamp === 0 || Date.now() - this.timestamp > 200) {
          this.timestamp = Date.now()
          this.callme()
        }
      }
    },
  },
  mounted() {
    this.check_storage_and_fill()
    if (sessionStorage.search) {
      this.search = sessionStorage.getItem('search')
    }
    this.checkSearch()
  },
  methods: {
    hidesearch() {
      this.inputfocused = false
    },
    deleteSearch() {
      if (localStorage.history) localStorage.removeItem('history')
      this.history.searches = []
      localStorage.setItem('history', JSON.stringify(this.history))
    },
    async checkSearch() {
      if (localStorage.history) {
        this.history = await JSON.parse(localStorage.getItem('history'))
      }
    },
    achat(val) {
      // this.filter.what = 'Acheter'
      this.filter.achat.type = val
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    location(val) {
      // this.filter.what = 'Acheter'
      this.filter.rent.type = val
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    properties(val) {
      this.filter.property.tous = val.tous
      if (val.tous === 'Tous types de propriétés') {
        this.filter.property.multiple = ['Tous types']
      } else if (val.tab !== undefined) {
        this.filter.property.multiple = []
        for (let index = 1; index < val.tab.length; index++) {
          const element = val.tab[index]
          this.filter.property.multiple.push(element)
        }
      } else {
        this.filter.property.multiple = []
      }
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    beding(val) {
      this.filter.bed.tous = val
      if (val === 'Tous types de pièces')
        this.filter.bed.tous_search = 'Tous types'
      else this.filter.bed.tous_search = val
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    pricing(val) {
      this.filter.price.tous = val.tous
      this.filter.price.min = val.min
      this.filter.price.max = val.max
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    pricingloc(val) {
      this.filter.price_loc.tous = val.tous
      this.filter.price_loc.min = val.min
      this.filter.price_loc.max = val.max
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    sizing(val) {
      if (val === 'Tous types de tailles')
        this.filter.taille.tous_search = 'Tous types'
      else this.filter.taille.tous_search = val.tous
      this.filter.taille.tous = val.tous
      this.filter.taille.min = val.min
      this.filter.taille.max = val.max
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    garaging(val) {
      if (val === 'Tous types de garages')
        this.filter.garage.tous_search = 'Tous types'
      else this.filter.garage.tous_search = val
      this.filter.garage.tous = val
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    dating(val) {
      this.filter.date.tous = val
      this.filter.date.date = null
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    datingd(val) {
      this.filter.date.tous = null
      this.filter.date.date = val
      if (sessionStorage.filter_home) sessionStorage.removeItem('filter_home')
      sessionStorage.setItem('filter_home', JSON.stringify(this.filter))
    },
    check_storage_and_fill() {
      if (sessionStorage.activesearch) {
        this.activesearch = sessionStorage.getItem('activesearch')
        if (this.activesearch === 'Acheter') this.filter.what = 'Acheter'
        if (this.activesearch === 'Louer') this.filter.what = 'Louer'
        if (this.activesearch === 'Agent') this.filter.what = 'Agent'
      }
      if (sessionStorage.filter_home) {
        this.filter = JSON.parse(sessionStorage.getItem('filter_home'))
      }
    },
    callme() {
      this.pendingmail()
        .then((res) => {
          this.results = res.adresse
          const text = document.querySelectorAll('.search-res')
          const ss = this.search
          if (this.searches.length > 0) {
            setTimeout(() => {
              for (let index = 0; index < text.length; index++) {
                const result = text[index]
                if (this.searches[index] !== undefined) {
                  this.searches[index].adresse = this.searches[
                    index
                  ].adresse.toLowerCase()
                  this.searches[index].ville = this.searches[
                    index
                  ].ville.toLowerCase()
                  result.innerHTML = `${this.searches[index].adresse}, ${this.searches[index].ville}`
                }
                const html = result.innerHTML
                const newText = html.replace(
                  ss.toLowerCase(),
                  `<strong>${ss}</strong>`
                )
                result.innerHTML = newText
              }
            }, 100)
          }
        })
        .catch(() => {
          console.error('Oops, maybe an undefined property for this error')
        })
    },
    async setSearch(val1, val2) {
      this.search = val1 + ', ' + val2
      if (localStorage.history) {
        this.history = await JSON.parse(localStorage.getItem('history'))
      }
      if (!this.history.searches.includes(this.search))
        this.history.searches.unshift(this.search)
      this.history.searches = this.history.searches.slice(0, 10)
      if (localStorage.history) localStorage.removeItem('history')
      localStorage.setItem('history', JSON.stringify(this.history))
      this.gotosearch()
    },
    async pendingmail() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$get(
            'https://ofalooback.herokuapp.com/api/properties/search/' +
              this.search
          )
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise searching")
      })
    },
    gose(val) {
      this.search = val
      this.gotosearch()
    },
    async searchingme() {
      if (this.search !== '') {
        if (localStorage.history) {
          this.history = await JSON.parse(localStorage.getItem('history'))
        }
        if (!this.history.searches.includes(this.search))
          this.history.searches.unshift(this.search)
        this.history.searches = this.history.searches.slice(0, 10)
        if (localStorage.history) localStorage.removeItem('history')
        localStorage.setItem('history', JSON.stringify(this.history))
      }
      this.gotosearch()
    },
    async gotosearch() {
      if (sessionStorage.sort) sessionStorage.removeItem('sort')
      if (sessionStorage.txt) sessionStorage.removeItem('txt')
      sessionStorage.setItem('txt', this.activesearch)

      if (this.search !== '') {
        if (localStorage.history) {
          this.history = await JSON.parse(localStorage.getItem('history'))
        }
        if (!this.history.searches.includes(this.search))
          this.history.searches.unshift(this.search)
        this.history.searches = this.history.searches.slice(0, 10)
        if (localStorage.history) localStorage.removeItem('history')
        localStorage.setItem('history', JSON.stringify(this.history))

        if (sessionStorage.search) sessionStorage.removeItem('search')
        sessionStorage.setItem('search', this.search)
      } else if (sessionStorage.search) sessionStorage.removeItem('search')

      sessionStorage.setItem('activesearch', this.activesearch)
      if (this.filter.what === 'Acheter') {
        this.filter.search_price = this.filter.price
        this.filter.achat_location.multiple = []
        this.filter.achat_location.multiple.push(this.filter.achat.type)
      }
      if (this.filter.what === 'Louer') {
        this.filter.search_price = this.filter.price_loc
        this.filter.achat_location.multiple = []
        this.filter.achat_location.multiple.push(this.filter.rent.type)
      }
      if (this.filter.what === 'Agent') {
        this.filter.achat_location.multiple = ['Tous types']
      }
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      location.assign('/recherche')
    },
  },
}
</script>

<style scoped>
.wsearch {
  max-width: 1120px;
}
.wsearch-agent {
  max-width: 1024px !important;
}
.wsearch-location {
  max-width: 1180px !important;
}
@media screen and (max-width: 1110px) {
  .wsearch {
    width: 100% !important;
  }
}
.hsearch {
  height: auto;
}
.hsin {
  height: 48px;
}
</style>
