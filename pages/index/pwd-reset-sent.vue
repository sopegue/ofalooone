<template>
  <div>
    <div v-if="load" class="h-64 pt-4">
      Envoi du lien de réinitialisation...
    </div>
    <div class="py-10">
      <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
        <resetlink @yes="yes"></resetlink>
      </div>
    </div>
  </div>
</template>

<script>
import Resetlink from '~/components/authentication/Resetlink.vue'
export default {
  components: { Resetlink },
  middleware: 'noauth',
  data() {
    return {
      first: true,
    }
  },
  head() {
    return {
      title: 'Lien de réinitialisation du mot de passe | Ofaloo',
    }
  },
  computed: {
    load() {
      return this.first === true
    },
  },
  beforeMount() {
    if (this.$auth.loggedIn) this.$router.replace('/')
    if (!sessionStorage.reset) this.$router.replace('/')
  },
  methods: {
    yes(val) {
      this.first = val
    },
  },
}
</script>

<style scoped></style>
