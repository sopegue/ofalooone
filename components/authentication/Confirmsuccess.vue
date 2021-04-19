<template>
  <div class="py-18">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Confirmation de l'adresse email
          </h4>
          <div class="w-fit appearZ">
            <span
              class="block px-5 py-0.6 border rounded border-green-600 text-green-600"
              >Votre adresse email a été confirmée avec succès √</span
            >
          </div>
          <div class="w-fit m-0-auto">
            <div class="flex align-center space-x-2 size-13 mt-5">
              <a
                href="#"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Continuer</a
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
