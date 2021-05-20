<template>
  <div v-if="erroring" class="py-4 text-c">
    Oops, erreur pendant chargement des propriétés.
  </div>
  <p v-else-if="$fetchState.pending" class="py-4 text-c">
    Chargement des propriétés
  </p>
  <p v-else-if="$fetchState.error" class="py-4 text-c">
    Erreur pendant chargement des propriétés
  </p>
  <div
    v-else-if="dataOk"
    class="flex flex-col space-y-5"
    :class="{ 'px-10': size > 450, 'px-0': size <= 450 }"
  >
    <div class="flex align-center justify-between px-3">
      <h4 class="logo-color size-18 font-semibold">{{ title }}</h4>
      <a
        class="underline-hover clickable text-c w-fit color-008489 block size-14"
        @click="goto(title)"
        >Voir tout</a
      >
    </div>
    <div>
      <div class="flex flex-wrap">
        <homeprop
          v-for="(propertys, i) of common"
          :key="i"
          class="column is-one-quarters"
          :class="{ 'px-0': size <= 450 }"
          :property="propertys"
        ></homeprop>
      </div>
    </div>
    <div v-if="nexting" class="w-full">
      <p v-if="loading" class="h-fit w-fit h-centers mb-4">
        Chargement des propriétés...
      </p>
      <a
        :class="{ noclick: loading }"
        class="button block w-fit m-0-auto bg-transparent px-5 py-2 rounded border-008489ss size-13 color-008489"
        @click="seemore"
        >Voir plus de
        <span
          :class="{ noclick: loading }"
          class="transform lowercase size-13 color-008489"
          >{{ title }}</span
        ></a
      >
    </div>
  </div>
</template>

<script>
import Homeprop from '~/components/propriete/Homeprop.vue'

export default {
  components: { Homeprop },
  props: {
    titler: {
      type: String,
      default: 'Appartement',
    },
  },
  data() {
    return {
      properties: { data: [] },
      property: undefined,
      title: '',
      error: false,
      end: false,
      next: false,
      none: false,
      charging: false,
    }
  },
  async fetch() {
    this.title = this.titler
    try {
      this.property = await this.$axios.$get(
        (this.$auth.loggedIn ? 'aproperties' : 'properties') +
          '/bytype/' +
          this.titler
      )
      if (
        this.property !== undefined &&
        this.property.data !== null &&
        this.property.data !== undefined
      ) {
        if (this.property.data.length > 6) {
          this.next = true
        }
        this.properties.data = this.property.data.slice(0, 6)
      }
      this.error = false
    } catch (th) {
      this.error = true
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    loading() {
      return this.charging === true
    },
    nexting() {
      return this.next === true
    },
    common() {
      return this.properties !== undefined &&
        this.properties.data !== null &&
        this.properties.data !== undefined
        ? this.properties.data
        : []
    },
    ending() {
      return this.end === true
    },
    erroring() {
      return this.error === true
    },
    dataOk() {
      return (
        this.properties !== undefined &&
        this.properties.data !== null &&
        this.properties.data !== undefined &&
        this.none === false
      )
    },
    // fetcherror() {
    //   return this.$fetchState.error !== null
    // },
  },
  // watch: {
  //   fetcherror(nv, ov) {
  //     if (nv !== null) location.assign('/')
  //   },
  // },
  mounted() {
    this.title = this.titler
    if (
      this.properties !== undefined &&
      this.properties.data !== null &&
      this.properties.data !== undefined &&
      this.properties.data.length === 0
    ) {
      this.none = true
    }
    // this.fetchTitle()
  },
  methods: {
    async goto(val) {
      if (sessionStorage.filter_home) {
        const data = await JSON.parse(sessionStorage.getItem('filter_home'))
        data.property.multiple = [val]
        if (sessionStorage.filter) sessionStorage.removeItem('filter')
        sessionStorage.setItem('filter', JSON.stringify(data))
        location.assign('/recherche')
      }
    },
    seemore() {
      this.charging = true
      this.moreprop()
    },
    async moreprop() {
      try {
        this.property = undefined
        this.property = await this.$axios.$get(
          (this.$auth.loggedIn ? 'aproperties' : 'properties') +
            '/bytype/skip/' +
            this.titler
        )
        if (
          this.property !== undefined &&
          this.property.data !== null &&
          this.property.data !== undefined
        ) {
          this.property.data.forEach((element) => {
            this.properties.data.push(element)
          })

          this.error = false
          this.charging = false
          this.next = false
        }
      } catch (th) {
        this.error = true
      }
    },
    // async fetchTitle() {
    //   this.properties = await this.$axios.$post((this.$auth.loggedIn ? 'aproperties':'properties')+'/bytype', {
    //     type: this.title,
    //   })
    // },
  },
}
</script>

<style scoped></style>
