<template>
  <div>
    <div
      class="bg-white py-10 flex flex-col space-y-6"
      :class="{ 'px-0': size <= 450 }"
    >
      <listhome></listhome>
      <listhome :titler="'Studio'"></listhome>
      <listhome :titler="'Maison'"></listhome>
      <listhome :titler="'Haut-Standing'"></listhome>
      <listhome :titler="'Villa'"></listhome>
      <listhome :titler="'Bureau'"></listhome>
      <listhome :titler="'Magasin'"></listhome>
      <listhome :titler="'Terrain'"></listhome>
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
