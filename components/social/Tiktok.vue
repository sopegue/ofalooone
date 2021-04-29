<template>
  <div v-if="embed !== null && embed !== undefined">
    <div v-html="embed.html"></div>
    <script async src="https://www.tiktok.com/embed.js"></script>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      embed: null,
      // sizure: 500,
    }
  },
  // computed: {
  //   size() {
  //     return this.$store.state.size
  //   },
  //   sizing() {
  //     return this.sizure
  //   },
  // },
  // watch: {
  //   size(nv, ov) {
  //     if (nv >= 360 && nv < 550) {
  //       this.process(nv - 50)
  //     } else if (nv >= 500) {
  //       this.process(500)
  //     }
  //   },
  // },
  mounted() {
    this.process()
  },
  methods: {
    async process(val = 500) {
      this.embed = await fetch('https://www.tiktok.com/oembed?url=' + this.link)
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link yt"))
      console.log(this.embed)
    },
  },
}
</script>

<style scoped></style>
