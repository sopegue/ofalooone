<template>
  <div class="py-8">
    <div
      class="flex m-0-auto"
      :class="{
        'space-x-10': size >= 1100,
        'w-fit': size > 809 && size < 1100,
        'w-fit': size >= 1245,
        'flex-col m-0-auto': size < 1100,
      }"
    >
      <div
        class="flex flex-col w600 space-y-6"
        :class="{
          'm-0-auto': size < 1100,
        }"
      >
        <filters v-if="size < 1100"></filters>
        <div
          class="flex px-4 py-2 rounded bg-white h-16min"
          :class="{
            'justify-between space-x-2': size >= 450,
            'flex-col space-y-3': size < 450,
          }"
        >
          <div>
            <h4 class="logo-color block size-15 font-semibold">
              Acheter et louer des proriétés à Abidjan
            </h4>
            <span class="logo-color size-14">1-25 sur 633 resultat</span>
          </div>
          <div
            class="pb-1"
            :class="{
              'self-end ': size >= 450,
            }"
          >
            <sortres></sortres>
          </div>
        </div>
        <div
          class="flex align-center space-x-2 justify-between px-3 py-2 rounded bg-008489"
        >
          <nuxt-link to="#" class="flex align-center space-x-2"
            ><img
              class="rounded-full is-40x40 self-startes"
              src="https://ofaloo.herokuapp.com/images/4.jpg"
              alt="Placeholder image"
            />
            <span class="size-14 block font-semibold text-white w-32min"
              >John Wick</span
            ></nuxt-link
          >
          <nuxt-link
            to="#"
            class="button block bg-transparent px-3 h-fit rounded border-white size-12 text-white"
            >Super agent</nuxt-link
          >
        </div>
        <div>
          <div class="flex flex-col space-y-8">
            <homeproplarge v-for="i in 25" :key="i"></homeproplarge>
          </div>
          <div class="pt-3">
            <pagination></pagination>
          </div>
        </div>
        <!-- <div class="can-add-ads"></div> -->
      </div>
      <filters v-if="size >= 1100"></filters>
    </div>
  </div>
</template>

<script>
import Sortres from '~/components/dropdown/Sortres.vue'
import Filters from '~/components/filter/Filters.vue'
import Pagination from '~/components/pagination/Pagination.vue'
import Homeproplarge from '~/components/propriete/Homeproplarge.vue'
export default {
  components: { Sortres, Homeproplarge, Filters, Pagination },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
