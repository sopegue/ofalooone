<template>
  <div class="py-5">
    <div v-show="load" class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Lien de réinitialisation
          </h4>
          <div>
            <span class="logo-color"
              >Un lien de réinitialisation a été envoyé à l'adresse email
              <strong>{{ email }}</strong
              >. Vérifiez votre boîte mail pour réinitialiser votre mot de
              passe.</span
            >
          </div>
          <div>
            <span class="logo-color"
              >Vous n'avez pas réçu de lien ?
              <a
                :class="{
                  'color-008489 underline-hover clickable': cansend,
                  'noclick color-363636f': !cansend,
                }"
                @click="resend"
                >Envoyer un nouveau lien</a
              ></span
            >
          </div>
          <div v-if="!cansend">
            <span class="color-363636 size-12"
              >Envoyer un nouveau lien dans {{ time }}s</span
            >
          </div>
          <div v-if="showsent" class="w-fit appearZ">
            <span
              class="block px-5 py-0.6 border rounded border-green-600 text-green-600"
              >Lien envoyé √</span
            >
          </div>
          <div class="w-fit m-0-auto pt-3">
            <div
              class="flex sm:flex-row flex-col align-center text-center sm:space-x-5 sm:space-y-0 space-y-5 size-13 mt-5"
            >
              <a
                href="/connexion"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Se connecter</a
              >
              <a
                href="/"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Aller à l'accueil</a
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
      time: 59,
      cansend: true,
      email: '',
      name: 'Utilisateur de Ofaloo',
      sent: false,
      pwderr: false,
      maierror: false,
      pwdhid: true,
      first: true,
    }
  },
  computed: {
    showsent() {
      return this.sent === true
    },
    load() {
      return this.first === false
    },
    timeisout() {
      return this.time === 0
    },
  },
  watch: {
    timeisout(nv, ov) {
      if (nv) {
        this.cansend = true
        this.time = 3600
      }
    },
  },
  beforeMount() {
    if (sessionStorage.reset) {
      this.email = sessionStorage.getItem('reset')
      this.sending()
    } else {
      this.$router.replace('/')
    }
  },
  mounted() {
    setInterval(() => {
      this.time--
    }, 1000)
  },
  methods: {
    sending() {
      this.getHash().then((res) => {
        if (res.status === '200') {
          this.name = res.name
          this.sendMail(res.token).then((res) => {
            if (res.status !== '200') location.assign('/')
            else {
              this.$emit('yes', false)
              this.first = false
            }
          })
        } else {
          location.assign('/')
        }
      })
    },
    resend() {
      if (this.cansend) {
        this.getHash().then((res) => {
          if (res.status === '200') {
            this.name = res.name
            this.sendMail(res.token).then((res) => {
              if (res.status !== '200') location.assign('/')
              this.time = 59
              this.sent = true
              setTimeout(() => {
                this.sent = false
              }, 5000)
              this.cansend = false
            })
          } else {
            location.assign('/')
          }
        })
      }
    },
    async sendMail(res) {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('sendmail/reset', {
            email: this.email,
            mail: this.$linker.reset(res, this.email, this.name),
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise sending mail")
      })
    },
    async getHash() {
      return await new Promise((resolve, reject) => {
        resolve(this.$axios.$get('hash/' + this.email))
      }).catch(() => {
        console.error("Oops, can't resolve your promise getting hash")
      })
    },
  },
}
</script>
