<template>
  <div class="wmax-x656 plus50px flex align-center relative">
    <div id="eltoscrol" class="flex relative space-x-6 overflow-x-auto pb-2.5">
      <homepropsame
        v-for="(index, i) in data"
        :key="i"
        :property="index"
      ></homepropsame>
    </div>
  </div>
</template>
<script>
import Homepropsame from './propriete/Homepropsame.vue'
export default {
  components: { Homepropsame },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    indexer: {
      type: Number,
      default: 0,
    },
  },
}
</script>
