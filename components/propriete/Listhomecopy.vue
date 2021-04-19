<template>
  <div class="flex flex-col space-y-5">
    <div class="flex align-center justify-between sm:px-20 px-5">
      <h4 class="logo-color size-18 font-semibold">{{ title }}</h4>
      <a
        href="#"
        class="underline-hover text-c w-fit color-008489 block size-14"
        >Voir tout</a
      >
    </div>
    <div class="flex flex-wrap justify-center">
      <homeprop
        v-for="(property, i) of properties.data"
        :key="i"
        class="mx-5 my-5"
        :property="property"
      ></homeprop>
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
      properties: [],
      title: '',
    }
  },
  mounted() {
    this.title = this.titler
    this.fetchTitle()
  },
  // async fetch() {
  //   this.properties = await this.$axios.$get('property')
  // },
  methods: {
    async fetchTitle() {
      this.properties = await this.$axios.$get('property')
    },
  },
}
</script>

<style scoped></style>
