<template>
  <div class="py-10">
    <div
      id="contact-agent"
      class="w-full lg:w-2/5 md:w-3/5 sm:w-3/4 m-0-auto rounded bg-white"
    >
      <div class="bg-008489 px-4 py-3 rounded-tl rounded-tr">
        <h4 class="text-white size-20 font-semibold mb-1 text-c">
          Contactez Nous
        </h4>
        <span class="block px-2 sm:px-6 text-white leading-4 size-12"
          >Remplissez ce formulaire pour nous envoyer un message et nous vous
          répondrons dans les plus brefs délais possibles</span
        >
      </div>
      <div class="px-6 sm:px-10 pt-4 pb-5 flex flex-col space-y-3">
        <form class="flex flex-col space-y-3" @submit.prevent="send">
          <div class="w-full">
            <label for="username" class="size-13">Nom</label>
            <br />
            <input
              id="username"
              v-model="name"
              autocomplete="none"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
            />
          </div>
          <div class="w-full" :class="{ noclick: authmail.length > 0 }">
            <label for="email" class="size-13">Email</label>
            <br />
            <input
              id="email"
              v-model="email"
              type="text"
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
              Veuillez enter un email valide !
            </p>
          </div>
          <div
            v-show="$auth.loggedIn"
            class="w-full flex align-center space-x-2 pt-1"
          >
            <input
              id="senupd"
              v-model="authmail"
              type="checkbox"
              value="yes"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >Utiliser l'adresse email de mon compte</label
            >
          </div>
          <div class="w-full">
            <label for="phone" class="size-13">Téléphone</label>
            <br />
            <input
              id="phone"
              v-model="tel"
              autocomplete="none"
              type="tel"
              class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
            />
          </div>
          <div class="w-full">
            <label for="coment2x" class="size-14">Message</label>
            <div
              class="border rounded w-full"
              :class="{
                'border-red-700': contenterror,
                'border-green-700': content.length >= 2,
              }"
            >
              <textarea
                id="coment2x"
                v-model="content"
                wrap="hard"
                class="w-full aside noscroll toyo size-14 px-2 py-01 text-gray-700 focus:outline-none mt-1"
                placeholder="Ecrire un message"
                rows="5"
              ></textarea>
            </div>
            <p
              v-show="contenterror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez écrire un message !
            </p>
          </div>
          <p v-show="err" class="size-12 appearZ text-red-700 leading-4 pt-1">
            Oops, une erreur s'est produite pendant l'envoi du message
          </p>
          <p
            v-show="sent"
            class="size-13 appearZ text-green-700 leading-4 pt-1"
          >
            Votre message a été envoyé avec succès √
          </p>
          <button></button>
        </form>
        <div class="w-full">
          <button
            class="border-none w-full size-12 text-white px-5 pb-2 flex align-center space-x-2 rounded button btn-008489 both-centers"
            :class="{ noclick: onsent }"
            @click="send"
          >
            <span class="size-12 text-white">Envoyer</span>
            <span v-show="onsent" class="w-fit h-fit"
              ><i class="animate-spin fas fa-circle-notch color-white"></i
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authmail: [],
      email: '',
      name: '',
      tel: '',
      content: '',
      maierror: false,
      nerror: false,
      perror: false,
      cerror: false,
      error: false,
      success: false,
      sending: false,
      html: null,
    }
  },
  head() {
    return {
      title: 'Contactez-nous | Ofaloo',
    }
  },
  computed: {
    err() {
      return this.error === true
    },
    sent() {
      return this.success === true
    },
    onsent() {
      return this.sending === true
    },
    mailerror() {
      return this.maierror === true
    },
    nameerror() {
      return this.nerror === true
    },
    contenterror() {
      return this.cerror === true
    },
  },
  watch: {
    authmail(nv, ov) {
      if (nv.length > 0) {
        this.email = this.$auth.user.email
      }
    },
    email(nv, ov) {
      if (this.mailerror) {
        this.maierror = false
      }
      this.error = false
    },
    tel(newval, oldval) {
      this.error = false
      if (!newval.includes(' ')) {
        if (
          (newval.length === 1 && newval.lastIndexOf('+') === 0) ||
          (newval.length > 1 &&
            newval.lastIndexOf('+') === 0 &&
            !isNaN(newval.substr(1, newval.length - 1)) &&
            !newval.substr(1, newval.length - 1).includes('.')) ||
          (!isNaN(newval) && !newval.includes('.'))
        )
          this.tel = newval
        else this.tel = oldval
      } else this.tel = oldval
    },
    content() {
      if (this.contenterror) {
        this.cerror = false
      }
      this.error = false
    },
  },
  methods: {
    validated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      if (this.content.length >= 2) {
        this.cerror = false
      } else this.cerror = true

      return this.mailerror === false && this.contenterror === false
    },
    send() {
      this.error = false
      if (this.validated()) {
        this.sending = true
        this.html = this.$linker.admin({
          name: this.name,
          email: this.email,
          tel: this.tel,
          content: this.content,
        })
        this.sendMess()
          .then((result) => {
            this.sending = false
            if (result.status !== '200') this.error = true
            else {
              this.success = true
              this.email = ''
              this.name = ''
              this.tel = ''
              this.authmail = []
              this.content = ''
              setTimeout(() => {
                this.success = false
              }, 4000)
            }
          })
          .catch(() => {
            this.error = true
            this.sending = false
          })
      }
    },
    async sendMess() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('contactme', {
            email: this.email,
            message: this.content,
            user: this.$auth.loggedIn ? this.$auth.user.id : null,
            tel: this.tel,
            name: this.name,
            html: this.html,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise sending message")
      })
    },
  },
}
</script>

<style scoped></style>
