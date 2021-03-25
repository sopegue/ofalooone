<template>
  <div
    class="z-10x wsearch m-0-auto pt-28"
    :class="{
      'wsearch-agent': activesearch === 'Agent',
      'wsearch-location': activesearch === 'Louer',
    }"
  >
    <div class="flex align-center space-x-2">
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white py-2x size-13 font-semibold"
        :class="{
          'adv-active': activesearch === 'Acheter',
          'w-full': size <= 500,
        }"
        @click="
          {
            activesearch = 'Acheter'
          }
        "
      >
        Acheter
      </button>
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white size-13 py-2x font-semibold"
        :class="{
          'adv-active': activesearch === 'Louer',
          'w-full': size <= 500,
        }"
        @click="
          {
            activesearch = 'Louer'
          }
        "
      >
        Louer
      </button>
      <button
        class="btn-adv button border-none rounded-tl rounded-tr px-10 text-white size-13 py-2x font-semibold"
        :class="{
          'adv-active': activesearch === 'Agent',
          'w-full': size <= 500,
        }"
        @click="
          {
            activesearch = 'Agent'
          }
        "
      >
        Agent
      </button>
    </div>
    <div class="relative w-full hsearch btn-adv rounded-br rounded-bl">
      <div class="absolute bgtr h-full w-full z-10"></div>
      <div
        class="z-12 relative w-full px-6 pt-5"
        :class="{
          'pb-6': activesearch === 'Agent',
          'pb-2': activesearch !== 'Agent',
        }"
      >
        <h4 v-show="activesearch === 'Acheter'" class="size-18 text-white mb-3">
          Trouver une propriété à acheter
        </h4>
        <h4 v-show="activesearch === 'Louer'" class="size-18 text-white mb-3">
          Trouver une propriété à louer
        </h4>
        <h4 v-show="activesearch === 'Agent'" class="size-18 text-white mb-3">
          Trouver une propriété par agent
        </h4>
        <div class="flex align-center hsin w-full">
          <div
            class="relative flex align-center w-full h-full rounded-tl rounded-bl"
          >
            <div
              v-show="inputfocused"
              class="rounded-bl rounded-br bg-white h-64 w-full absolute z-12 top-0 mt-10"
            ></div>
            <svg
              class="w-6 h-6 logo-color absolute left-0 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              class="w-full h-full outline-none pl-12 size-17 bg-white rounded-tl rounded-bl"
              type="search"
              :placeholder="
                activesearch === 'Agent'
                  ? 'Rechercher une propriété par agent...'
                  : 'Rechercher par ville, quartier, code postal...'
              "
              @focus="
                {
                  inputfocused = true
                }
              "
              @blur="
                {
                  inputfocused = false
                }
              "
            />
          </div>
          <button
            class="h-full button btn-008489 rounded-tr rounded-br text-white size-13 font-semibold"
            :class="{ 'px-6': size > 500, 'px-3': size <= 500 }"
            @click="$router.push('/recherche')"
          >
            Rechercher
          </button>
        </div>
        <div
          v-show="activesearch === 'Acheter' || activesearch === 'Louer'"
          class="flex align-center flex-wrap pt-2"
        >
          <optionadvanced
            v-show="activesearch === 'Acheter'"
            :left="true"
            :what="'achat'"
            :currencies="[
              'Tous types d\'achat',
              'Achat total',
              'Acheter une part',
            ]"
          ></optionadvanced>
          <optionadvanced
            v-show="activesearch === 'Louer'"
            :left="true"
            :what="'achat'"
            :currencies="[
              'Tous types de location',
              'Location totale',
              'Louer une part',
            ]"
          ></optionadvanced
          ><optionadvanced
            :what="'type'"
            :currencies="[
              'Tous types de propriétés',
              'Maison',
              'Appartement',
              'Villa',
              'Haut-Standing',
              'Bureau',
              'Magasin',
              'Terrain',
            ]"
          ></optionadvanced
          ><optionadvanced
            :what="'bed'"
            :currencies="[
              'Tous types de pièces',
              'Studio',
              '1 pièce et plus',
              '2 pièces et plus',
              '3 pièces et plus',
              '4 pièces et plus',
              '5 pièces et plus',
            ]"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Acheter'"
            :what="'price'"
            :currencies="[
              'Tous types de prix',
              '1 000 000 FCFA et plus',
              '10 000 000 FCFA et plus',
              '15 000 000 FCFA et plus',
              '30 000 000 FCFA et plus',
              '50 000 000 FCFA et plus',
              '100 000 000 FCFA et plus',
            ]"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Louer'"
            :what="'price'"
            :currencies="[
              'Tous types de prix',
              '50 000 FCFA et plus',
              '100 000 FCFA et plus',
              '250 000 FCFA et plus',
              '500 000 FCFA et plus',
              '1 000 000 FCFA et plus',
            ]"
          ></optionadvanced
          ><optionadvanced
            v-show="activesearch === 'Louer' || activesearch === 'Acheter'"
            :what="'size'"
            :currencies="[
              'Tous types de taille',
              'Entre 100 m² et 500 m²',
              'Entre 500 m² et 1000 m²',
              'Entre 1000 m² et 5000 m²',
            ]"
          ></optionadvanced>
          <optionadvanced
            v-show="activesearch === 'Acheter'"
            :what="'garage'"
            :currencies="[
              'Tous types de garages',
              '1 garage',
              '2 garages',
              '3 garages',
              '4 garages',
              '5 garages',
              'Entre 5 et 10 garages',
            ]"
          ></optionadvanced>
          <optionadvanced
            v-show="activesearch === 'Louer'"
            :what="'date'"
            :currencies="[
              'Tous temps',
              'Maintenant',
              'Cette semaine',
              'La semaine prochaine',
              'Le mois prochain',
            ]"
          ></optionadvanced>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Optionadvanced from '../dropdown/Optionadvanced'
export default {
  components: { Optionadvanced },
  data() {
    return {
      activesearch: 'Acheter',
      inputfocused: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped>
.wsearch {
  max-width: 1120px;
}
.wsearch-agent {
  max-width: 1024px !important;
}
.wsearch-location {
  max-width: 1180px !important;
}
@media screen and (max-width: 1110px) {
  .wsearch {
    width: 100% !important;
  }
}
.hsearch {
  height: auto;
}
.hsin {
  height: 48px;
}
</style>
