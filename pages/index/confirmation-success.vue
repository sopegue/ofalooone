<template>
  <div class="py-10">
    <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
      <confirmsuccess></confirmsuccess>
    </div>
  </div>
</template>

<script>
import Confirmsuccess from '~/components/authentication/Confirmsuccess.vue'
export default {
  components: { Confirmsuccess },
  head() {
    return {
      title: 'Votre adresse email a été confirmée | Ofaloo',
    }
  },
  beforeMount() {
    if (!localStorage.success) {
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped></style>
