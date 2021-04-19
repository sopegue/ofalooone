<template>
  <div v-if="erroring" class="py-4 text-c">
    Oops, erreur pendant chargement des propriétés.
  </div>
  <p v-else-if="$fetchState.pending" class="py-4 text-c">
    Chargement des propriétés
  </p>
  <p v-else-if="$fetchState.error" class="py-4 text-c">
    Erreur pendant chargement des propriétés
  </p>
  <div
    v-else-if="dataOk"
    class="flex flex-col space-y-5"
    :class="{ 'px-10': size > 450, 'px-0': size <= 450 }"
  >
    <div class="flex align-center justify-between px-3">
      <h4 class="logo-color size-18 font-semibold">{{ title }}</h4>
      <a
        href="#"
        class="underline-hover text-c w-fit color-008489 block size-14"
        >Voir tout</a
      >
    </div>
    <div>
      <div class="flex flex-wrap">
        <homeprop
          v-for="(property, i) of properties.data"
          :key="i"
          class="column is-one-quarters"
          :class="{ 'px-0': size <= 450 }"
          :property="property"
        ></homeprop>
      </div>
    </div>
    <div class="w-full">
      <a
        href="#"
        class="button block w-fit m-0-auto bg-transparent px-5 py-2 rounded border-008489ss size-13 color-008489"
        >Voir plus de
        <span class="transform lowercase size-13 color-008489">{{
          title
        }}</span></a
      >
    </div>
  </div>
</template>

<script>
import Homeprop from '~/components/propriete/Homeprop.vue'

export default {
  components: { Homeprop },
  props: {
    titler: {
      type: String,
      default: 'Appartement',
    },
  },
  data() {
    return {
      properties: undefined,
      title: '',
      error: false,
    }
  },
  async fetch() {
    this.title = this.titler
    try {
      this.properties = await fetch(
        'https://ofalooback.herokuapp.com/api/properties/bytype/' + this.titler
      ).then((res) => res.json())
      this.error = false
    } catch (th) {
      this.error = true
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    erroring() {
      return this.error === true
    },
    dataOk() {
      return (
        this.properties !== undefined &&
        this.properties.data !== null &&
        this.properties.data !== undefined
      )
    },
    // fetcherror() {
    //   return this.$fetchState.error !== null
    // },
  },
  // watch: {
  //   fetcherror(nv, ov) {
  //     if (nv !== null) location.assign('/')
  //   },
  // },
  mounted() {
    this.title = this.titler
    // this.fetchTitle()
  },
  methods: {
    // async fetchTitle() {
    //   this.properties = await this.$axios.$post('properties/bytype', {
    //     type: this.title,
    //   })
    // },
  },
}
</script>

<style scoped></style>
