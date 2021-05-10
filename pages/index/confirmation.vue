<template>
  <div class="py-10">
    <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
      <confirm></confirm>
    </div>
  </div>
</template>

<script>
import Confirm from '~/components/authentication/Confirm.vue'
export default {
  components: { Confirm },

  middleware: 'auth',
  head() {
    return {
      title: "Confirmation de l'adresse email | Ofaloo",
    }
  },
  beforeMount() {
    if (!localStorage.conf) {
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped></style>
