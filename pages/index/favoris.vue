<template>
  <div class="pt-8 pb-12" :class="{ 'px-0 bg-white': size < 499 }">
    <client-only>
      <div class="flex flex-col space-y-5 xl:px-50 lg:px-20">
        <div
          class="flex px-4 py-2 bg-white h-16min w-full"
          :class="{
            'justify-between space-x-2 align-center': size >= 450,
            'flex-col space-y-3': size < 450,
            rounded: size > 499,
            'border-t border-b': size <= 499,
          }"
        >
          <div>
            <div class="flex space-x-2 font-semibold size-14">
              <svg
                class="w-6 h-6 logo-color"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                ></path>
              </svg>
              <span class="logo-color font-semibold size-14"
                >Liste d'enregistrements</span
              >
            </div>
            <div v-if="(!moring || !charging) && !erroring" class="px-1.8">
              <span v-if="toting > 1" class="logo-color size-14"
                >1-{{ propLength }} sur {{ toting }} résultats</span
              >
              <span v-else-if="toting === 1" class="logo-color size-14"
                >1 résultat</span
              >
              <span v-else class="logo-color size-14">0 résultat</span>
            </div>
          </div>
          <div
            v-if="toting > 0"
            class="pb-1"
            :class="{
              'self-end ': size >= 450,
            }"
          >
            <sortresfav @sort="sorting"></sortresfav>
          </div>
        </div>
        <p v-if="loading" class="py-4 text-c">Chargement des propriétés</p>
        <div v-else-if="!erroring">
          <div
            v-if="dataOk"
            class="flex flex-col"
            :class="{
              'space-y-3': size < 499,
              'rounded space-y-8': size > 499,
            }"
          >
            <homeproplarge
              v-for="(prop, i) in dating"
              :key="i"
              :property="prop"
            ></homeproplarge>
          </div>
          <p v-else class="py-4 text-c flex flex-col items-center space-y-5">
            <span>Vous n'avez pas encore enrégistré de propriété</span>
            <a
              href="/recherche"
              class="button px-4 py-2 rounded btn-008489 size-12 text-white"
              >Rechercher une propriété</a
            >
          </p>
        </div>
        <p v-else class="h-fit w-fit h-centers mb-4">
          Oops, erreur pendant le chargement des propriétés.
        </p>
        <div
          v-if="propLength < toting && !charging"
          class="pt-5 w-fulls"
          :class="{
            'px-2.5': size <= 500,
          }"
        >
          <p v-if="moring" class="h-fit w-fit h-centers mb-4">
            Chargement des propriétés...
          </p>
          <div class="w-full" :class="{ noclick: moring }">
            <a
              class="button block w-fit m-0-auto bg-white px-5 py-2 rounded border-008489ss size-14 color-008489"
              @click="next"
              >Plus de propriétés ({{ toting - propLength }})</a
            >
          </div>
        </div>
        <p
          v-else-if="!charging && propLength !== 0 && propLength === toting"
          class="h-fit w-fit h-centers mt-5"
        >
          --- Fin des résultats ---
        </p>
        <!-- <div class="can-add-ads"></div> -->
      </div>
      <div
        v-show="recently && authorize"
        class="px-4 pt-1 bg-white rounded mt-20"
      >
        <sameagent
          :title="'Récemment consultées'"
          @loaded="loaaded"
        ></sameagent>
      </div>
    </client-only>
  </div>
</template>

<script>
import Sortresfav from '~/components/dropdown/Sortresfav'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
import Sameagent from '~/components/Sameagent.vue'
export default {
  components: { Sortresfav, Homeproplarge, Sameagent },
  middleware: 'auth',
  data() {
    return {
      properties: undefined,
      error: false,
      current: 1,
      more: false,
      recent: false,
      charging: true,
      canshow: false,
      total: 0,
      sort: 'Le plus pertinent',
    }
  },
  head() {
    return {
      title:
        "Ma liste d'enregistrements (favoris - " + this.toting + ') | Ofaloo',
    }
  },
  computed: {
    recently() {
      return this.recent === true
    },
    relfav() {
      return this.$store.state.relfav
    },
    propLength() {
      return this.properties !== undefined && this.properties.data !== undefined
        ? this.properties.data.length
        : 0
    },
    dating() {
      return this.properties !== undefined &&
        this.properties.data !== undefined &&
        this.properties.data.length > 0
        ? this.properties.data
        : []
    },
    toting() {
      return this.total
    },
    authorize() {
      return this.canshow === true
    },
    moring() {
      return this.more === true
    },
    dataOk() {
      return (
        this.properties !== undefined &&
        this.properties.data !== undefined &&
        this.properties.data.length > 0
      )
    },
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
  watch: {
    relfav(nv, ov) {
      if (nv) {
        this.getFav()
      }
    },
  },
  beforeMount() {
    this.getFav()
    if (localStorage.viewed) {
      this.recent = true
    } else {
      this.recent = false
    }
  },
  methods: {
    async getFav() {
      this.current = 1
      this.charging = true
      try {
        this.properties = await this.$axios.$get(
          'properties' + '/fav/' + this.$auth.user.id + '/' + this.sort
        )
        this.charging = false

        this.$store.commit('rel_fav', false)
        if (this.properties.meta !== undefined)
          this.total = this.properties.meta.total
        else this.total = 0
      } catch (err) {
        this.charging = false
        this.$store.commit('rel_fav', false)
        console.error(err)
        this.error = true
        this.properties = undefined
      }
    },
    sorting(val) {
      this.sort = val
      this.charging = true
      this.getFav()
    },
    loaaded() {
      this.canshow = true
    },
    next() {
      this.applyGinate()
    },
    async applyGinate() {
      this.current++
      this.more = true
      this.sort = this.sort.replace(/\s/g, '-')
      try {
        const data = await this.$axios.$get(
          'properties' +
            '/fav/' +
            this.$auth.user.id +
            '/' +
            this.sort +
            '?page=' +
            this.current
        )
        data.data.forEach((element) => {
          this.properties.data.push(element)
        })
        this.error = false
        this.more = false
      } catch (err) {
        console.clear()
        this.error = true
        this.properties = undefined
      }
    },
  },
}
</script>

<style scoped></style>
