<template>
  <div class="pb-20">
    <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
      <register></register>
    </div>
  </div>
</template>

<script>
import Register from '~/components/authentication/Register.vue'
export default {
  components: { Register },
  middleware: 'noauth',
  beforeMount() {
    if (this.$auth.loggedIn) {
      this.$router.replace('/redirecting-home')
    }
  },
}
</script>

<style scoped></style>
