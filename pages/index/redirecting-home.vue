<template>
  <div class="px-0"></div>
</template>

<script>
export default {
  head() {
    return {
      title: "Redirection vers la page d'accueil | Ofaloo",
    }
  },
  beforeMount() {
    console.clear()
    this.$router.push('/')
  },
}
</script>

<style scoped></style>
