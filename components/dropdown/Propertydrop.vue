<template>
  <div>
    <div v-click-outside="hide">
      <div>
        <client-only>
          <div
            class="flex align-center space-x-1 dropdown-item py-3 clickable select-none"
            :class="{
              'border-t border-b': title === 'Acheter' && !focused,
              'border-t': title === 'Acheter' && focused,
              'border-b': title === 'Louer' && !focused,
            }"
            @click="
              {
                focused = !focused
              }
            "
          >
            <p class="flex align-center">
              <span
                v-show="title === 'Acheter'"
                class="size-13 font-semibold block w-fit"
                >{{ title }}</span
              >
              <span
                v-show="title === 'Louer'"
                class="size-13 font-semibold block w-fit"
                >{{ title }}</span
              >
              <span
                v-show="title === 'Trouver une propriété'"
                class="size-13 font-semibold block w-fit"
                >{{ title }}</span
              >
              <svg
                class="w-4 h-4 relative transform top-03x ml-px"
                :class="{ 'rotate-180 trans-x300': focused }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
        </client-only>
      </div>
      <div v-show="focused" class="walele">
        <div
          v-show="title === 'Louer'"
          class="bg-white"
          :class="{
            'border-b': focused,
          }"
        >
          <a class="dropdown-item size-13 py-2 clickable">Location totale</a>
          <a class="dropdown-item size-13 py-2 clickable">Louer une part</a>
        </div>
        <div
          v-show="title === 'Acheter'"
          class="bg-white"
          :class="{
            'border-b': focused,
          }"
        >
          <a class="dropdown-item size-13 py-2 clickable">Achat total</a>
          <a class="dropdown-item size-13 py-2 clickable">Acheter une part</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Trouver une propriété',
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  computed: {},
  methods: {
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 1.8rem !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
