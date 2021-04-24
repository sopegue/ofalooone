<template>
  <div class="flex flex-col space-y-8 bg-white pb-10">
    <div class="header-home relative w-full" :style="setheight(360)">
      <div class="absolute bgtr h-full w-full z-0"></div>
      <div class="absolute bgtr h-full w-full">
        <div>
          <div class="sm:px-10 px-4 pt-20">
            <h4 class="text-white size-64 font-semibold mb-1">Yofaloona</h4>
            <span class="block text-white leading-4 size-16"
              >Acheter et louer facilement les propriétés que vous voulez
              partout en Côte d'Ivoire.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="logo-color text-c sm:size-26 size-24 font-semibold mb-1">
        Qu'est-ce que nous offrons ?
      </h4>
      <div
        class="sm:px-10 px-4 flex pt-10"
        :class="{ 'flex-col': size < 762, 'space-x-5': size >= 762 }"
      >
        <div class="column">
          <h4 class="logo-color size-16 font-semibold mb-1">
            Rechercher une propriété
          </h4>
          <div>
            <span
              >Vous souhaitez acheter ou louer une propriété ? Avec la recherche
              avancée de Ofaloo, vous pouvez appliquer jusqu'à 6 critères
              minimum.</span
            >
          </div>
        </div>
        <svg
          v-if="size > 890"
          class="self-center"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5L20 12L13 19M5 5L12 12L5 19"
            stroke="#374151"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="column">
          <h4 class="logo-color size-16 font-semibold mb-1">
            Trouver la propriété recherchée
          </h4>
          <div>
            <span
              >Une fois la recherche effectuée, cliquez pour voir plus d'images,
              vidéos, localisations et d'informations sur les propriétés.</span
            >
          </div>
        </div>
        <svg
          v-if="size > 890"
          class="self-center"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5L20 12L13 19M5 5L12 12L5 19"
            stroke="#374151"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="column">
          <h4 class="logo-color size-16 font-semibold mb-1">
            Contacter l'agent
          </h4>
          <div>
            <span
              >Vous pouvez contacter un agent en envoyant un message à partir de
              la page de consulation d'une propriété. Votre message peut avoir
              pour object la visite de la propriété, etc.
            </span>
          </div>
        </div>
        <svg
          v-if="size > 890"
          class="self-center"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5L20 12L13 19M5 5L12 12L5 19"
            stroke="#374151"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="column">
          <h4 class="logo-color size-16 font-semibold mb-1">
            Recevoir une réponse
          </h4>
          <div>
            <span
              >L'agent de la propriété reçoit votre message et vous contacte
              dans les plus brefs délais possibles pour conclure un achat ou une
              location.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-15 pb-10 w-fit m-0-auto">
      <a
        href="/"
        class="button bg-transparent px-10 py-2 rounded border-008489ss size-12 color-008489"
        >Aller à la page d'accueil</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    size() {
      return this.$store.state.size
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px'
    },
    hideminsearch() {
      this.$store.commit('set_MinSearch', false)
    },
  },
}
</script>
<style scoped>
.header-home {
  background-image: url('https://ofalooback.herokuapp.com/images/4.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}
.bgtr {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
