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
    <div v-if="dataOk" class="pb-1.5">
      <imges :data="properties.data"></imges>
    </div>
  </div>
</template>

<script>
import Imges from './Imges.vue'
export default {
  components: { Imges },
  props: {
    title: {
      type: String,
      default: "D'autres propriétés du même agent",
    },
    ag: {
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
      ok: false,
      viewed: [],
    }
  },
  async fetch() {
    try {
      this.properties = await this.$axios.$get(
        (this.$auth.loggedIn ? 'aproperties' : 'properties') +
          '/villes/' +
          this.ville +
          '/' +
          this.ag
      )
      if (this.properties === null) {
        this.properties = { data: [] }
      }
      this.ok = true
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    okay() {
      return this.ok === true
    },
    dataOk() {
      return this.properties !== null && this.properties.data !== undefined
    },
  },
  mounted() {
    this.$emit('loaded')
  },
}
</script>

<style scoped></style>
