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
          <span class="font-semibold size-125"
            >(Votre adresse n'est pas confirmée / Votre adresse est
            confirmée)</span
          >
        </h4>
        <h4 class="logo-color size-13 pb-1">
          Adresse actuelle:
          <span class="size-13 color-363636f">yayasopeguesoro@gmail.com</span>
        </h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-11 w-fit text-white py-1 px-10 pb-1 rounded button btn-008489"
          >
            Confirmer votre adresse email
          </button>
        </div>
      </div>
      <div class="pt-6">
        <h4 class="logo-color size-13 pb-1">Fermeture de compte</h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-11 w-fit text-white py-1 px-10 pb-1 rounded button bghover-008489er"
            @click="deletion"
          >
            Supprimer mon compte
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
      checkedCateg: [],
    }
  },
  watch: {
    checkedCateg(nv, ov) {
      if (nv.length > 0) {
        if (nv.length === 2) {
          this.pendingmail('update_sold', 'yes', 1, 'sopoudegoyos@gmail.com')
          this.pendingmail('update_rent', 'yes', 1, 'sopoudegoyos@gmail.com')
        } else if (nv.length === 1) {
          if (nv.includes('del-loca')) {
            this.pendingmail('update_rent', 'yes', 1, 'sopoudegoyos@gmail.com')
            this.pendingmail('update_sold', 'no', 1, 'sopoudegoyos@gmail.com')
          } else {
            this.pendingmail('update_rent', 'no', 1, 'sopoudegoyos@gmail.com')
            this.pendingmail('update_sold', 'yes', 1, 'sopoudegoyos@gmail.com')
          }
        }
      } else {
        this.pendingmail('update_sold', 'no', 1, 'sopoudegoyos@gmail.com')
        this.pendingmail('update_rent', 'no', 1, 'sopoudegoyos@gmail.com')
      }
    },
  },
  methods: {
    async pendingmail(prop, what, id, email) {
      const data = await fetch(
        'https://ofalooback.herokuapp.com/api/saved/' +
          prop +
          '/' +
          what +
          '/' +
          id +
          '/' +
          email
      ).then((res) => res.json())
      console.log(data)
    },
    async deletion() {
      this.$store.commit('set_Deleting', true)
      const data = await this.$axios.$delete('client/' + 1)
      console.log(data)
      this.$store.commit('set_Deleting', false)
      // location.assign('/')
    },
  },
}
</script>

<style scoped></style>
