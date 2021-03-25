<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">Mot de passe</h4>
    <div class="w-full pt-4 pb-10 flex flex-col space-y-2">
      <div class="flex flex-col flex-wrap">
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="emaifel" class="size-13">Mot de passe actuel</label>
          <br />
          <input
            id="emfeail"
            type="password"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="username" class="size-13">Nouveau Mot de passe</label>
          <br />
          <input
            id="username"
            type="password"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twoss-fifths': size < 550,
          }"
        >
          <label for="pre" class="size-13"
            >Confirmation Nouveau Mot de passe</label
          >
          <br />
          <input
            id="pre"
            type="password"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
      </div>
      <div class="pt-5 w-fit">
        <button
          class="border-none size-12 w-fit text-white sm:px-24 px-15 pb-2 rounded button btn-008489"
        >
          Modifier le mot de passe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    curoute() {
      return this.$route.path
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
