<template>
  <div class="py-10">
    <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
      <forgotten></forgotten>
    </div>
  </div>
</template>

<script>
import Forgotten from '~/components/authentication/Forgotten.vue'
export default {
  components: { Forgotten },
  middleware: 'noauth',
  head() {
    return {
      title: 'Mot de passe oublié | Ofaloo',
    }
  },
  beforeMount() {
    if (this.$auth.loggedIn) this.$router.replace('/')
  },
}
</script>

<style scoped></style>
