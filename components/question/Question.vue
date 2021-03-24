<template>
  <div class="border-b pb-2">
    <div class="flex align-center justify-between">
      <span
        class="font-semibold block size-14 clickable"
        :class="{
          'color-008489': expanded,
          'logo-color': !expanded,
        }"
        @click="tryingexpand"
        >{{ title }}</span
      >
      <button class="p-1 rounded bg-white no-outlines" @click="tryingexpand">
        <svg
          v-if="!expanded"
          class="w-4 h-4"
          :class="{
            'color-008489': expanded,
            'logo-color': !expanded,
          }"
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
          class="w-4 h-4"
          :class="{
            'color-008489': expanded,
            'logo-color': !expanded,
          }"
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
    <div v-show="expanded" class="appearyh pb-5">
      <div v-if="id === null"></div>
      <div v-else class="flex flex-col space-y-4 w-full mt-2">
        <div>
          <span>{{ content }}</span>
        </div>
        <div v-if="link1">
          <nuxt-link
            :to="link1.link"
            class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489"
            >{{ link1.text }}</nuxt-link
          >
        </div>
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
    link1: {
      type: Object,
      default: () => {},
    },
    link2: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: 'Achat et location',
    },
    content: {
      type: String,
      default: 'Ofaloo',
    },
  },
  data() {
    return {
      index: 0,
      hidden: false,
      indexsub: 0,
      hiddensub: false,
      expand: false,
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
      if (newcateg < 1050) this.expand = false
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
