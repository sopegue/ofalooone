<template>
  <div class="flex flex-col space-y-6">
    <div>
      <div
        class="flex align-center justify-between space-x-2 px-2 h-16 bg-white"
        :class="{
          'border-b': size <= 500,
          rounded: size > 500,
        }"
      >
        <div>
          <button
            class="flex align-center cursor-default font-semibold size-14"
            title="Filtre"
          >
            <svg
              class="mr-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3V6C17 6.26522 16.8946 6.51957 16.7071 6.70711L12 11.4142V15C12 15.2652 11.8946 15.5196 11.7071 15.7071L9.70711 17.7071C9.42111 17.9931 8.99099 18.0787 8.61732 17.9239C8.24364 17.7691 8 17.4045 8 17V11.4142L3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6V3Z"
                fill="#2d3748"
              />
            </svg>
            Filtre
          </button>
        </div>
        <div class="flex space-x-5 align-center">
          <button
            class="border-none size-12 text-white px-5 pb-2 rounded button is-light"
            @click="reset"
          >
            Réinitialiser
          </button>
          <button
            class="border-none size-12 text-white px-5 pb-2 rounded button btn-008489"
            @click="go"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white w-full rounded p-4 flex flex-col space-y-3">
      <brand
        @part="parting"
        @location="locating"
        @finished="finished"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="2"
        :content="['Tout prix']"
        :title="'Prix'"
        @gone="gone"
        @there="there"
        @done="done"
      ></brand>
      <brand
        v-show="has_location"
        number="2"
        :content="[
          'Tous types',
          'Par jour',
          'Par semaine',
          'Par mois',
          'Par trimestre',
          'Par semestre',
          'Par année',
        ]"
        :title="'Type de location'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        v-show="has_part"
        number="2"
        :content="[
          'Toute part',
          '5% et plus',
          '10% et plus',
          '20% et plus',
          '40% et plus',
          '80% et plus',
        ]"
        :title="'Part'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        v-show="has_location"
        number="2"
        :content="[
          'Tous temps',
          'Maintenant',
          'Cette semaine',
          'La semaine prochaine',
          'Le mois prochain',
        ]"
        :title="'Date d\'arrivée'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        :title="'Types de propriétés'"
        :content="[
          'Tous types',
          'Studio',
          'Maison',
          'Appartement',
          'Villa',
          'Haut-Standing',
          'Bureau',
          'Magasin',
          'Terrain',
        ]"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="1"
        :content="['Tous types', 'Masquer vendues et louées']"
        :title="'Disponibilité'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="2"
        :content="[
          'Tous types',
          '1 pièce et plus',
          '2 pièces et plus',
          '3 pièces et plus',
          '4 pièces et plus',
          '5 pièces et plus',
        ]"
        :title="'Pièces'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="2"
        :content="[
          'Tous types',
          '1 salle de bain et plus',
          '2 salles de bains et plus',
          '3 salles de bains et plus',
          '4 salles de bains et plus',
          '5 salles de bains et plus',
        ]"
        :title="'Salles de bains'"
        @there="there"
        @done="done"
      ></brand>
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
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="2"
        :content="['Tous types']"
        :title="'Taille (m²)'"
        @there="there"
        @done="done"
        @gone="gone"
      ></brand>
      <brand
        number="1"
        :content="['Tous types', 'Jacuzzi']"
        :title="'Indoor'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="1"
        :content="['Tous types', 'Balcon']"
        :title="'Outdoor'"
        @there="there"
        @done="done"
      ></brand>
      <brand
        number="1"
        :content="['Tous types', 'Climatiseur']"
        :title="'Contrôle d\'énergie'"
        @there="there"
        @done="done"
      ></brand>
    </div>
    <div
      class="flex align-center justify-between space-x-2 px-5 h-16 bg-white"
      :class="{
        'border-b border-t': size <= 500,
        rounded: size > 500,
      }"
    >
      <button
        class="border-none size-12 text-white px-10 pb-2 rounded button is-light"
        @click="reset"
      >
        Réinitialiser
      </button>
      <button
        class="border-none size-12 text-white px-8 pb-2 rounded button btn-008489"
        @click="go"
      >
        Appliquer
      </button>
    </div>
    <div
      class="flex align-center w-full justify-between h-16 bg-white"
      :class="{
        'sticky top-12xss': size >= 1100,
        'border-t': size <= 500,
        rounded: size > 500,
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
  data() {
    return {
      part: false,
      location: false,
      howmuch: 0,
      current: 0,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    has_part() {
      return this.part === true
    },
    has_location() {
      return this.location === true
    },
    cur() {
      return this.current
    },
    much() {
      return this.howmuch
    },
  },
  watch: {
    cur(nv, ov) {
      if (nv >= this.much) {
        this.current = 0
        this.$emit('resetdone')
        this.$store.commit('set_Reseting', false)
      }
    },
  },
  methods: {
    parting(val) {
      this.part = val
    },
    locating(val) {
      this.location = val
    },
    finished(val) {
      this.$emit('finished', true)
    },
    reset() {
      this.$store.commit('set_Reseting', true)
    },
    go() {
      if (sessionStorage.sort) sessionStorage.removeItem('sort')
      if (sessionStorage.retrieved) sessionStorage.removeItem('retrieved')
      this.$emit('go')
    },
    gone(val) {
      if (sessionStorage.sort) sessionStorage.removeItem('sort')
      if (sessionStorage.retrieved) sessionStorage.removeItem('retrieved')
      this.$emit('going', val)
    },
    there() {
      this.howmuch++
    },
    done() {
      this.current++
    },
  },
}
</script>

<style scoped></style>
