<template>
  <div class="border-b pb-4">
    <div class="flex align-center justify-between">
      <span class="font-semibold size-14 logo-color">{{ title }}</span>
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
                <input class="no-outlines border px-1 py-1" type="date" />
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
      index: 0,
      hidden: false,
      indexsub: 0,
      hiddensub: false,
      expand: true,
      id: null,
      checkedCateg: [],
      search: '',
      max: '',
      min: '',
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
  },
  watch: {
    // whenever toremove changes, this function will run
    toremove(newcateg, oldcateg) {
      this.deletecateg(newcateg)
    },
    size(newcateg, oldcateg) {
      if (newcateg < 1100) this.expand = false
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
        if (this.content.includes('Tous types')) {
          this.checkedCateg = ['Tous types']
        }
      }
    },
  },
  mounted() {
    if (this.size < 1050) this.expand = false
    this.id = this._uid
  },
  methods: {
    setcur1(cur) {
      this.checkedCateg = []
      this.checkedCateg.push(cur)
    },
    setcur2(cur) {
      this.checkedCateg = []
      this.checkedCateg.push(cur)
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
