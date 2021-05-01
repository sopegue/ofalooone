<template>
  <div v-if="embed !== null && embed !== undefined">
    <div id="yt" class="flex flex-col items-center" v-html="embed.html"></div>
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
      sizure: 500,
      already: false,
      firsttime: true,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    sizing() {
      return this.sizure
    },
  },
  beforeMount() {
    this.process()
  },
  methods: {
    async process(val = 728) {
      this.embed = await fetch(
        'https://www.youtube.com/oembed?url=' +
          this.link +
          '&format=json&maxheight=728&maxwidth=' +
          val
      )
        .then((res) => res.json())
        .catch(() => console.log("can't get embed link yt"))
    },
  },
}
</script>

<style scoped></style>
