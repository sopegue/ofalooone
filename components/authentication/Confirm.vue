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
              <strong>yayasopeguesoro@gmail.com</strong>, verifiez votre boîte
              mail pour confimrer votre adresse.</span
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
                >Renvoyer le lien</a
              ></span
            >
          </div>
          <div v-if="!cansend">
            <span class="color-363636 size-12">Renvoyer dans {{ time }}s</span>
          </div>
          <div v-if="showsent" class="w-fit appearZ">
            <span
              class="block px-5 py-0.6 border rounded border-green-600 text-green-600"
              >Lien renvoyé √</span
            >
          </div>
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
      time: 59,
      cansend: true,
      email: '',
      sent: false,
      pwderr: false,
      maierror: false,
      pwdhid: true,
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
    setInterval(() => {
      this.time--
    }, 1000)
  },
  methods: {
    resend() {
      if (this.cansend) {
        this.time = 59
        this.sent = true
        setTimeout(() => {
          this.sent = false
        }, 5000)
        this.cansend = false
      }
    },
  },
}
</script>
