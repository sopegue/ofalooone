<template>
  <div class="py-8">
    <div
      class="flex m-0-auto"
      :class="{
        'w-fit': size >= 850,
        'flex-col m-0-auto': size < 1050,
      }"
    >
      <div class="flex flex-col w600s space-y-6">
        <div
          class="flex px-4 py-2 rounded bg-white h-16min"
          :class="{
            'justify-between space-x-2': size >= 450,
            'flex-col space-y-3': size < 450,
          }"
        >
          <div class="flex align-center space-x-2 font-semibold size-14">
            <svg
              class="w-7 h-7 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
            <span class="logo-color font-semibold size-14"
              >Liste d'enregistrements (45)</span
            >
          </div>
          <div
            class="pb-1"
            :class="{
              'self-end ': size >= 450,
            }"
          >
            <sortresfav></sortresfav>
          </div>
        </div>
        <div>
          <div class="flex flex-col space-y-8">
            <homeproplarge v-for="i in 25" :key="i"></homeproplarge>
          </div>
        </div>
        <!-- <div class="can-add-ads"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sortresfav from '~/components/dropdown/Sortresfav'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
export default {
  components: { Sortresfav, Homeproplarge },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
