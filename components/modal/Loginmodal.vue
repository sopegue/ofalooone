<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content lg:w-2/5 md:w-2/3 sm:w-3/4 h-full m-5 py-4">
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        class="bg-white relative wmin-900 wmin-900s h-full overflow-y-auto sm:px-6 asides py-2"
      >
        <button
          class="modal-close z-20 is-large logo-color absolute top-0 right-0 mt-2 mr-2"
          aria-label="close"
          @click="close"
        ></button>
        <div class="vertical-center">
          <loginpop></loginpop>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loginpop from '../authentication/Loginpop.vue'

export default {
  components: { Loginpop },
  methods: {
    close() {
      this.$store.commit('close_quick_sign', false)
      document.body.style = 'overflow: visible'
    },
  },
}
</script>
