<template>
  <div v-if="erroring" class="py-4 text-c">
    Oops, erreur pendant chargement des propriétés.
  </div>
  <p v-else-if="loading" class="py-4 text-c">Chargement des propriétés</p>

  <div v-else class="py-8" :class="{ 'px-0 bg-white': size < 499 }">
    <div
      class="flex m-0-auto"
      :class="{
        'w-fit': size >= 850,
        'px-20': size > 600 && size <= 829,
        'flex-col m-0-auto': size < 1050,
      }"
    >
      <div class="flex flex-col w600s space-y-5">
        <div
          class="flex px-4 py-2 bg-white h-16min"
          :class="{
            'justify-between space-x-2': size >= 450,
            'flex-col space-y-3': size < 450,
            rounded: size > 499,
            'border-t border-b': size <= 499,
          }"
        >
          <div class="flex align-center space-x-2 font-semibold size-14">
            <svg
              class="w-6 h-6 logo-color"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
            <span class="logo-color font-semibold size-14"
              >Liste d'enregistrements (45)</span
            >
          </div>
          <div
            class="pb-1"
            :class="{
              'self-end ': size >= 450,
            }"
          >
            <sortresfav></sortresfav>
          </div>
        </div>
        <div>
          <div
            class="flex flex-col"
            :class="{
              'space-y-3': size < 499,
              'rounded space-y-8': size > 499,
            }"
          >
            <homeproplarge
              v-for="(prop, i) in properties.data"
              :key="i"
              :property="prop"
            ></homeproplarge>
          </div>
        </div>
        <div class="w-fit h-centers pt-5">
          <a
            href="#"
            class="button bg-white block w-fit m-0-auto bg-transparent px-5 py-2 rounded border-008489ss size-13 color-008489"
            >Charger plus (17)</a
          >
        </div>
        <!-- <div class="can-add-ads"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sortresfav from '~/components/dropdown/Sortresfav'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
export default {
  components: { Sortresfav, Homeproplarge },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    try {
      const properties = await fetch(
        'https://ofalooback.herokuapp.com/api/properties/bytype/Studio'
      ).then((res) => res.json())
      const charging = false
      return { properties, charging }
    } catch (err) {
      console.clear()
      const error = true
      const properties = undefined
      return { error, properties }
    }
  },
  data() {
    return {
      error: false,
      charging: true,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    loading() {
      return this.charging === true
    },
    erroring() {
      return this.error === true
    },
  },
  mounted() {
    console.log(this.properties)
  },
}
</script>

<style scoped></style>
