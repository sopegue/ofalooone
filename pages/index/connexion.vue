<template>
  <div class="relative">
    <div class="py-11">
      <div class="m-0-auto lg:w-2/5 md:w-3/5 sm:w-4/5">
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/authentication/Login.vue'
export default {
  components: { Login },
  middleware: 'noauth',
  computed: {
    logged() {
      return this.$auth.loggedIn === true
    },
  },
  watch: {
    logged(nv, ov) {
      console.log('watched logged:', nv)
    },
  },
  beforeMount() {
    if (this.$auth.loggedIn) {
      this.$router.replace('/redirecting-home')
    }
  },
}
</script>

<style scoped></style>
