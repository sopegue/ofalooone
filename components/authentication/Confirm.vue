<template>
  <div class="py-10">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Confirmation de l'adresse email
          </h4>
          <div>
            <span class="logo-color"
              >Un lien de confirmation a été envoyé à l'adresse email
              <strong>{{ $auth.user.email }}</strong
              >, veuillez vérifiez votre boîte mail pour confimrer votre
              adresse.</span
            >
          </div>
          <div>
            <span class="logo-color"
              >Vous n'avez pas reçu de lien ?
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
                href="/user/parametres"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Retour</a
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
      sent: false,
      pwderr: false,
      maierror: false,
      pwdhid: true,
      token: null,
      data: null,
    }
  },
  async fetch() {
    try {
      this.token = await this.$axios.$get(
        'hash/' + this.$auth.user.id + '/' + this.$auth.user.email
      )
      if (this.token.status === '200') {
        this.data = await this.$axios.$post('sendmail', {
          email: this.$auth.user.email,
          mail: this.$linker.email(
            this.token.token,
            this.$auth.user.email,
            this.$auth.user.name
          ),
        })
      }
    } catch (error) {
      location.assign('/')
    }
  },
  computed: {
    showsent() {
      return this.sent === true
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
  mounted() {
    if (
      this.data !== null &&
      this.data.status !== undefined &&
      this.data.status !== '200'
    )
      location.assign('/')
    setInterval(() => {
      this.time--
    }, 1000)
  },
  methods: {
    async sendMail(res) {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('sendmail', {
            email: this.$auth.user.email,
            mail: this.$linker.email(
              res,
              this.$auth.user.email,
              this.$auth.user.name
            ),
          })
        )
      }).catch(() => {
        location.assign('/')
        console.error("Oops, can't resolve your promise sending mail")
      })
    },
    async getHash() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$get(
            'hash/' + this.$auth.user.id + '/' + this.$auth.user.email
          )
        )
      }).catch(() => {
        location.assign('/')
        console.error("Oops, can't resolve your promise getting hash")
      })
    },
    resend() {
      if (this.cansend) {
        this.getHash().then((res) => {
          if (res.status === '200') {
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
  },
}
</script>
