<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Mes informations
    </h4>
    <div class="w-full pt-4 flex flex-col space-y-2">
      <div class="flex flex-wrap">
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="email" class="size-13">Email</label>
          <br />
          <input
            id="email"
            v-model="email"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
            :class="{
              'border-red-700': mailerror,
            }"
          />
          <p
            v-show="mailerror"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Veuillez enter un email valide !
          </p>
          <p
            v-show="liverror || noliverror"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Désolé, cette adresse email est déjà utilisée !
          </p>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="username" class="size-13">Nom</label>
          <br />
          <input
            id="username"
            v-model="name"
            autocomplete="none"
            type="text"
            class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            :class="{
              'border-red-700': noname,
            }"
          />
          <p
            v-show="noname"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Veuillez enter votre nom s'il vous plaît
          </p>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="pre" class="size-13">Prénom</label>
          <br />
          <input
            id="pre"
            v-model="surname"
            autocomplete="none"
            type="text"
            class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
          />
          <p
            v-show="invalidsurname"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Veuillez enter un prénom valide
          </p>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phone" class="size-13">Téléphone</label>
          <br />
          <input
            id="phone"
            v-model="phone"
            type="tel"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phoned" class="size-13">Adresse</label>
          <br />
          <input
            id="phoned"
            v-model="adresse"
            type="adress"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="request" class="size-14">Pays de résidence</label>
          <br />
          <delcountryus @ctry="payser"></delcountryus>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phonedd" class="size-13">Ville</label>
          <br />
          <input
            id="phonedd"
            v-model="ville"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phognedd" class="size-13">Code postal</label>
          <br />
          <input
            id="phognedd"
            v-model="cp"
            type="text"
            autocomplete="none"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
      </div>
      <div
        class="pt-3 sm:pb-5 pb-0 w-fit flex sm:flex-row flex-col sm:space-y-0 space-y-3 sm:items-center sm:space-x-4"
      >
        <button
          class="border-none size-12 m-0-auto w-fit text-white px-10 pb-1.5 rounded button btn-008489"
          :class="{
            'noclick bg-gray-800': creating,
            'btn-008489': !creating,
          }"
          @click="signup"
        >
          Mettra à jour mes données
        </button>
        <div v-if="mod" class="w-fit appearZ">
          <span
            class="block size-13 px-5 py-1 h-full color-white border rounded bg-green-600 text-green-600"
            >Enregistré √</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Delcountryus from '~/components/dropdown/Delcountryus.vue'
export default {
  components: { Delcountryus },
  data() {
    return {
      pwd: '',
      pwdcf: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      adresse: '',
      pays: '--Choisir un pays--',
      ville: '',
      cp: '',

      timestamp: 0,

      pwdandcf: false,
      accounting: false,
      livemailtaken: false,
      mailtaken: false,

      pwderr: false,
      pwdcferr: false,
      maierror: false,
      nameerror: false,
      surnameerror: false,
      pwdhid: true,
      notpwdok: false,
      success: false,

      wenwrong: false,
      checkletter: [],
    }
  },
  head() {
    return {
      title: 'Mon compte - ' + this.$auth.user.email + ' | Ofaloo',
    }
  },
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
    didpwdunmatch() {
      return this.notpwdok === true
    },
    creating() {
      return this.accounting === true
    },
    mod() {
      return this.success === true
    },
    samepwd() {
      return (
        this.$linker.pwdValidated(this.pwd) &&
        this.$linker.pwdValidated(this.pwdcf) &&
        this.pwd === this.pwdcf
      )
    },
    pwdhidden() {
      return this.pwdhid === true
    },
    passcferror() {
      return this.pwdcferr === true
    },
    liverror() {
      return this.livemailtaken === true
    },
    noliverror() {
      return this.mailtaken === true
    },
    passerror() {
      return this.pwderr === true
    },
    mailerror() {
      return this.maierror === true
    },
    noname() {
      return this.nameerror === true
    },
    invalidsurname() {
      return this.surnameerror === true
    },
  },
  watch: {
    cp(nv, ov) {
      if (this.$linker.isNumber(nv)) this.cp = nv
      else this.cp = ov
    },
    email(nv, ov) {
      if (this.mailerror || this.livemailtaken || this.mailtaken) {
        this.maierror = false
        this.livemailtaken = false
        this.mailtaken = false
      }
      if (this.timestamp === 0 || Date.now() - this.timestamp > 200) {
        this.timestamp = Date.now()
        this.pendingmail()
      }
    },
    checkletter(nv, ov) {
      if (nv.length > 1) {
        nv.splice(0, 1)
      }
    },
    name() {
      if (this.nameerror) {
        this.nameerror = false
      }
    },
    surname() {
      if (this.surnameerror) {
        this.surnameerror = false
      }
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
      this.notpwdok = false
    },
    phone(newval, oldval) {
      if (!newval.includes(' ')) {
        if (
          (newval.length === 1 && newval.lastIndexOf('+') === 0) ||
          (newval.length > 1 &&
            newval.lastIndexOf('+') === 0 &&
            !isNaN(newval.substr(1, newval.length - 1)) &&
            !newval.substr(1, newval.length - 1).includes('.')) ||
          (!isNaN(newval) && !newval.includes('.'))
        )
          this.phone = newval
        else this.phone = oldval
      } else this.phone = oldval
    },
    pwdcf(newval, oldval) {
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
      }
    },
  },
  fetchOnServer: false,
  beforeMount() {
    this.serve()
  },
  methods: {
    serve() {
      this.email = this.$auth.user.email
      this.name = this.$auth.user.name
      this.surname =
        this.$auth.user.surname === null ||
        this.$auth.user.surname === undefined
          ? ''
          : this.$auth.user.surname
      this.phone =
        this.$auth.user.phone === null || this.$auth.user.phone === undefined
          ? ''
          : this.$auth.user.phone
      if (
        this.$auth.user.adresse !== null &&
        this.$auth.user.adresse !== undefined
      ) {
        this.adresse =
          this.$auth.user.adresse.adresse === null ||
          this.$auth.user.adresse.adresse === undefined
            ? ''
            : this.$auth.user.adresse.adresse
        this.ville =
          this.$auth.user.adresse.ville === null ||
          this.$auth.user.adresse.ville === undefined
            ? ''
            : this.$auth.user.adresse.ville
        this.cp =
          this.$auth.user.adresse.cp === null ||
          this.$auth.user.adresse.cp === undefined
            ? ''
            : this.$auth.user.adresse.cp
      }
    },
    payser(val) {
      this.pays = val
    },
    async freemail() {
      const taken = await this.$axios.$post('client/existence/user', {
        email: this.email,
        current: this.$auth.user.email,
      })
      if (taken.status === 'taken') {
        this.mailtaken = true
      } else if (taken.status === 'free') {
        this.mailtaken = false
      } else this.mailtaken = true
    },
    async pendingmail() {
      if (this.$linker.emailValidated(this.email)) {
        const taken = await this.$axios.$post('client/existence/user', {
          email: this.email,
          current: this.$auth.user.email,
        })
        if (taken.status === 'taken') {
          this.livemailtaken = true
        } else this.livemailtaken = false
      } else this.livemailtaken = false
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.freemail()
        this.maierror = false
      } else this.maierror = true

      if (this.$linker.pwdValidated(this.pwd)) {
        this.pwderr = false
      } else this.pwderr = true

      if (this.$linker.pwdValidated(this.pwd) && this.samepwd) {
        this.notpwdok = false
      } else if (this.$linker.pwdValidated(this.pwd) && !this.samepwd)
        this.notpwdok = true

      if (this.name.length > 1 && this.$linker.onlyLetters(this.name)) {
        this.nameerror = false
      } else this.nameerror = true

      if (this.surname.length > 1 && this.$linker.onlyLetters(this.surname)) {
        this.surnameerror = false
      } else if (this.surname.length <= 0) this.surnameerror = false
      else this.surnameerror = true
      return (
        this.mailerror === false &&
        this.noname === false &&
        this.mailtaken === false &&
        this.surnameerror === false
      )
    },
    async signup() {
      let time
      const form = new FormData()
      if (this.infosValidated()) {
        this.accounting = true
        form.append('id', this.$auth.user.id)
        form.append('email', this.email)
        form.append('current', this.$auth.user.email)
        form.append('name', this.name)

        form.append('surname', this.surname)

        form.append('phone', this.phone)

        form.append('adresse', this.adresse)

        if (this.pays === '--Choisir un pays--') form.append('pays', '')
        else form.append('pays', this.pays)

        form.append('ville', this.ville)

        form.append('cp', this.cp)

        const data = await this.$axios.$post('client/infos/update', form)
        // console.log(data)
        if (data.status === '201') {
          this.success = false
          clearTimeout(time)
          // commit account created
          // this.resetInfos()
          this.mailtaken = false
          this.wenwrong = false
          this.success = true
          this.accounting = false
          await this.$auth.fetchUser()
          time = setTimeout(() => {
            this.success = false
          }, 3000)
        }
        if (data.status === '500') {
          this.accounting = false
          this.wenwrong = true
          this.mailtaken = false
          // commit account not created
        }
        if (data.status === '200') {
          this.accounting = false
          this.mailtaken = true
          this.wenwrong = false
          // commit account not created
        }
      }
    },
  },
}
</script>

<style scoped></style>
