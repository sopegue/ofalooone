<template>
  <div class="px-0">
    <apropos></apropos>
  </div>
</template>

<script>
import Apropos from '~/components/apropos/Apropos.vue'
export default {
  components: { Apropos },
  head() {
    return {
      title: 'A propos de nous | Ofaloo',
    }
  },
}
</script>

<style scoped></style>
