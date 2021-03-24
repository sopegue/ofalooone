<template>
  <div
    class="flex flex-col space-y-6"
    :class="{
      w360z: size >= 1150,
    }"
  >
    <div>
      <div
        class="flex align-center justify-between space-x-2 px-2 h-16 rounded bg-white"
      >
        <div>
          <button
            class="flex align-center font-semibold size-14"
            title="Enregistrer"
          >
            <svg
              class="w-7 h-7 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
            Filtre
          </button>
        </div>
        <div class="flex space-x-5 align-center">
          <button
            class="border-none size-12 text-white px-5 pb-2 rounded button is-light"
          >
            Effacer
          </button>
          <button
            class="border-none size-12 text-white px-5 pb-2 rounded button btn-008489"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white w-full rounded p-4 flex flex-col space-y-3">
      <brand></brand>
      <brand
        number="2"
        :content="[
          'Tous temps',
          'Maintenant',
          'Cette semaine',
          'La semaine prochaine',
          'Le mois prochain',
        ]"
        :title="'Date d\'arrivée'"
      ></brand>
      <brand
        :title="'Types de propriétés'"
        :content="[
          'Tous types',
          'Maison',
          'Appartement',
          'Villa',
          'Haut-Standing',
          'Bureau',
          'Magasin',
          'Terrain',
        ]"
      ></brand>
      <brand
        number="2"
        :content="[
          'Tous types',
          'Studio',
          '1 pièce et plus',
          '2 pièces et plus',
          '3 pièces et plus',
          '4 pièces et plus',
          '5 pièces et plus',
        ]"
        :title="'Pièces'"
      ></brand>
      <brand number="2" :content="['Tous types']" :title="'Prix'"></brand>
      <brand
        number="2"
        :content="[
          'Tous types',
          '1 garage et plus',
          '2 garages et plus',
          '3 garages et plus',
          '4 garages et plus',
          '5 garages et plus',
        ]"
        :title="'Garages'"
      ></brand>
      <brand
        number="2"
        :content="[
          'Tous types',
          'Entre 20 et 100 m²',
          'Entre 100 et 200 m²',
          'Entre 200 et 500 m²',
          'Entre 500 et 1000 m²',
        ]"
        :title="'Taille (m²)'"
      ></brand>
      <brand
        number="3"
        :content="['Terrasse', 'Cours', 'Terrain de foot']"
        :title="'Indoor'"
      ></brand>
      <brand
        number="3"
        :content="['Portail', 'Gazon', 'Terrain rouge']"
        :title="'Outdoor'"
      ></brand>
      <brand
        number="3"
        :content="['Portail', 'Gazon', 'Terrain rouge']"
        :title="'Contrôle d\'énergie'"
      ></brand>
    </div>
    <div
      class="flex align-center justify-between space-x-2 px-5 h-16 rounded bg-white"
    >
      <button
        class="border-none size-12 text-white px-10 pb-2 rounded button is-light"
      >
        Effacer
      </button>
      <button
        class="border-none size-12 text-white px-8 pb-2 rounded button btn-008489"
      >
        Appliquer
      </button>
    </div>
    <div
      class="flex align-center w-full justify-between h-16 rounded bg-white"
      :class="{
        'sticky top-12xss': size >= 1100,
      }"
    >
      <div class="pl-3">
        <h4 class="logo-color block size-14 font-semibold">
          Vendez et louez vos propriétés
        </h4>
        <span class="logo-color size-14">Devenir agent sur Ofaloo</span>
      </div>
      <div>
        <button class="button no-outlines border-transparent">
          <svg
            class="w-9 h-9 transform -rotate-90 logo-color"
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
        </button>
      </div>
    </div>
    <!-- <div
      :class="{
        'sticky top-12xssz h-64 w-full bg-white rounded': size >= 1100,
      }"
    ></div> -->
  </div>
</template>

<script>
import Brand from './Brand.vue'
export default {
  components: { Brand },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
