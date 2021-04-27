<template>
  <div>
    <div
      class="bg-white py-10 flex flex-col space-y-6"
      :class="{ 'px-0': size <= 450 }"
    >
      <listhome class="border-b pb-6"></listhome>
      <listhome :titler="'Studio'" class="border-b pb-6"></listhome>
      <listhome :titler="'Maison'" class="border-b pb-6"></listhome>
      <listhome :titler="'Haut-Standing'" class="border-b pb-6"></listhome>
      <listhome :titler="'Villa'" class="border-b pb-6"></listhome>
      <listhome :titler="'Bureau'" class="border-b pb-6"></listhome>
      <listhome :titler="'Magasin'" class="border-b pb-6"></listhome>
      <listhome :titler="'Terrain'" class="border-b pb-6"></listhome>
      <!-- <listhome :titler="'Villa'"></listhome> -->
      <!-- <listhome :property="'Villa'" class="border-b pb-8"></listhome> -->
      <div class="sm:px-8 px-4">
        <sameagent :title="'Récemment consultées'"></sameagent>
      </div>
    </div>
  </div>
</template>

<script>
import Listhome from '~/components/propriete/Listhome.vue'
import Sameagent from '~/components/Sameagent.vue'
export default {
  components: { Listhome, Sameagent },
  data() {
    return {
      error: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    erroring() {
      return this.error === true
    },
  },
}
</script>

<style scoped></style>
