<template>
  <div class="bg-white py-10 flex flex-col space-y-8">
    <listhome class="border-b pb-8"></listhome>
    <listhome :property="'Villa'" class="border-b pb-8"></listhome>
  </div>
</template>

<script>
import Listhome from '~/components/propriete/Listhome.vue'
export default {
  components: { Listhome },
}
</script>

<style scoped></style>
