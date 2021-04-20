<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div
        class="dropdown-trigger w71px"
        @click="
          {
            focused = !focused
          }
        "
      >
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center space-x-1 button bg-white border rounded-full clickable select-none"
          >
            <p class="flex align-center">
              <img
                class="rounded-full is-36x36"
                src="https://ofalooback.herokuapp.com/images/4.jpg"
                alt="Image"
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
          <div v-show="$auth.loggedIn">
            <h4 class="font-semibold cursor-default size-15 logo-color px-4">
              Bienvenue,
              <span class="font-semibold size-15 logo-color">
                {{ user.name | capitalize }} !
              </span>
            </h4>
          </div>
          <div v-show="!$auth.loggedIn">
            <client-only>
              <a href="/connexion" class="block w-fit m-0-auto" @click="hide"
                ><button
                  class="btn-008489 rounded px-20 py-1 text-white size-14"
                >
                  Se connecter
                </button></a
              >
              <div class="size-12 pt-2 w-fit m-0-auto dropdown-item logo-color">
                Vous n'avez pas de compte ?
                <a
                  href="/inscription"
                  class="clickable color-008489 underline-hover font-semibold"
                  @click="hide"
                  >Créer un compte</a
                >
              </div>
            </client-only>
          </div>
          <hr class="dropdown-divider" />
          <span class="size-135 font-semibold dropdown-item">Mon compte</span>
          <a
            href="/user"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click="hide"
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
            ><span>Profil</span></a
          >
          <a
            href="/favoris"
            class="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            @click="hide"
            ><svg
              class="w-5 h-5 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              ></path></svg
            ><span>Enregistrés</span></a
          >
          <hr class="dropdown-divider" />
          <a class="block w-fit m-0-auto" @click="logout"
            ><button
              class="button is-light ferfe rounded px-20 py-1 text-white size-14"
            >
              Se deconnecter
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
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
  computed: {
    user() {
      return this.$auth.user !== null && this.$auth.user !== undefined
        ? this.$auth.user
        : { name: 'Guest' }
    },
  },
  mounted() {
    console.log(this.user)
  },
  methods: {
    hide() {
      this.focused = false
    },
    async logout() {
      this.hide()
      await this.$auth.logout().then((res) => {
        location.reload()
      })
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
