<template>
  <div v-if="embed !== null && embed !== undefined">
    <div class="lg:w-2/5 md:w-3/5 sm:w-4/5 mx-auto" v-html="embed.html"></div>
    <script async src="//www.instagram.com/embed.js"></script>
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
      this.embed = await fetch(
        'https://graph.facebook.com/v10.0/instagram_oembed?url=' +
          this.link +
          '&access_token=1584357918425951|492c5db3d2edb3d0e8f1ca085e1824fd'
      )
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link yt"))
      // console.log(this.embed)
    },
  },
}
</script>

<style scoped></style>
