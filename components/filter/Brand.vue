<template>
  <div class="border-b pb-4">
    <div class="flex align-center justify-between">
      <span
        class="font-semibold clickable size-14 logo-color"
        @click="tryingexpand"
        >{{ title }}</span
      >
      <button class="p-1 rounded bg-white no-outlines" @click="tryingexpand">
        <svg
          v-if="!expanded"
          class="w-4 h-4 logo-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <svg
          v-else
          class="w-4 h-4 logo-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>
    </div>
    <div v-show="expanded" class="appearyh">
      <div v-if="id === null"></div>
      <div v-else class="flex flex-col space-y-2 w-full mt-2">
        <div class="">
          <div v-if="number === '1'">
            <div v-for="(cat, i) in categ" :key="i">
              <span
                v-if="i === 0"
                class="size-13 clickable block mb-2"
                :class="{
                  'font-semibold color-008489': checkedCateg.includes(cat),
                }"
                @click="setcur1(cat)"
                >{{ cat }}</span
              >
              <label
                v-else
                :for="'mix' + id + i"
                class="flex align-center container pb-1"
                @click="seting"
                ><span
                  class="w-fit size-13 -mt-012x multichoice-categ"
                  :class="{
                    'color-008489': ischecked(cat),
                  }"
                  >{{ cat }}</span
                >
                <input
                  :id="'mix' + id + i"
                  v-model="checkedCateg"
                  type="checkbox"
                  :value="cat"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div v-if="number === '3'" class="h-40max overflow-y-auto aside">
            <div v-for="(cat, i) in categ" :key="i">
              <label
                :for="'mix' + id + i"
                class="flex align-center container pb-1"
                ><span
                  class="w-fit size-13 -mt-012x multichoice-categ"
                  :class="{
                    'color-008489': ischecked(cat),
                  }"
                  >{{ cat }}</span
                >
                <input
                  :id="'mix' + id + i"
                  v-model="checkedCateg"
                  type="checkbox"
                  :value="cat"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div v-if="number === '2'">
            <div v-for="(cat, i) in categ" :key="i">
              <span
                class="size-13 clickable"
                :class="{
                  'font-semibold color-008489': checkedCateg.includes(cat),
                }"
                @click="setcur1(cat)"
                >{{ cat }}</span
              >
            </div>
            <div v-if="title === 'Date d\'arrivée'">
              <hr class="dropdown-divider" />
              <div class="pb-2">
                <span class="size-12 block color-363636 pb-1"
                  >Choisir une date</span
                >
                <input
                  v-model="dates"
                  class="no-outlines cursor-pointer border px-1 size-13 py-1"
                  type="date"
                  :min="currentdate"
                  @change="datechange"
                />
              </div>
            </div>
            <div v-if="title === 'Prix'">
              <hr class="dropdown-divider" />
              <div>
                <div class="w-fit flex align-center space-x-5 m-0-auto">
                  <label for="minpricecateg" class="size-13 text-center">
                    <span class="block mb-1 size-13">Min (XOF)</span>
                    <input
                      v-model="min"
                      placeholder="Prix min"
                      type="text"
                      class="border rounded size-12 w-24 text-center p-1 no-outlines hover:shadow-sm"
                    />
                  </label>
                  <span class="h-fit w-fit mt-5">⁓</span>
                  <label for="maxpricecateg" class="size-13 text-center">
                    <span class="block mb-1 size-13">Max (XOF)</span>
                    <input
                      v-model="max"
                      type="text"
                      placeholder="Prix max"
                      class="border rounded size-12 w-24 text-center p-1 no-outlines hover:shadow-sm"
                    />
                  </label>
                </div>
                <div class="m-0-auto w-full pt-4 pb-2">
                  <button
                    class="btn-008489 px-3 pb-1 w-full rounded no-outlines"
                    @click="setprice"
                  >
                    <span class="text-white size-11 h-fit font-semibold"
                      >Appliquer les prix</span
                    >
                  </button>
                </div>
              </div>
            </div>
            <div v-if="title === 'Taille (m²)'">
              <hr class="dropdown-divider" />
              <div>
                <div class="w-fit flex align-center space-x-4 m-0-auto">
                  <label for="minpricecateg" class="size-13 text-center">
                    <span class="block mb-1 size-13">Min (m²)</span>
                    <input
                      v-model="min"
                      placeholder="Taille min"
                      type="text"
                      class="border rounded size-12 w-24 text-center p-1 no-outlines hover:shadow-sm"
                    />
                  </label>
                  <span class="h-fit w-fit mt-5">⁓</span>
                  <label for="maxpricecateg" class="size-13 text-center">
                    <span class="block mb-1 size-13">Max (m²)</span>
                    <input
                      v-model="max"
                      type="text"
                      placeholder="Taille max"
                      class="border rounded size-12 w-24 text-center p-1 no-outlines hover:shadow-sm"
                    />
                  </label>
                </div>
                <div class="m-0-auto w-full pt-4 pb-2">
                  <button
                    class="btn-008489 px-3 pb-1 w-full rounded no-outlines"
                    @click="setsize"
                  >
                    <span class="text-white size-11 h-fit font-semibold"
                      >Appliquer les tailles</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span v-if="categ.length === 0" class="size-14 h-centers oneline">
            No result for "{{ search }}"</span
          >
        </div>
        <!-- <input type="checkbox" class="clickable" />
          <span class="w-fit size-14">Computers & Electronics</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toremove: {
      type: String,
      default: 'nothing',
    },
    title: {
      type: String,
      default: 'Achat et location',
    },
    number: {
      type: String,
      default: '1',
    },
    currentchecked: {
      type: Array,
      default: () => [
        'Tous types',
        'Achat total',
        'Acheter une part',
        'Location totale',
        'Louer une part',
      ],
    },
    content: {
      type: Array,
      default: () => [
        'Tous types',
        'Achat total',
        'Acheter une part',
        'Location totale',
        'Louer une part',
      ],
    },
  },
  data() {
    return {
      dates: this.$moment(new Date()).format('YYYY-MM-DD'),
      currentdate: this.$moment(new Date()).format('YYYY-MM-DD'),
      index: 0,
      hidden: false,
      has_reset: false,
      hasfil: false,
      indexsub: 0,
      hiddensub: false,
      expand: true,
      id: null,
      checkedCateg: [],
      search: '',
      max: '',
      min: '',
      filter_old: {
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
    }
  },
  computed: {
    current() {
      return this.checkedCateg
    },
    categ() {
      return this.content.filter((x) =>
        x.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    expanded() {
      return this.expand === true
    },
    me() {
      return this.hidden === true
    },
    filting() {
      return this.hasfil === true
    },
    mesub() {
      return this.hiddensub === true
    },
    // hide(i) {
    //   return this.hidden === true && this.index !== i
    // },
    size() {
      return this.$store.state.size
    },
    scroll() {
      return this.$store.state.scroll
    },
    youreset() {
      return this.has_reset === true
    },
    reset() {
      return this.$store.state.reseting === true
    },
  },
  watch: {
    // whenever toremove changes, this function will run
    toremove(newcateg, oldcateg) {
      this.deletecateg(newcateg)
    },
    size(newcateg, oldcateg) {
      if (newcateg < 1150) this.expand = false
    },
    min(newcateg, oldcateg) {
      if (!newcateg.toString().includes(' ')) {
        if (!isNaN(newcateg)) {
          this.min = newcateg
        } else {
          this.min = oldcateg
        }
      } else {
        this.min = oldcateg
      }
    },
    max(newcateg, oldcateg) {
      if (!newcateg.toString().includes(' ')) {
        if (!isNaN(newcateg)) {
          this.max = newcateg
        } else {
          this.max = oldcateg
        }
      } else {
        this.max = oldcateg
      }
    },
    checkedCateg(newv, oldv) {
      if (newv.length > 1) {
        if (newv.includes('Tous types'))
          newv.splice(newv.indexOf('Tous types'), 1)
      }
      if (newv.length === 0) {
        if (
          this.content.includes('Tous types') &&
          this.title !== 'Taille (m²)'
        ) {
          this.checkedCateg = ['Tous types']
        }
      }
      if (this.title === 'Achat et location') {
        // console.log('fd')
        if (
          newv.includes('Acheter une part') ||
          newv.includes('Louer une part') ||
          newv.includes('Tous types') ||
          newv.length === 4
        ) {
          this.$emit('part', true)
        } else this.$emit('part', false)
        if (
          newv.includes('Location totale') ||
          newv.includes('Louer une part') ||
          newv.includes('Tous types') ||
          newv.length === 4
        ) {
          this.$emit('location', true)
        } else this.$emit('location', false)
      }
      if (
        this.title === 'Achat et location' ||
        this.title === 'Types de propriétés' ||
        this.title === 'Indoor' ||
        this.title === 'Outdoor' ||
        this.title === "Contrôle d'énergie" ||
        this.title === 'Disponibilité'
      ) {
        this.fill_filter(newv)
      }
    },
    filting(nv, ov) {
      if (nv) {
        this.filling()
      }
    },
    reset(nv, ov) {
      if (nv) {
        this.has_reset = true
      } else this.has_reset = false
    },
    youreset(nv, ov) {
      if (nv) {
        this.resetingAll()
      }
    },
  },
  mounted() {
    this.$emit('there')
    this.checkedCateg[0] = this.content[0]
    if (this.size < 1050) this.expand = false
    this.id = this._uid
    this.fill_ifOk()
  },
  methods: {
    datechange(e) {
      this.dates = e.target.value
      this.setDate(e.target.value)
    },
    resetingAll() {
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      this.filter = this.filter_old
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      this.min = ''
      this.max = ''
      this.checkedCateg = []
      this.checkedCateg.push(this.content[0])
      this.$emit('done')
    },
    async fill_ifOk() {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      this.hasfil = true
      this.$emit('finished', true)
    },
    async fill_filter(val) {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      if (this.title === 'Achat et location') {
        if (val.includes('Tous types')) {
          this.filter.what = 'all'
          this.filter.achat_location.multiple = ['Tous types']

          if (sessionStorage.filter) sessionStorage.removeItem('filter')
          sessionStorage.setItem('filter', JSON.stringify(this.filter))
        } else {
          if (val.length >= 3) {
            this.filter.what = 'all'
          } else if (val.length === 2) {
            if (
              (val.includes('Achat total') &&
                val.includes('Location totale')) ||
              (val.includes('Acheter une part') &&
                val.includes('Location totale')) ||
              (val.includes('Achat total') && val.includes('Louer une part')) ||
              (val.includes('Acheter une part') &&
                val.includes('Louer une part'))
            ) {
              this.filter.what = 'all'
            }
            if (
              val.includes('Achat total') &&
              val.includes('Acheter une part')
            ) {
              this.filter.what = 'Acheter'
            }
            if (
              val.includes('Location totale') &&
              val.includes('Louer une part')
            ) {
              this.filter.what = 'Louer'
            }
          } else {
            if (
              val.includes('Achat total') ||
              val.includes('Acheter une part')
            ) {
              this.filter.what = 'Acheter'
            }
            if (
              val.includes('Location totale') ||
              val.includes('Louer une part')
            ) {
              this.filter.what = 'Louer'
            }
          }

          this.filter.achat_location.multiple = val
          if (sessionStorage.filter) sessionStorage.removeItem('filter')
          sessionStorage.setItem('filter', JSON.stringify(this.filter))
        }
      }
      if (this.title === 'Types de propriétés') {
        if (val.includes('Tous types')) {
          this.filter.property.multiple = ['Tous types']
        } else {
          this.filter.property.multiple = val
        }
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Indoor') {
        if (val.includes('Tous types')) {
          this.filter.indoor.multiple = ['Tous types']
        } else {
          this.filter.indoor.multiple = val
        }
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Outdoor') {
        if (val.includes('Tous types')) {
          this.filter.outdoor.multiple = ['Tous types']
        } else {
          this.filter.outdoor.multiple = val
        }
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === "Contrôle d'énergie") {
        if (val.includes('Tous types')) {
          this.filter.energy.multiple = ['Tous types']
        } else {
          this.filter.energy.multiple = val
        }
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Disponibilité') {
        if (val.includes('Tous types')) {
          this.filter.availability.multiple = ['Tous types']
        } else {
          this.filter.availability.multiple = val
        }
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
    },
    async fill_filterSet(val) {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      if (this.title === 'Part') {
        this.filter.part.tous = val
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Type de location') {
        this.filter.type_loc.tous = val
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Pièces') {
        this.filter.bed.tous_search = val
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Prix') {
        this.filter.search_price.tous = val
        this.filter.search_price.min = 0
        this.filter.search_price.max = 0
        this.min = ''
        this.max = ''
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Taille (m²)') {
        this.filter.taille.tous_search = val
        this.filter.taille.min = 0
        this.filter.taille.max = 0
        this.min = ''
        this.max = ''
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Salles de bains') {
        this.filter.bath.tous = val
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === 'Garages') {
        this.filter.garage.tous_search = val
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
      if (this.title === "Date d'arrivée") {
        this.dates = this.$moment(new Date()).format('YYYY-MM-DD')
        this.filter.date.tous = val
        this.filter.date.date = null
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(this.filter))
      }
    },
    async setDate(val) {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      this.checkedCateg = []
      this.filter.date.tous = null
      this.filter.date.date = val
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
    },
    filling() {
      if (this.title === 'Achat et location') {
        if (
          this.filter.achat_location.multiple.includes("Tous types d'achats")
        ) {
          this.checkedCateg = []
          this.checkedCateg = ['Achat total', 'Acheter une part']
        } else if (
          this.filter.achat_location.multiple.includes(
            'Tous types de locations'
          )
        ) {
          this.checkedCateg = []
          this.checkedCateg = ['Location totale', 'Louer une part']
        } else if (this.filter.achat_location.multiple.includes('Tous types')) {
          this.checkedCateg = ['Tous types']
        } else {
          this.checkedCateg = []
          this.filter.achat_location.multiple.forEach((element) => {
            this.checkedCateg.push(element)
          })
        }
      }
      if (this.title === "Date d'arrivée") {
        this.checkedCateg = []
        if (this.filter.date.date === null) {
          this.checkedCateg.push(this.filter.date.tous)
        } else {
          this.dates = this.filter.date.date
        }
      }
      if (this.title === 'Types de propriétés') {
        if (this.filter.property.multiple.length === 1) {
          if (
            this.filter.property.multiple[0] === 'Tous types de propriétés' ||
            this.filter.property.multiple[0] === 'Tous types'
          )
            this.checkedCateg = ['Tous types']
          else {
            this.checkedCateg = this.filter.property.multiple
          }
        } else if (this.filter.property.multiple.length > 1) {
          this.checkedCateg = []
          if (
            this.filter.property.multiple[0] === 'Tous types de propriétés' ||
            this.filter.property.multiple[0] === 'Tous types'
          ) {
            for (
              let index = 1;
              index < this.filter.property.multiple.length;
              index++
            ) {
              const element = this.filter.property.multiple[index]
              this.checkedCateg.push(element)
            }
          } else {
            for (
              let index = 0;
              index < this.filter.property.multiple.length;
              index++
            ) {
              const element = this.filter.property.multiple[index]
              this.checkedCateg.push(element)
            }
          }
        } else if (this.filter.property.multiple.length === 0)
          this.checkedCateg = ['Tous types']
      }
      if (this.title === 'Disponibilité') {
        if (this.filter.availability.multiple.length === 0) {
          this.checkedCateg = ['Tous types']
        } else if (this.filter.availability.multiple.length > 0) {
          this.checkedCateg = []
          for (
            let index = 0;
            index < this.filter.availability.multiple.length;
            index++
          ) {
            const element = this.filter.availability.multiple[index]
            this.checkedCateg.push(element)
          }
        }
      }
      if (this.title === 'Prix') {
        this.checkedCateg = []

        if (
          this.filter.search_price.min === 0 &&
          this.filter.search_price.max === 0
        ) {
          this.checkedCateg.push(this.filter.search_price.tous)
        } else this.checkedCateg = []
        this.min =
          this.filter.search_price.min === 0
            ? ''
            : this.filter.search_price.min.toString()
        this.max =
          this.filter.search_price.max === 0
            ? ''
            : this.filter.search_price.max.toString()
      }
      if (this.title === 'Pièces') {
        this.checkedCateg = [this.filter.bed.tous_search]
      }
      if (this.title === 'Salles de bains') {
        this.checkedCateg = [this.filter.bath.tous]
      }
      if (this.title === 'Part') {
        this.checkedCateg = [this.filter.part.tous]
      }
      if (this.title === 'Type de location') {
        this.checkedCateg = [this.filter.type_loc.tous]
      }
      if (this.title === 'Indoor') {
        if (this.filter.indoor.multiple.length === 0) {
          this.checkedCateg = ['Tous types']
        } else {
          this.checkedCateg = this.filter.indoor.multiple
        }
      }
      if (this.title === 'Outdoor') {
        if (this.filter.outdoor.multiple.length === 0) {
          this.checkedCateg = ['Tous types']
        } else {
          this.checkedCateg = this.filter.outdoor.multiple
        }
      }
      if (this.title === "Contrôle d'énergie") {
        if (this.filter.energy.multiple.length === 0) {
          this.checkedCateg = ['Tous types']
        } else {
          this.checkedCateg = this.filter.energy.multiple
        }
      }
      if (this.title === 'Garages') {
        this.checkedCateg = [this.filter.garage.tous_search]
      }
      if (this.title === 'Taille (m²)') {
        this.checkedCateg = []
        if (this.filter.taille.min === 0 && this.filter.taille.max === 0) {
          this.checkedCateg = ['Tous types']
        } else this.checkedCateg = []
        this.min =
          this.filter.taille.min === 0 ? '' : this.filter.taille.min.toString()
        this.max =
          this.filter.taille.max === 0 ? '' : this.filter.taille.max.toString()
      }
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
    },
    setcur1(cur) {
      this.fill_filterSet(cur)
      this.checkedCateg = []
      this.checkedCateg.push(cur)
    },
    async setprice() {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      if (this.min !== '') this.filter.search_price.min = +this.min
      if (this.max !== '') this.filter.search_price.max = +this.max
      if (this.min === '' && this.max === '') {
        this.filter.search_price.min = 0
        this.filter.search_price.max = 0
        this.checkedCateg = ['Tout prix']
      } else {
        if (this.min === '') {
          this.filter.search_price.min = 0
        }
        if (this.max === '') {
          this.filter.search_price.max = 0
        }
      }
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      if (this.min !== '' || this.max !== '') {
        this.checkedCateg = []
        this.$emit('gone', this.filter)
      }
    },
    async setsize() {
      if (sessionStorage.filter) {
        this.filter = await JSON.parse(sessionStorage.getItem('filter'))
      }
      if (this.min !== '') this.filter.taille.min = +this.min
      if (this.max !== '') this.filter.taille.max = +this.max
      if (this.min === '' && this.max === '') {
        this.filter.taille.min = 0
        this.filter.taille.max = 0
        this.checkedCateg = ['Tous types']
      } else {
        if (this.min === '') {
          this.filter.taille.min = 0
        }
        if (this.max === '') {
          this.filter.taille.max = 0
        }
      }
      if (sessionStorage.filter) sessionStorage.removeItem('filter')
      sessionStorage.setItem('filter', JSON.stringify(this.filter))
      if (this.min !== '' || this.max !== '') {
        this.checkedCateg = []
        this.$emit('gone', this.filter)
      }
    },
    seting() {
      console.log('clicked')
    },
    deletecateg(value) {
      if (value === 'all') this.checkedCateg = []
      else if (value !== 'nothing')
        this.checkedCateg = this.checkedCateg.filter((x) => x !== value)
      this.$emit('welldone')
    },
    sendcateg() {
      this.$emit('choiced', this.current)
    },
    ischecked(value) {
      return this.checkedCateg.includes(value)
    },
    tryingexpand() {
      this.expand = !this.expand
    },
    extendme(i) {
      this.index = i
      this.hidden = true
    },
    reinit() {
      this.index = 0
      this.hidden = false
      this.indexsub = 0
      this.hiddensub = false
    },
    reinitsub() {
      this.indexsub = 0
      this.hiddensub = false
    },
    hide(i) {
      return this.hidden === true && this.index !== i
    },
    extendmesub(i) {
      this.indexsub = i
      this.hiddensub = true
    },
    hidesub(i) {
      return this.hiddensub === true && this.indexsub !== i
    },
  },
}
</script>

<style scoped></style>
