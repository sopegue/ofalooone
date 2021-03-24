<template>
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
            class="flex align-center space-x-1 button bg-transparent border-none rounded-full clickable select-none px-3"
            @click="
              {
                focused = !focused
              }
            "
          >
            <div class="flex align-center">
              <span
                class="size-13 font-semibold block w-fit text-white wmax128 over"
                ><span v-show="what === 'date'" class="text-white size-13"
                  >Date d'arrivée ({{ currency }})</span
                >
                <span v-show="what !== 'date'" class="text-white size-13">{{
                  currency
                }}</span></span
              >
              <svg
                class="w-4 h-4 relative top-03x ml-px transform text-white"
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
            </div>
          </div>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu walele"
        role="menu"
        :class="{ left: left, right: right }"
      >
        <div class="dropdown-content bg-white border h231max overflow-y-auto">
          <div v-show="what === 'type'">
            <a
              v-for="(element, i) in currencies"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
            >
              <span
                v-show="i === 0"
                class="size-125"
                :class="{ 'font-semibold': currency === element }"
                @click="setcur(element)"
                >{{ element }}</span
              >
              <label
                v-show="i > 0"
                class="flex w-full h-full align-center container"
                @click="setcur(element)"
                ><span
                  class="size-125 -mt-012x multichoice-categ"
                  :class="{
                    'font-semibold color-004e66': ischecked(element),
                  }"
                  >{{ element }}</span
                >
                <input
                  v-model="checkedCateg"
                  type="checkbox"
                  :value="element"
                />
                <span class="checkmark"></span>
              </label>
            </a>
          </div>
          <div v-show="what === 'bed' || what === 'achat' || what === 'garage'">
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
          <div v-show="what === 'date'">
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
            <hr class="dropdown-divider" />
            <div class="px-4 pb-5">
              <span class="size-13 pb-1">Choisir une date</span>
              <input
                v-model="dates"
                class="no-outlines border px-1 py-1"
                type="date"
                :min="currentdate"
              />
            </div>
          </div>
          <div v-show="what === 'price'">
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
            <hr class="dropdown-divider" />
            <div class="px-4">
              <div class="w-fit flex align-center space-x-2 m-0-auto">
                <label for="minpricecateg" class="size-13 text-center">
                  <span class="block mb-1 size-13">Min (XOF)</span>
                  <input
                    v-model="min"
                    placeholder="Prix min"
                    type="text"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
                <span class="h-fit w-fit mt-5">⁓</span>
                <label for="maxpricecateg" class="size-13 text-center">
                  <span class="block mb-1 size-13">Max (XOF)</span>
                  <input
                    v-model="max"
                    type="text"
                    placeholder="Prix max"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
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
          <div v-show="what === 'size'">
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
            <hr class="dropdown-divider" />
            <div class="px-4">
              <div class="w-fit flex align-center space-x-2 m-0-auto">
                <label for="minpricecateg" class="size-13 text-center">
                  <span class="block mb-1 size-13">Min (m²)</span>
                  <input
                    v-model="min"
                    placeholder="Taille min"
                    type="text"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
                  />
                </label>
                <span class="h-fit w-fit mt-5">⁓</span>
                <label for="maxpricecateg" class="size-13 text-center">
                  <span class="block mb-1 size-13">Max (m²)</span>
                  <input
                    v-model="max"
                    type="text"
                    placeholder="Taille max"
                    class="border rounded size-12 w-18 text-center p-1 no-outlines hover:shadow-sm"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    what: {
      type: String,
      default: '',
    },
    left: {
      type: Boolean,
      default: false,
    },
    currencies: {
      type: Array,
      default: () => ['yo'],
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      currency: '',
      checkedCateg: [],
      max: '',
      min: '',
      date: new Date(),
      currentdate: new Date(),
    }
  },
  computed: {
    dates: {
      get() {
        return this.date
      },
      set(newvalue) {
        if (newvalue >= this.date && newvalue >= this.currentdate)
          this.date = newvalue.toDateString()
      },
    },
  },
  watch: {
    checkedCateg(newv, oldv) {
      if (newv.length === 1) {
        this.currency = this.currencies[0]
      } else if (newv.length === 2) {
        this.currency = newv[1]
      } else if (newv.length > 2) {
        if (this.what === 'type')
          this.currency =
            '+ ' + (newv.length - 1).toString() + ' types de propriétés'
      }
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
    currency(newv, oldv) {
      if (newv === this.currencies[0]) {
        this.checkedCateg = [this.currencies[0]]
      }
    },
  },
  mounted() {
    this.currency = this.currencies[0]
    this.checkedCateg = [this.currencies[0]]
  },
  methods: {
    hide() {
      this.focused = false
    },
    setcur(cur) {
      this.currency = cur
      if (
        this.what === 'achat' ||
        this.what === 'bed' ||
        this.what === 'price' ||
        this.what === 'garage' ||
        this.what === 'date' ||
        this.what === 'size'
      )
        this.hide()
    },
    ischecked(value) {
      return this.checkedCateg.includes(value)
    },
    formatMoney(val) {
      let money = ''
      let reverse = ''
      let i = 0
      for (let index = val.length - 1; index >= 0; index--) {
        money = money + val[index]
        if (i === 2) {
          money = money + ' '
          i = 0
        } else i++
      }
      for (let index = money.length - 1; index >= 0; index--) {
        reverse = reverse + money[index]
      }
      return reverse
    },
    setprice() {
      if (this.min !== '' && this.max !== '') {
        if (+this.min <= +this.max)
          this.currency =
            'Min: ' +
            this.formatMoney(this.min) +
            ' FCFA & Max: ' +
            this.formatMoney(this.max) +
            ' FCFA'
        if (+this.min > +this.max) {
          this.max = ''
          this.currency = 'Min: ' + this.formatMoney(this.min) + ' FCFA'
        }
      } else if (this.min === '' && this.max !== '') {
        this.currency = 'Max: ' + this.formatMoney(this.max) + ' FCFA'
      } else if (this.max === '' && this.min !== '')
        this.currency = 'Min: ' + this.formatMoney(this.min) + ' FCFA'
      this.hide()
    },
    setsize() {
      if (this.min !== '' && this.max !== '') {
        if (+this.min <= +this.max)
          this.currency =
            'Min: ' +
            this.formatMoney(this.min) +
            ' m² & Max: ' +
            this.formatMoney(this.max) +
            ' m²'
        if (+this.min > +this.max) {
          this.max = ''
          this.currency = 'Min: ' + this.formatMoney(this.min) + ' m²'
        }
      } else if (this.min === '' && this.max !== '') {
        this.currency = 'Max: ' + this.formatMoney(this.max) + ' m²'
      } else if (this.max === '' && this.min !== '')
        this.currency = 'Min: ' + this.formatMoney(this.min) + ' m²'
      this.hide()
    },
  },
}
</script>
<style scoped>
input::placeholder {
  font-size: 13px !important;
}
.walele {
  animation: appear 0.2s;
  top: 1.9rem !important;
}
.right {
  right: 0 !important;
}
.left {
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
