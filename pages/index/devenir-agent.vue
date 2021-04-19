<template>
  <div class="flex flex-col space-y-8 bg-white px-0 relative">
    <div class="header-home relative w-full" :style="setheight(590)">
      <div class="absolute bgtr h-full w-full z-0"></div>
      <div class="absolute bgtr h-full w-full">
        <div>
          <div class="sm:px-10 px-4 pt-20">
            <h4 class="text-white size-48 font-semibold mb-1">
              Devenir un agent sur Ofaloo
            </h4>
            <span class="block text-white leading-4 size-16"
              >Rejoignez-nous et commencez à vendre ou mettre en location une ou
              plusieurs propriétés que vous gérez.</span
            >
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 mb-25 mr-10">
        <a
          href="/"
          target="_blank"
          class="button btn-008489 px-10 py-2 rounded border-white text-white size-14"
          >Rejoindre Ofaloo</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    size() {
      return this.$store.state.size
    },
    minsearch() {
      return this.$store.state.minsearch === true
    },
  },
  methods: {
    setheight(val) {
      return 'height: ' + val + 'px'
    },
    hideminsearch() {
      this.$store.commit('set_MinSearch', false)
    },
  },
}
</script>
<style scoped>
.header-home {
  background-image: url('https://ofalooback.herokuapp.com/images/1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.bgtr {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
