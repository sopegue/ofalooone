<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">Mot de passe</h4>
    <div class="w-full pt-4 md:pb-5 pb-0 flex flex-col space-y-2">
      <div class="flex flex-col flex-wrap">
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="emaifel" class="size-13">Mot de passe actuel</label>
          <br />
          <div class="relative flex align-center">
            <input
              id="emfeail"
              v-model="curpwd"
              :type="curpwdhidden ? 'password' : 'text'"
              class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
              :class="{
                'border-red-700': curpasserror,
                'border-green-700': $linker.pwdValidated(curpwd),
              }"
            />
            <button
              class="bg-transparent no-outlines absolute right-0 mr-2 logo-color"
              @click="
                {
                  curpwdhid = !curpwdhid
                }
              "
            >
              <svg
                v-show="curpwdhidden"
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
                v-show="!curpwdhidden"
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
            v-show="curpasserror"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Le mot de passe doit contenir au moins 8 caractères avec lettres &
            chiffres.
          </p>
          <p
            v-show="curpassincorrect"
            class="size-12 appearZ text-red-700 leading-4 pt-1"
          >
            Le mot de passe est incorrect
          </p>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="username" class="size-13">Nouveau Mot de passe</label>
          <br />
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
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="pre" class="size-13"
            >Confirmation Nouveau Mot de passe</label
          >
          <br />
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

          <p
            v-show="nochange"
            class="size-12 appearZ text-red-700 leading-4 pt-2"
          >
            L'ancien mot de passe entré est le même que le nouveau mot de passe
          </p>
        </div>
      </div>
      <div
        class="pt-5 lg:pb-5 pb-0 w-fit flex lg:flex-row flex-col lg:space-y-0 space-y-3 lg:items-center lg:space-x-4"
      >
        <button
          class="border-none size-12 w-fit text-white px-8 pb-1.5 rounded button btn-008489"
          :class="{
            noclick:
              (curpwd.length === 0 && pwd.length === 0 && pwdcf.length === 0) ||
              creating,
          }"
          @click="signup"
        >
          Modifier le mot de passe
        </button>
        <div v-if="changed" class="w-fit appearZ">
          <span
            class="block px-5 py-1 h-full color-white size-13 border rounded bg-green-600 text-green-600"
            >Mot de passe mis à jour √</span
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
      curpwd: '',
      pwd: '',
      pwdcf: '',
      pwdandcf: false,
      accounting: false,
      livemailtaken: false,
      mailtaken: false,

      pwderr: false,
      curpwderr: false,
      curpwdinco: false,
      nothingchanged: false,
      pwdcferr: false,
      maierror: false,
      nameerror: false,
      surnameerror: false,
      pwdhid: true,
      curpwdhid: true,
      notpwdok: false,
      pwdsuccess: false,
      wenwrong: false,
    }
  },
  head() {
    return {
      title: 'Mot de passe du compte - ' + this.$auth.user.email + ' | Ofaloo',
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
    changed() {
      return this.pwdsuccess === true
    },
    nochange() {
      return this.nothingchanged === true && this.curpwdinco === false
    },
    curpwdhidden() {
      return this.curpwdhid === true
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
    curpasserror() {
      return this.curpwderr === true
    },
    curpassincorrect() {
      return this.curpwdinco === true
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
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
  watch: {
    curpwd() {
      if (this.curpasserror) {
        this.curpwderr = false
      }
      this.pwderr = false
      this.curpwdinco = false
      this.nothingchanged = false
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
      this.notpwdok = false
      this.nothingchanged = false
    },
    pwdcf(newval, oldval) {
      this.nothingchanged = false
      if (newval === this.pwd) this.notpwdok = false
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
      }
    },
  },
  methods: {
    infosValidated() {
      if (this.$linker.pwdValidated(this.curpwd)) {
        this.curpwderr = false
      } else this.curpwderr = true

      if (this.$linker.pwdValidated(this.pwd)) {
        this.pwderr = false
      } else this.pwderr = true

      if (this.$linker.pwdValidated(this.pwd) && this.samepwd) {
        this.notpwdok = false
      } else if (this.$linker.pwdValidated(this.pwd) && !this.samepwd)
        this.notpwdok = true

      return (
        this.curpasserror === false &&
        this.passerror === false &&
        this.passcferror === false &&
        this.samepwd === true
      )
    },
    async signup() {
      if (this.infosValidated()) {
        let time
        if (this.curpwd === this.pwd) this.nothingchanged = true
        else {
          this.accounting = true
          const taken = await this.$axios.$post('client/pwd/existence', {
            email: this.$auth.user.email,
            id: this.$auth.user.id,
            password: this.curpwd,
          })
          // console.log(taken)
          this.nothingchanged = false
          if (taken.status === '200') {
            const data = await this.$axios.$post('client/pwd/update', {
              email: this.$auth.user.email,
              id: this.$auth.user.id,
              password: this.pwd,
            })
            // NOTHING GARANTIE THAT PWD WILL BE CHANGED
            // YOU GOT TO FIND A BETTER SOLUTION
            // TRY TO USE PROMISE TO DISPLAY MESSAGE OF
            // SUCCESS OR FAILURE
            if (data.status === '201') {
              this.pwdsuccess = false
              clearTimeout(time)
              this.pwdsuccess = true
              time = setTimeout(() => {
                this.pwdsuccess = false
              }, 3000)
              this.curpwd = ''
              this.pwd = ''
              this.pwdcf = ''
            } else {
              this.curpwdinco = true
              this.pwd = ''
              this.pwdcf = ''
            }
            this.accounting = false
          } else if (taken.status === '404') {
            this.curpwdinco = true
            this.accounting = false
          } else {
            this.curpwd = ''
            this.pwd = ''
            this.pwdcf = ''
            this.accounting = false
            await this.$auth.logout().then(() => {
              location.assign('/')
            })
          }
        }
      }
    },
  },
}
</script>

<style scoped></style>
