<template>
  <div class="py-10">
    <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
      <resetsuccess></resetsuccess>
    </div>
  </div>
</template>

<script>
import Resetsuccess from '~/components/authentication/Resetsuccess.vue'
export default {
  components: { Resetsuccess },
  middleware: 'noauth',
  head() {
    return {
      title: 'Etape de réinitialisation du mot de passe | Ofaloo',
    }
  },
  beforeMount() {
    if (this.$auth.loggedIn) this.$router.replace('/')
    if (!sessionStorage.new) this.$router.replace('/')
  },
}
</script>

<style scoped></style>
