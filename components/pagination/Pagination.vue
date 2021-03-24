<template>
  <div class="h-16">
    <div
      v-if="size > 640"
      class="h-fit w-fit logo-color flex align-center space-x-4 vertical-center m-0-auto"
    >
      <button
        v-if="page > 1"
        class="flex align-center space-x-1 bg-transparent border border-x008489 px-2 no-outlines rounded py-1"
        :class="{
          'btn-008489': page > 1,
          'cursor-default': page <= 1,
        }"
        @click="move('left')"
      >
        <svg
          class="w-3 h-3 mt-px text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="size-12 text-white">Previous</span>
      </button>
      <div v-if="pagination.length <= 9" class="flex align-center space-x-1">
        <div v-for="(i, j) in pagination" :key="j">
          <button
            class="no-outlines pb-px rounded w-8x border border-x008489"
            :class="{
              'bg-008489 btn-paginations': i === page,
              'btn-pagination': i !== page,
            }"
            @click="
              {
                current = i
              }
            "
          >
            <span class="size-12">{{ i }}</span>
          </button>
        </div>
      </div>
      <div v-else>
        <div v-if="page < 4" class="flex align-center space-x-1">
          <div v-for="(i, j) in pagination" :id="'pag' + i" :key="j">
            <button
              v-if="i <= 4 + page - 1"
              class="no-outlines pb-px rounded w-8x border border-x008489"
              :class="{
                'bg-008489 btn-paginations': i === page,
                'btn-pagination': i !== page,
              }"
              @click="
                {
                  current = i
                }
              "
            >
              <span class="size-12">{{ i }}</span>
            </button>
            <button
              v-if="i === 1 && page >= 5"
              class="no-outlines pb-px rounded cursor-default"
            >
              <span class="size-12">•••</span>
            </button>
            <button
              v-if="Math.abs(i - pagination[pagination.length - 1]) == 2"
              class="no-outlines pb-px rounded cursor-default"
            >
              <span class="size-12">•••</span>
            </button>
            <button
              v-if="Math.abs(i - pagination[pagination.length - 1]) < 2"
              class="no-outlines pb-px rounded w-8x border border-x008489"
              :class="{
                'bg-008489 btn-paginations': i === page,
                'btn-pagination': i !== page,
              }"
              @click="
                {
                  current = i
                }
              "
            >
              <span class="size-12">{{ i }}</span>
            </button>
          </div>
        </div>
        <div
          v-if="page >= 4 && pagination[pagination.length - 1] - page > 5"
          class="flex align-center space-x-1"
        >
          <div v-for="(i, j) in pagination" :id="'pagi' + i" :key="j">
            <button
              v-if="i === 2"
              class="no-outlines pb-px rounded cursor-default"
            >
              <span class="size-12">•••</span>
            </button>
            <button
              v-if="i === 1 || (i >= page - 1 && i <= page + 2)"
              class="no-outlines pb-px rounded w-8x border border-x008489"
              :class="{
                'bg-008489 btn-paginations': i === page,
                'btn-pagination': i !== page,
              }"
              @click="
                {
                  current = i
                }
              "
            >
              <span class="size-12">{{ i }}</span>
            </button>
            <button
              v-if="Math.abs(i - pagination[pagination.length - 1]) == 2"
              class="no-outlines pb-px rounded cursor-default"
            >
              <span class="size-12">•••</span>
            </button>
            <button
              v-if="Math.abs(i - pagination[pagination.length - 1]) < 2"
              class="no-outlines pb-px rounded w-8x border border-x008489"
              :class="{
                'bg-008489 btn-paginations': i === page,
                'btn-pagination': i !== page,
              }"
              @click="
                {
                  current = i
                }
              "
            >
              <span class="size-12">{{ i }}</span>
            </button>
          </div>
        </div>
        <div
          v-if="pagination[pagination.length - 1] - page <= 5"
          class="flex align-center space-x-1"
        >
          <div v-for="(i, j) in pagination" :id="'pagin' + i" :key="j">
            <button
              v-if="i === 2"
              class="no-outlines pb-px rounded cursor-default"
            >
              <span class="size-12">•••</span>
            </button>
            <button
              v-if="i === 1 || i >= end"
              class="no-outlines pb-px rounded w-8x border border-x008489"
              :class="{
                'bg-008489 btn-paginations': i === page,
                'btn-pagination': i !== page,
              }"
              @click="
                {
                  current = i
                }
              "
            >
              <span class="size-12">{{ i }}</span>
            </button>
          </div>
        </div>
      </div>
      <button
        v-if="page < pagination[pagination.length - 1]"
        class="flex align-center space-x-1 bg-transparent border border-x008489 px-4 no-outlines rounded py-1"
        :class="{
          'btn-008489': page < pagination[pagination.length - 1],
          'cursor-default': page >= pagination[pagination.length - 1],
        }"
        @click="move('right')"
      >
        <span class="size-12 text-white">Next</span>
        <svg
          class="w-3 h-3 mt-px text-white transform rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div
      v-else
      class="h-fit w-full mt-4 logo-color flex align-center justify-between space-x-4"
    >
      <button
        class="flex align-center space-x-1 bg-transparent border border-x008489 px-2 no-outlines rounded py-1"
        :class="{
          'btn-pagination': page > 1,
          'cursor-default': page <= 1,
        }"
        @click="move('left')"
      >
        <svg
          class="w-3 h-3 mt-px text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="size-12">Previous</span>
      </button>
      <div>
        <span class="font-semibold color-008489"
          >{{ page }}/{{ pagination.length }}</span
        >
      </div>
      <button
        class="flex align-center space-x-1 bg-transparent border border-x008489 px-4 no-outlines rounded py-1"
        :class="{
          'btn-pagination': page < pagination[pagination.length - 1],
          'cursor-default logo-color':
            page >= pagination[pagination.length - 1],
        }"
        @click="move('right')"
      >
        <span class="size-12">Next</span>
        <svg
          class="w-3 h-3 mt-px text-gray-700 transform rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    }
  },
  computed: {
    page() {
      return this.current
    },
    size() {
      return this.$store.state.size
    },
    loading() {
      return this.$store.state.domloading === true
    },
    end() {
      return this.pagination[this.pagination.length - 1] - 6
    },
  },
  watch: {
    loading(newval, oldval) {
      if (newval === false || oldval === false) {
        this.hidecontent()
      }
    },
  },
  updated() {
    if (!this.loading) this.hidecontent()
  },
  methods: {
    hidecontent() {
      const el = document.querySelectorAll('[id ^= "pag"]')
      Array.prototype.forEach.call(el, callback)

      function callback(element, iterator) {
        const myel = document.getElementById(element.id)
        myel.style.display = 'block'
        if (myel.clientWidth === 0) myel.style.display = 'none'
      }
    },
    move(value) {
      if (value === 'left') {
        if (this.page > 1) {
          this.current--
        }
      } else if (this.page < this.pagination[this.pagination.length - 1])
        this.current++
      this.hidecontent()
    },
  },
}
</script>

<style scoped>
.btn-pagination:hover {
  background-color: #004e66 !important;
  color: white !important;
}
.btn-pagination:hover span,
.btn-pagination:hover svg {
  color: white !important;
}
.btn-paginations span {
  color: white !important;
}
</style>
