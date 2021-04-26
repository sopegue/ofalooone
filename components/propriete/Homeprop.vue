<template>
  <div class="prop">
    <div v-show="!dataOk"></div>
    <div
      v-if="dataOk"
      class="h-fit flex flex-col"
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
      <div
        class="flex align-center justify-between"
        :class="{ 'px-2': size <= 450 }"
      >
        <a
          :href="'/recherche?ofloowa=' + property.property.user_id"
          class="flex align-center space-x-2"
          ><img
            class="rounded-full is-40x40"
            :src="
              'https://ofalooback.herokuapp.com/storage/' + property.user_pic
            "
            alt="Image"
          />
          <span class="size-14 font-semibold">{{
            property.agence.name
          }}</span></a
        >
        <a
          v-show="property.agence.super === 'yes'"
          href="/recherche?q=super-agent"
          class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489"
          >Super agent</a
        >
      </div>
      <div class="mt-3">
        <figure class="image relative is-4by3 clickable">
          <img :src="getImgPrin" alt="Image" />
          <button
            v-if="property.links !== undefined && property.links !== null"
            class="absolute cursor-default bottom-0 right-0 mb-2 mr-2 z-10"
            title="Contient un ou plusieurs lien vidéo(s)"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="#00000041"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="#00000041"
              />
            </svg>
          </button>
          <div
            v-if="notification"
            class="absolute w-fit top-10 right-0 appearZ z-10"
          >
            <span
              class="block text-c bg-green-600 py-1.5 px-4 text-white font-semibold size-11"
              >Enregistrée √</span
            >
          </div>
          <button
            v-if="property.saved"
            class="absolute top-0 right-0 mt-2 mr-2 z-10"
            title="Retirer de la liste"
            @click.stop="desaved"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-width="1"
                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              ></path>
            </svg>
          </button>
          <button
            v-else
            class="absolute top-0 right-0 mt-2 mr-2 z-10"
            title="Enregistrer"
            @click.stop="savelist"
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
          </button>
          <a
            v-if="size <= 640"
            :href="'/propriete?wyzes=' + property.property.id"
            class="absolute top-0 bottom-0 left-0 right-0"
          ></a>
          <div
            v-show="hovered && size > 640"
            class="absolute appearZ z-0 top-0 left-0 w-full h-full bg-black-tre"
            @click="gotoprop"
          >
            <button
              class="border-none size-12 text-white px-5 pb-1.5 rounded button btn-008489 both-centers"
              @click.stop="show_quick"
            >
              Aperçu rapide
            </button>
          </div>
          <div
            v-if="property.property.sold === 'yes'"
            title="La propriété a été vendue"
            class="absolute z-10 bottom-0 left-0"
          >
            <button
              class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
            >
              Vendue
            </button>
          </div>
          <div
            v-if="property.property.rent === 'yes'"
            class="absolute z-10 bottom-0 left-0"
            title="La propriété a été mise en location"
          >
            <button
              class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
            >
              Louée
            </button>
          </div>
        </figure>
      </div>
      <div
        class="flex flex-col mt-2 clickable"
        :class="{ 'px-2.5': size <= 450 }"
        @click="gotoprop"
      >
        <div class="flex align-center justify-between">
          <h4 class="logo-color size-15 font-semibold">
            {{ property.property.type }}
          </h4>
          <div>
            <a
              v-if="property.property.proposition === 'Vente totale'"
              title="Le prix indiqué représente le montant à payer pour toute la propriété"
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >Achat total</a
            ><a
              v-if="property.property.proposition === 'Vente partielle'"
              :title="
                'Le prix indiqué représente ' +
                property.property.percentage_part.toString() +
                '%' +
                ' de la propriété (la part disponible)'
              "
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >Acheter une part ({{
                property.property.percentage_part.toString() + '%'
              }})</a
            >
            <a
              v-if="property.property.proposition === 'Location totale'"
              title="Le prix indiqué représente le montant à payer pour toute la propriété"
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >Location totale</a
            >
            <a
              v-if="property.property.proposition === 'Location partielle'"
              :title="
                'Le prix indiqué représente ' +
                property.property.percentage_part.toString() +
                '%' +
                ' de la propriété (la part disponible)'
              "
              class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
              >Louer une part ({{
                property.property.percentage_part.toString() + '%'
              }})</a
            >
          </div>
        </div>
        <div>
          <span
            v-if="property.property.price_fixed.toString() !== '0'"
            class="logo-color font-medium size-14 block over w180"
            >{{
              $linker.formatMoney(property.property.price_fixed.toString())
            }}
            FCFA<span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
              >, négociable</span
            ></span
          >
          <span
            v-else-if="
              property.property.price_min.toString() !== '0' &&
              property.property.price_max.toString() !== '0'
            "
            class="logo-color font-medium size-14 block over w180"
            >{{ $linker.formatMoney(property.property.price_min.toString()) }}
            FCFA -
            {{ $linker.formatMoney(property.property.price_max.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
              >, négociable</span
            ></span
          >
          <span
            v-else-if="property.property.price_min.toString() === '0'"
            class="logo-color font-medium size-14 block over w180"
            >Jusqu'à
            {{ $linker.formatMoney(property.property.price_max.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
              >, négociable</span
            ></span
          >
          <span v-else class="logo-color font-medium size-14 block over w180"
            >A partir de
            {{ $linker.formatMoney(property.property.price_min.toString()) }}
            FCFA
            <span
              v-if="property.property.proposition.includes('Location')"
              class="logo-color font-medium size-14"
            >
              {{ property.property.location_freq }}</span
            ><span
              v-if="property.property.negociable === 'yes'"
              class="logo-color font-medium size-14"
              >, négociable</span
            ></span
          >
        </div>
        <div class="flex align-center space-x-1 mt-1">
          <svg
            class="w-5 min-w-5 h-5 min-h-5 logo-color -ml-1"
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
          <span class="logo-color size-14 over"
            >{{ property.adresse }}, {{ property.ville }}</span
          >
        </div>
        <div class="mt-2">
          <div class="flex align-center space-x-3.5">
            <div
              v-if="property.property.bed > 0"
              :title="property.property.bed + ' pièce(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-bed"></i>
              </span>
              <span class="logo-color">{{ property.property.bed }}</span>
            </div>
            <div
              v-if="property.property.bath > 0"
              :title="property.property.bath + ' salles(s) de bain(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-shower"></i>
              </span>
              <span class="logo-color">{{ property.property.bath }}</span>
            </div>
            <div
              v-if="property.property.garage > 0"
              :title="property.property.garage + ' garage(s)'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-warehouse"></i>
              </span>
              <span class="logo-color">{{ property.property.garage }}</span>
            </div>
            <div
              v-if="property.property.taille > 0"
              :title="'La taille de la propriété'"
              class="flex align-center space-x-1.5"
            >
              <span>
                <i class="fas size-16 logo-color fa-ruler-vertical"></i>
              </span>
              <span class="logo-color">{{ property.property.taille }} m²</span>
            </div>
          </div>
        </div>
        <div class="py-2">
          <span class="color-363636 size-11">{{
            $utility.dating(
              new Date($moment(property.property.created_at).format())
            )
          }}</span>
        </div>
        <div
          v-if="
            property.property.rent === 'yes' &&
            property.property.fin_loc !== null
          "
        >
          <span class="font-semibold size-13 logo-color flex"
            ><svg
              class="mr-1.5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                stroke="#2d3748"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >Disponible à partir du
            {{ $moment(property.property.fin_loc).format('LL') }}</span
          ><br />
        </div>
      </div>
      <articlemodal
        v-if="quick"
        :property="property"
        :images="images"
        @close_quick="close_quick"
      ></articlemodal>
    </div>
  </div>
</template>

<script>
import Articlemodal from '../modal/Articlemodal.vue'
export default {
  components: { Articlemodal },
  props: {
    property: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hovered: false,
      quick: false,
      notif: false,
      images: [],
    }
  },
  computed: {
    dataOk() {
      return (
        this.property.property !== undefined && this.property.property !== null
      )
    },
    here() {
      return this.$store.state.component
    },
    notification() {
      return this.notif === true
    },
    getImgPrin() {
      for (let index = 0; index < this.property.images.length; index++) {
        const element = this.property.images[index]
        if (element.principal === 'yes')
          return 'https://ofalooback.herokuapp.com/storage/' + element.url
      }
      return (
        'https://ofalooback.herokuapp.com/storage/' +
        this.property.images[0].url
      )
    },
    size() {
      return this.$store.state.size
    },
  },
  watch: {
    here(nv, ov) {
      if (nv === this.id) {
        this.notif = true
        setTimeout(() => {
          this.notif = false
        }, 3000)
      }
    },
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    fillImages() {
      for (let index = 0; index < this.property.images.length; index++) {
        const element = this.property.images[index]
        if (element.principal === 'yes') {
          this.images.push(
            'https://ofalooback.herokuapp.com/storage/' + element.url
          )
          break
        }
      }
      for (let index = 0; index < this.property.images.length; index++) {
        const element = this.property.images[index]
        if (element.principal === 'no')
          this.images.push(
            'https://ofalooback.herokuapp.com/storage/' + element.url
          )
      }
    },
    close_quick() {
      this.quick = false
    },
    desaved() {},
    savelist() {
      if (!this.$auth.loggedIn) {
        this.$store.commit('close_quick_sign', true)
        this.$store.commit('precom', this.id)
        document.body.style = 'overflow: hidden'
      }
    },
    show_quick() {
      if (this.images.length <= 0) this.fillImages()
      this.quick = true
    },
    gotoprop() {
      location.assign('/propriete?wyzes=' + this.property.property.id)
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 940px) {
  .prop {
    width: 50% !important;
  }
}
@media screen and (max-width: 640px) {
  .prop {
    width: 100% !important;
  }
}
/* @media screen and (max-width: 967px) {
  .prop {
    width: 33.33% !important;
  }
}
@media screen and (max-width: 747px) {
  .prop {
    width: 50% !important;
  }
}
@media screen and (max-width: 480px) {
  .prop {
    width: 100% !important;
  }
} */
</style>
