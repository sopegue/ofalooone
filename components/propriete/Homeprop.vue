<template>
  <div
    class="w180ees h-fit flex flex-col"
    @mouseover="
      {
        hovered = true
      }
    "
    @mouseleave="
      {
        hovered = false
      }
    "
  >
    <div class="flex align-center justify-between">
      <nuxt-link to="#" class="flex align-center space-x-2"
        ><img
          class="rounded-full is-40x40"
          src="https://ofaloo.herokuapp.com/images/4.jpg"
          alt="Placeholder image"
        />
        <span class="size-14 font-semibold">John Wick</span></nuxt-link
      >
      <nuxt-link
        v-show="superag"
        to="#"
        class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489"
        >Super agent</nuxt-link
      >
    </div>
    <div class="mt-3">
      <figure class="image relative is-4by3">
        <img src="https://ofaloo.herokuapp.com/images/7.jpg" alt="Placeholder image" />
        <button
          class="absolute bottom-0 right-0 mb-2 mr-2 z-10"
          title="Contient une vidéo"
        >
          <svg
            class="w-7 h-7 text-white"
            fill="#00000041"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg>
          <!-- <svg
            class="w-7 h-7 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg> -->
        </button>
        <button
          class="absolute top-0 right-0 mt-2 mr-2 z-10"
          title="Enregistrer"
        >
          <svg
            class="w-7 h-7 text-white"
            fill="#00000041"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg>
          <!-- <svg
            class="w-7 h-7 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
            ></path>
          </svg> -->
        </button>
        <div
          v-show="hovered"
          class="absolute appearZ z-0 top-0 left-0 w-full h-full bg-black-tre"
        >
          <button
            class="border-none size-12 text-white px-5 pb-2 rounded button btn-008489 both-centers"
            @click="show_quick"
          >
            Aperçu rapide
          </button>
        </div>
        <div v-show="sold" class="absolute z-10 bottom-0 left-0">
          <button
            class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
          >
            Vendue
          </button>
        </div>
      </figure>
    </div>
    <div class="flex flex-col mt-2">
      <div class="flex align-center justify-between">
        <h4 class="logo-color size-15 font-semibold">{{ property }}</h4>
        <nuxt-link
          to="#"
          class="px-3 py-1 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
          >{{ types }}</nuxt-link
        >
      </div>
      <div>
        <span
          v-show="prix === 'fix' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'fix' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >100 000 000 000 FCFA</span
        >
        <span
          v-show="prix === 'min' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >A partir de 100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'min' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >A partir de 100 000 000 000 FCFA</span
        >
        <span
          v-show="prix === 'minmax' && negoc"
          class="logo-color font-medium size-14 block over w180"
          >90 000 000 FCFA - 100 000 000 000 FCFA, négociable</span
        >
        <span
          v-show="prix === 'minmax' && !negoc"
          class="logo-color font-medium size-14 block over w180"
          >90 000 000 FCFA - 100 000 000 000 FCFA</span
        >
      </div>
      <div class="flex align-center space-x-1 mt-1">
        <svg
          class="w-6 h-6 logo-color -ml-1"
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
        <span class="logo-color size-14 over">73 Gardner Street, Richmond</span>
      </div>
      <div class="mt-2">
        <img
          src="https://ofaloo.herokuapp.com/images/prop.png"
          alt="Placeholder image"
        />
      </div>
      <div class="mt-1">
        <div>
          <span class="color-363636 size-12"> Il y a 3 jours</span>
        </div>
      </div>
    </div>
    <articlemodal v-if="quick" @close_quick="close_quick"></articlemodal>
  </div>
</template>

<script>
import Articlemodal from '../modal/Articlemodal.vue'
export default {
  components: { Articlemodal },
  props: {
    superag: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    negoc: {
      type: Boolean,
      default: false,
    },
    types: {
      type: String,
      default: 'Achat total',
    },
    property: {
      type: String,
      default: 'Appartement',
    },
    prix: {
      type: String,
      default: 'fix',
    },
  },
  data() {
    return {
      hovered: false,
      quick: false,
    }
  },
  methods: {
    close_quick() {
      this.quick = false
    },
    show_quick() {
      this.quick = true
    },
  },
}
</script>

<style scoped></style>
