<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Mes informations
    </h4>
    <div class="w-full pt-4 flex flex-col space-y-2">
      <div class="flex flex-wrap">
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="email" class="size-13">Email</label>
          <br />
          <input
            id="email"
            type="text"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="username" class="size-13">Nom</label>
          <br />
          <input
            id="username"
            type="text"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="pre" class="size-13">Prénom</label>
          <br />
          <input
            id="pre"
            type="text"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phone" class="size-13">Téléphone</label>
          <br />
          <input
            id="phone"
            type="tel"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phoned" class="size-13">Adresse</label>
          <br />
          <input
            id="phoned"
            type="adress"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="request" class="size-14">Pays de résidence</label>
          <br />
          <delcountry></delcountry>
        </div>
        <div
          class="column"
          :class="{
            'is-twoss-fifths': size < 970 && size >= 850,
            'is-twos-fifths': size < 1100 && size >= 970,
            'is-two-fifths': size >= 1100,
            'is-twose-fifths': size < 850 && size >= 550,
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phonedd" class="size-13">Ville</label>
          <br />
          <input
            id="phonedd"
            type="text"
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
            'is-twosse-fifths': size < 550,
          }"
        >
          <label for="phonedd" class="size-13">Code postal</label>
          <br />
          <input
            id="phonedd"
            type="text"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
      </div>
      <div class="pt-3 w-fit">
        <button
          class="border-none size-12 m-0-auto w-fit text-white px-10 pb-2 rounded button btn-008489"
        >
          Mettra à jour mes données
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Delcountry from '~/components/dropdown/Delcountry.vue'
export default {
  components: { Delcountry },
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
