<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
      @mouseleave="hide"
    >
      <div class="dropdown-trigger w71px">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center space-x-1 button bg-white border rounded-full clickable select-none"
            @mouseover="
              {
                focused = true
              }
            "
            @click="
              {
                focused = !focused
              }
            "
          >
            <p class="flex align-center">
              <img
                class="rounded-full is-36x36"
                src="https://ofaloo.herokuapp.com/images/user.png"
                alt="Placeholder image"
              />
              <svg
                class="w-4 h-4 relative transform top-03x ml-px logo-color"
                :class="{ 'color-008489s rotate-180 trans-x300': focused }"
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
            </p>
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu walele" role="menu">
        <div class="dropdown-content bg-white border">
          <nuxt-link to="/login" class="block w-fit m-0-auto"
            ><button class="btn-008489 rounded px-20 py-1 text-white size-14">
              Se connecter
            </button></nuxt-link
          >
          <span class="size-12 pt-2 w-fit m-0-auto dropdown-item logo-color"
            >Vous n'avez pas de compte ?
            <nuxt-link
              to="/register"
              class="clickable color-008489 underline-hover font-semibold"
              >Créer un compte</nuxt-link
            ></span
          >
          <hr class="dropdown-divider" />
          <span class="size-135 font-semibold dropdown-item">Mon compte</span>
          <nuxt-link
            to="/user"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              class="w-5 h-5 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path></svg
            ><span>Profil</span></nuxt-link
          >
          <nuxt-link
            to="/favoris"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click.native="hide"
            ><svg
              class="w-5 h-5 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              ></path></svg
            ><span>Enregistrés</span></nuxt-link
          >
          <hr class="dropdown-divider" />
          <nuxt-link to="/login" class="block w-fit m-0-auto"
            ><button
              class="button is-light ferfe rounded px-20 py-1 text-white size-14"
            >
              Se deconnecter
            </button></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Trouver une propriété',
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  computed: {},
  methods: {
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 3.1rem !important;
  right: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
