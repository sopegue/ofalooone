<template>
  <div>
    <div v-if="okay" class="pb-1 pt-2.5">
      <h4
        v-if="title === 'Propriétés à'"
        class="logo-color size-16 font-semibold"
      >
        {{ title }} {{ ville }}
      </h4>
      <h4 v-else class="logo-color size-16 font-semibold">
        {{ title }}
      </h4>
    </div>
    <div class="pb-1.5">
      <imgs :data="datas"></imgs>
    </div>
  </div>
</template>

<script>
import Imgs from './Imgs.vue'
export default {
  components: { Imgs },
  props: {
    title: {
      type: String,
      default: "D'autres propriétés du même agent",
    },
    ag: {
      type: Number,
      default: -1,
    },
    exclude: {
      type: Boolean,
      default: false,
    },
    toexclude: {
      type: Number,
      default: -1,
    },
    ville: {
      type: String,
      default: 'Abidjan',
    },
  },
  data() {
    return {
      properties: null,
      viewed: [],
      ok: false,
    }
  },
  async fetch() {
    try {
      if (this.title === "D'autres propriétés du même agent") {
        this.properties = await fetch(
          'https://ofalooback.herokuapp.com/api/properties/ag/' +
            this.ag +
            '/' +
            this.toexclude
        ).then((res) => res.json())
        this.ok = true
      }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    okay() {
      return this.ok === true
    },
    datas() {
      return this.properties !== null &&
        this.properties !== undefined &&
        this.properties.data !== undefined &&
        this.properties.data.length > 0
        ? this.properties.data
        : []
    },
  },
  beforeMount() {
    if (this.title === 'Récemment consultées') {
      this.checkViewed()
    }
  },
  methods: {
    async checkViewed() {
      this.viewed = await JSON.parse(localStorage.getItem('viewed'))
      this.getViewed()
        .then((res) => {
          this.properties = res
          this.$emit('loaded')
          this.ok = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getViewed() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('properties/viewed', {
            viewed: this.viewed,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise viewing")
      })
    },
  },
}
</script>

<style scoped></style>
