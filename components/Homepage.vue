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
      <div v-show="recently && okay" class="sm:px-8 px-4">
        <sameagent
          v-show="okay"
          :title="'Récemment consultées'"
          @loaded="loaaded"
        ></sameagent>
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
      recent: false,
      ok: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    erroring() {
      return this.error === true
    },
    recently() {
      return this.recent === true
    },
    okay() {
      return this.ok === true
    },
  },
  beforeMount() {
    if (localStorage.viewed) {
      this.recent = true
    } else {
      this.recent = false
    }
  },
  methods: {
    loaaded() {
      setTimeout(() => {
        this.ok = true
      }, 1000)
    },
  },
}
</script>

<style scoped></style>
