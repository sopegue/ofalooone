<template>
  <div class="py-10">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Réinitialiser le mot de passe
          </h4>
          <div class="w-full">
            <label for="username" class="size-14">Email</label>
            <br />
            <input
              id="username"
              v-model="email"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
              :class="{
                'border-red-700': mailerror,
                'border-green-700': $linker.emailValidated(email),
              }"
            />
            <p
              v-show="mailerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter un email valide
            </p>
          </div>
          <a
            class="button block btn-008489 border rounded-md flex align-center space-x-2 relative top-05x bottom-0x"
            @click="signin"
          >
            <span class="size-13 text-white font-semibold"
              >Envoyer lien de réinitialisation</span
            ></a
          >
          <div class="w-fit m-0-auto pt-3">
            <div class="flex align-center text-center space-x-2 size-13 mt-5">
              <a href="/connexion" class="color-008489 underline-hover"
                >Se connecter</a
              >
              <span>|</span>
              <a href="/inscription" class="color-008489 underline-hover"
                >Créer un compte</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwd: '',
      email: '',
      pwderr: false,
      maierror: false,
      pwdhid: true,
    }
  },
  computed: {
    pwdhidden() {
      return this.pwdhid === true
    },
    passerror() {
      return this.pwderr === true
    },
    mailerror() {
      return this.maierror === true
    },
  },
  watch: {
    email() {
      if (this.mailerror) {
        this.maierror = false
      }
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
    },
  },
  methods: {
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      return this.mailerror === false
    },
    signin() {
      if (this.infosValidated()) location.assign('/pwd-reset-sent')
    },
  },
}
</script>
