<template>
  <div
    v-if="need && !loading"
    class="sm:px-20 px-6 sticky appearyb z-16 bottom-0 py-4 w-full bg-white shadow flex border-t"
    :class="{
      'items-center space-x-20 justify-between': size > 840,
      'flex-col space-y-3': size <= 840,
    }"
  >
    <div class="flex flex-col space-y-1">
      <div class="inline-block">
        <span class="inline-block size-16"
          >En poursuivant votre navigation sur
          <span class="font-semibold size-16">ofaloo.com</span>, vous acceptez
          l’utilisation de cookies qui permettront d'assurer et améliorer le bon
          fonctionnement du site.
          <a
            href="/politique-confidentialite#cookies"
            class="color-008489 underline inline-block size-16"
            >Plus d'informations</a
          >
          <!-- <a
            href="/condition-utilisation"
            class="color-008489 underline inline-block"
            >Conditions d'utilisations</a
          >
          <a
            href="/politique-confidentialite"
            class="color-008489 underline inline-block"
            >Politique de confidentialité</a
          > --></span
        >
      </div>
    </div>
    <div class="flex items-center space-x-6">
      <button class="button btn-008489 px-6 rounded text-white" @click="accept">
        Accepter
      </button>
      <button
        class="button is-light px-6 rounded flex align-center"
        @click="goon"
      >
        <span class="flex align-center"
          ><span>Continuer sans accepter</span>
          <svg
            class="w-4 h-4 mt-0.8 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path></svg
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: false,
    }
  },
  computed: {
    loading() {
      return this.$store.state.domloading === true
    },
    size() {
      return this.$store.state.size
    },
    need() {
      return this.cookie === false
    },
  },
  mounted() {
    this.checkCookies()
  },
  methods: {
    checkCookies() {
      if (localStorage.cookies) {
        const data = localStorage.getItem('cookies')
        if (data === 'approved' || data === 'unapproved') {
          this.cookie = true
        } else {
          this.cookie = false
        }
      }
    },
    goon() {
      if (localStorage.cookies) localStorage.removeItem('cookies')
      localStorage.setItem('cookies', 'unapproved')
      this.cookie = true
    },
    accept() {
      if (localStorage.cookies) localStorage.removeItem('cookies')
      localStorage.setItem('cookies', 'approved')
      this.cookie = true
    },
  },
}
</script>

<style scoped></style>
