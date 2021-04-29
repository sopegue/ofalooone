<template>
  <div
    class="fb-video"
    :data-href="link"
    :data-width="size > 1064 ? '628' : (size - 40).toString()"
    data-show-text="false"
  >
    <blockquote :cite="link" class="fb-xfbml-parse-ignore">
      <a :href="link">Propriété(s) publiée(s) sur Facebook.</a>
      <p>Propriété(s) publiée(s) sur Facebook.</p>
    </blockquote>
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
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
