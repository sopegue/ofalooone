<template>
  <div>
    <div class="w-full">
      <div class="oath-log relative flex flex-col space-y-10">
        <div
          class="border bg-white mt-10 rounded-md px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="text-center size-16 logo-color font-semibold mb-1">
            Inscription à Ofaloo
          </h4>
          <div class="w-full">
            <label for="email" class="size-14">Email</label>
            <br />
            <input
              id="email"
              v-model="email"
              type="email"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
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
            <p
              v-show="liverror || noliverror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Désolé, cette adresse email est déjà utilisée !
            </p>
          </div>
          <div class="w-full">
            <label for="username" class="size-14">Nom</label>
            <br />
            <input
              id="username"
              v-model="name"
              autocomplete="none"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700': noname,
                'border-green-700':
                  name.length >= 2 && $linker.onlyLetters(name),
              }"
            />
            <p
              v-show="noname"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter votre nom s'il vous plaît (lettres de l'alphabet)
            </p>
          </div>
          <div class="w-full">
            <label for="userdname" class="size-14">Prénom (Optionnel)</label>
            <br />
            <input
              id="userdname"
              v-model="surname"
              autocomplete="none"
              type="text"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
            <p
              v-show="invalidsurname"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Veuillez enter un prénom valide (lettres de l'alphabet) !
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwd" class="size-14">Mot de passe</label>
            </div>

            <div class="relative flex align-center">
              <input
                id="pwd"
                v-model="pwd"
                :type="pwdhidden ? 'password' : 'text'"
                class="border pr-8 w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
                :class="{
                  'border-red-700': passerror,
                  'border-green-700': $linker.pwdValidated(pwd),
                }"
              />
              <button
                class="bg-transparent no-outlines absolute right-0 mr-2 logo-color"
                @click="
                  {
                    pwdhid = !pwdhid
                  }
                "
              >
                <svg
                  v-show="pwdhidden"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg
                  v-show="!pwdhidden"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>
              </button>
            </div>
            <p
              v-show="passerror"
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Le mot de passe doit contenir au moins 8 caractères avec lettres &
              chiffres.
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwdx" class="size-14"
                >Mot de passe confirmation</label
              >
            </div>
            <input
              id="pwdx"
              v-model="pwdcf"
              :type="pwdhidden ? 'password' : 'text'"
              class="border pr-8 w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700s':
                  didpwdunmatch ||
                  ($linker.pwdValidated(pwd) &&
                    pwdcf.length >= pwd.length &&
                    !samepwd) ||
                  ($linker.pwdValidated(pwd) &&
                    pwdcf.length > 0 &&
                    pwdcf.length < pwd.length &&
                    !pwd.startsWith(pwdcf)),
                'border-green-700': samepwd,
              }"
            />
            <p
              v-show="
                ($linker.pwdValidated(pwd) &&
                  pwdcf.length >= pwd.length &&
                  !samepwd) ||
                didpwdunmatch ||
                ($linker.pwdValidated(pwd) &&
                  pwdcf.length > 0 &&
                  pwdcf.length < pwd.length &&
                  !pwd.startsWith(pwdcf))
              "
              class="size-12 appearZ text-red-700 leading-4 pt-1"
            >
              Le mot de passe et la confirmation ne correspondent pas.
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="tellnum" class="size-14">Téléphone (Optionnel)</label>
            </div>
            <input
              id="tellnum"
              v-model="phone"
              type="tel"
              class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full flex align-center space-x-2 pt-1">
            <input
              id="senupd"
              v-model="checkletter"
              type="checkbox"
              value="yes"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >M'abonner pour recevoir les meilleurs offres sur Ofaloo.</label
            >
          </div>
          <a
            class="button relative top-05x border rounded-md flex align-center space-x-2"
            :class="{
              'noclick bg-gray-800': creating,
              'btn-008489': !creating,
            }"
            @click="signup"
          >
            <span class="size-12 text-white font-semibold"
              >Créer mon compte
            </span></a
          >
          <div class="text-center">
            <div class="inline-block size-13 mt-2">
              <span>En vous inscrivant, vous acceptez les </span>
              <a
                href="/condition-utilisation"
                class="color-008489 underline-hover"
                >conditions d'utilisations</a
              >
            </div>
          </div>
          <div class="w-fit m-0-auto">
            <div class="flex align-center text-center space-x-2 size-13 mt-2">
              <span>Vous avez un compte?</span>
              <a href="/connexion" class="color-008489 underline-hover"
                >Se connecter</a
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <a
            href="#"
            class="button bg-white border rounded-md flex align-center space-x-2"
            ><svg
              class="h-5 w-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              /></svg
            ><span class="size-14">S'inscrire avec Google</span></a
          >
          <a
            href="#"
            class="button h-full bg-fb border rounded-md flex align-center space-x-2"
            ><client-only>
              <span class="mscourse block font-semibold color-363636f"
                ><client-only
                  ><svg
                    class="h-5 w-5 fbvg -mt-012x"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1365.12"
                    height="1365.12"
                    viewBox="0 0 14222 14222"
                  >
                    <circle cx="7111" cy="7112" r="7111" fill="#4267B2" />
                    <path
                      d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                      fill="#fff"
                    /></svg></client-only></span
            ></client-only>
            <span class="size-14 text-white">S'inscrire avec Facebook</span></a
          >
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
      pwdcf: '',
      name: '',
      surname: '',
      email: '',
      phone: '',

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

      wenwrong: false,
      checkletter: [],
    }
  },
  computed: {
    didpwdunmatch() {
      return this.notpwdok === true
    },
    creating() {
      return this.accounting === true
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
    email(nv, ov) {
      if (this.mailerror || this.livemailtaken || this.mailtaken) {
        this.maierror = false
        this.livemailtaken = false
        this.mailtaken = false
      }
      if (this.timestamp === 0 || Date.now() - this.timestamp > 200) {
        this.timestamp = Date.now()
        this.callme()
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
  methods: {
    callme() {
      if (this.$linker.emailValidated(this.email)) {
        this.pendingmail()
          .then((res) => {
            const taken = res
            if (taken.status === 'taken') {
              this.livemailtaken = true
            } else this.livemailtaken = false
          })
          .catch(() => {
            console.error('Oops something bad happened livemail')
          })
      } else this.livemailtaken = false
    },
    async pendingmail() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('client/existence', {
            email: this.email,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise livemail")
      })
    },
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
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
        this.passerror === false &&
        this.passcferror === false &&
        this.samepwd === true &&
        this.surnameerror === false
      )
    },
    resetInfos() {
      this.email = ''
      this.name = ''
      this.surname = ''
      this.phone = ''
      this.checkletter = []
      this.pwd = ''
      this.pwdcf = ''
    },
    signup() {
      const form = new FormData()
      if (this.infosValidated()) {
        this.accounting = true

        form.append('email', this.email)
        form.append('name', this.name)
        form.append('password', this.pwd)

        form.append('surname', this.surname)

        form.append('phone', this.phone)

        if (this.checkletter.length > 0) form.append('newsletter', 'yes')
        else form.append('newsletter', 'no')
        // deal with connection refuse or backend unavailable
        // later using promise
        this.registering(form)
          .then((res) => {
            const data = res
            if (data.status === '201') {
              // commit account created
              this.resetInfos()
              this.mailtaken = false
              this.wenwrong = false
            }
            if (data.status === '500') {
              this.wenwrong = true
              this.mailtaken = false
              // commit account not created
            }
            if (data.status === '200') {
              this.mailtaken = true
              this.wenwrong = false
              // commit account not created
            }
            this.accounting = false
          })
          .catch(() => {
            console.error('Oops something bad happened registering')
            this.accounting = false
          })
      }
    },
    async registering(form) {
      return await new Promise((resolve, reject) => {
        resolve(this.$axios.$post('client', form))
      }).catch(() => {
        console.error("Oops, can't resolve your promise registering")
      })
    },
  },
}
</script>
