<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div
      class="modal-content lg:w-2/5 md:w-2/3 sm:w-3/4 h-fit m-5 py-4 sm:px-0 px-8"
    >
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        class="bg-white rounded relative wmin-900 wmin-900s h-full overflow-y-auto sm:px-6 asides py-2"
      >
        <div class="vertical-center">
          <button
            class="delete pos-right relative z-50 is-large logo-color mb-3 mr-3"
            @click="close"
          ></button>
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
