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
            <form @submit.prevent="signin">
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
            </form>
            <p
              v-show="mailerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter un email valide
            </p>
            <p
              v-show="unfound"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Désolé, aucun compte n'existe sous cet email
            </p>
            <p v-show="err" class="size-12 appearZ text-red-700 leading-4 pt-1">
              Désolé, une erreur est survenue
            </p>
          </div>
          <a
            class="button block btn-008489 border rounded-md flex align-center space-x-2 relative top-05x bottom-0x"
            :class="{ noclick: reseting }"
            @click.stop="signin"
          >
            <span
              class="size-13 flex items-center space-x-2 text-white font-semibold"
              ><span class="size-13 text-white font-semibold"
                >Envoyer lien de réinitialisation</span
              >
              <span v-show="reseting" class="w-fit h-fit"
                ><i class="animate-spin fas fa-circle-notch color-white"></i
              ></span> </span
          ></a>
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
      reset: false,
      notfound: false,
      error: false,
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
    reseting() {
      return this.reset === true
    },
    unfound() {
      return this.notfound === true
    },
    err() {
      return this.error === true
    },
  },
  watch: {
    email() {
      if (this.mailerror) {
        this.maierror = false
      }
      this.error = false
      this.notfound = false
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
    },
    reseting(nv, ov) {
      if (!nv && !this.err && !this.unfound && !this.mailerror) {
        sessionStorage.setItem('reset', this.email)
        location.assign('/pwd-reset-sent')
      }
    },
  },
  methods: {
    async existed() {
      return await new Promise((resolve, reject) => {
        resolve(this.$axios.$get('client-only/' + this.email))
      }).catch(() => {
        // location.assign('/')
        console.error("Oops, can't resolve your promise getting hash")
      })
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
        this.existed()
          .then((result) => {
            if (result.status === '200') {
              this.reset = false
            }
            if (result.status === '404') {
              this.notfound = true
              this.reset = false
            }
            if (result.status === '500') {
              this.error = true
              this.reset = false
            }
          })
          .catch(() => {
            this.reset = false
            this.error = true
          })
      } else {
        this.maierror = true
        this.reset = false
        return false
      }
    },
    signin() {
      this.reset = true
      if (this.infosValidated());
    },
  },
}
</script>
