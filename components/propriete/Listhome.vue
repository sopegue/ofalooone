<template>
  <div class="flex flex-col space-y-5">
    <div class="flex align-center justify-between sm:px-20 px-5">
      <h4 class="logo-color size-18 font-semibold">{{ property }}</h4>
      <nuxt-link
        to="#"
        class="underline-hover text-c w-fit color-008489 block size-14"
        >Voir tout</nuxt-link
      >
    </div>
    <div class="flex flex-wrap justify-center">
      <homeprop class="mx-5 my-5" :property="property" :sold="true"></homeprop>
      <homeprop
        class="mx-5 my-5"
        :property="property"
        :superag="true"
      ></homeprop>
      <homeprop class="mx-5 my-5" :property="property" :negoc="true"></homeprop>
      <homeprop
        class="mx-5 my-5"
        :property="property"
        :types="'Louer une part'"
      ></homeprop>
      <homeprop class="mx-5 my-5" :property="property"></homeprop>
      <homeprop
        class="mx-5 my-5"
        :property="property"
        :prix="'minmax'"
      ></homeprop>
    </div>
    <div class="w-full">
      <nuxt-link
        to="#"
        class="button block w-fit m-0-auto bg-transparent px-5 py-2 rounded border-008489ss size-13 color-008489"
        >Voir plus de
        <span class="transform lowercase size-13 color-008489">{{
          property
        }}</span></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Homeprop from '~/components/propriete/Homeprop.vue'

export default {
  components: { Homeprop },
  props: {
    property: {
      type: String,
      default: 'Appartement',
    },
  },
}
</script>

<style scoped></style>
