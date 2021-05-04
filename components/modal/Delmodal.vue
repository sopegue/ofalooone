<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content h-fit">
      <div class="box bg-white mx-4 min-w-76">
        <div class="m-0-auto pb-4 text-center size-15">
          <span class="block wordbreaking"
            >Attention, êtes vous sûr(e) de vouloir supprimer votre compte ?
          </span>
        </div>
        <div class="w-fit size-14 m-0-auto flex align-center space-x-6">
          <button
            class="button is-light font-semibold rounded-md no-outlines outline-none size-12 px-5"
            @click="close"
          >
            Non, annuler
          </button>
          <button
            class="button bghover-008489er text-white font-semibold rounded-md no-outlines outline-none size-12 px-5"
            @click="deleteaccount"
          >
            Oui, supprimer
          </button>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inside: false,
    }
  },
  computed: {
    modaled() {
      return this.$store.state.delmod === true
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_DEL_MOD', false)
      document.body.style.overflow = 'visible'
    },
    deleteaccount() {
      this.$store.commit('SET_DEL_ACC', true)
      this.close()
    },
  },
}
</script>
