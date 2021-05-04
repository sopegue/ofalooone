<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Paramètres du compte
    </h4>
    <div class="mt-5">
      <div>
        <label class="flex align-center container pb-1"
          ><span class="size-13 -mt-012x block self-end"
            >Retirer les propriétés vendues de ma liste d'enregistrements</span
          >
          <input v-model="checkedCateg" type="checkbox" :value="'del-sold'" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <label class="flex align-center container pb-1"
          ><span class="size-13 -mt-012x block self-end"
            >Retirer les propriétés louées de ma liste d'enregistrements</span
          >
          <input v-model="checkedCateg" type="checkbox" :value="'del-loca'" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="pt-3">
        <h4 class="logo-color size-13 pb-1">
          Confirmation de l'adresse email
          <span
            v-if="$auth.user.email_verified_at !== null"
            class="font-semibold size-125"
            >(Votre adresse est confirmée)</span
          >
          <span v-else class="font-semibold size-125"
            >(Votre adresse n'est pas confirmée)</span
          >
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse actuelle:
          <span class="size-13 color-363636f">yayasopeguesoro@gmail.com</span>
        </h4>
        <div v-if="$auth.user.email_verified_at === null" class="pt-1 w-fit">
          <button
            class="border-none size-12 w-fit text-white py-1 px-10 pb-1 rounded button btn-008489"
            @click="verify"
          >
            Confirmer votre adresse email
          </button>
        </div>
      </div>
      <div class="pt-6">
        <h4 class="logo-color size-13 pb-1">Fermeture de compte</h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-12 w-fit text-white py-1 px-10 pb-1 rounded button bghover-008489er"
            @click="dell"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
      <div v-if="mod" class="w-fit appearZ mt-4">
        <span
          class="block size-13 px-5 py-1 h-full color-white border rounded bg-green-600 text-green-600"
          >Enregistré √</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedCateg: [],
      wannadelete: false,
      first: true,
      stat: null,
      notif: false,
      resulat: null,
    }
  },
  computed: {
    del() {
      return this.wannadelete === true
    },
    firstly() {
      return this.first === true
    },
    mod() {
      return this.notif === true
    },
    deling() {
      return this.$store.state.del === true
    },
  },
  watch: {
    checkedCateg(nv, ov) {
      if (!this.firstly) {
        if (nv.length > 0) {
          if (nv.length === 2) {
            this.pendingmail(
              'update_sold',
              'yes',
              this.$auth.user.id,
              this.$auth.user.email
            )
            this.pendingmail(
              'update_rent',
              'yes',
              this.$auth.user.id,
              this.$auth.user.email
            )
          } else if (nv.length === 1) {
            if (nv.includes('del-loca')) {
              this.pendingmail(
                'update_rent',
                'yes',
                this.$auth.user.id,
                this.$auth.user.email
              )
              this.pendingmail(
                'update_sold',
                'no',
                this.$auth.user.id,
                this.$auth.user.email
              )
            } else {
              this.pendingmail(
                'update_rent',
                'no',
                this.$auth.user.id,
                this.$auth.user.email
              )
              this.pendingmail(
                'update_sold',
                'yes',
                this.$auth.user.id,
                this.$auth.user.email
              )
            }
          }
        } else {
          this.pendingmail(
            'update_sold',
            'no',
            this.$auth.user.id,
            this.$auth.user.email
          )
          this.pendingmail(
            'update_rent',
            'no',
            this.$auth.user.id,
            this.$auth.user.email
          )
        }
      }
    },
    deling(nv, ov) {
      if (nv) {
        this.deletion()
      }
    },
    resulat(nv, ov) {
      if (nv !== null && nv.status === '200') {
        this.sendMail(nv.token).then((res) => console.log(res))
        setTimeout(() => {
          this.resulat = null
        }, 3000)
      }
    },
  },
  beforeMount() {
    if (this.$auth.user.retired_sold === 'yes') {
      this.checkedCateg.push('del-sold')
    }
    if (this.$auth.user.retired_rent === 'yes') {
      this.checkedCateg.push('del-loca')
    }
    setTimeout(() => {
      this.first = false
    }, 500)
  },
  methods: {
    async sendMail(res) {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('http://localhost:8000/api/sendmail', {
            email: 'yayasopeguesoro@gmail.com',
            mail: this.$linker.email(
              res,
              this.$auth.user.email,
              this.$auth.user.name
            ),
          })
        )
      }).catch(() => {
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
        console.error("Oops, can't resolve your promise getting hash")
      })
    },
    verify() {
      this.getHash().then((res) => {
        this.resulat = res
      })
    },
    dell() {
      this.$store.commit('SET_DEL_MOD', true)
      document.body.style.overflow = 'hidden'
    },
    async pendingmail(prop, what, id, email) {
      // console.log(prop, what, id, email)
      const data = await this.$axios.$post('saved', {
        prop,
        what,
        id,
        email,
      })
      this.stat = data
      if (data.status === '200') {
        this.notif = true
        setTimeout(() => {
          this.notif = false
        }, 3000)
      }
    },
    async deletion() {
      this.$store.commit('set_Deleting', true)
      await this.$axios.$delete('client/' + this.$auth.user.id)
      // console.log(data)
      await this.$auth
        .logout()
        .then(() => {
          location.assign('/')
        })
        .catch(() => {
          location.assign('/')
        })
    },
  },
}
</script>

<style scoped></style>
