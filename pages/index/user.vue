<template>
  <div
    class="py-8"
    :class="{
      'bg-white px-0': size < 467,
    }"
  >
    <div
      class="flex"
      :class="{
        'flex-col': size < 850,
        'space-x-8': size >= 850,
      }"
    >
      <div
        class="bg-white pt-6 h-fit"
        :class="{
          'flex-col rounded-tr rounded-tl': size < 850,
          'border rounded shadow-sm': size >= 850,
          ' w380 sticky top-12xse': size >= 850,
        }"
      >
        <div
          class="w-full"
          :class="{
            'border-b': size < 850,
            ' m-0-auto': size >= 850 || size < 467,
          }"
        >
          <div
            class="flex pb-5"
            :class="{
              'px-5 space-x-5': size < 850,
              'flex-col space-y-2.5 justify-center border-b':
                size >= 850 || size < 467,
            }"
          >
            <div
              class="w-fit"
              :class="{
                'm-0-auto': size >= 850 || size < 467,
              }"
            >
              <figure class="image relative rounded-full is-110x110 m-0-auto">
                <img
                  class="rounded-full"
                  src="https://ofaloo.herokuapp.com/images/4.jpg"
                  alt="Placeholder image"
                />
                <button
                  class="absolute bottom-0 right-0 -mr-10.5 rounded-full border-none p-3 button is-lightsz"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z"
                      stroke="#4A5568"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <!-- <div
                  v-if="size < 850 && size > 467"
                  class="absolute bottom-0 right-0 flex space-x-4 -mr-62 mb-2"
                >
                  <button class="button is-light size-12 rounded px-5">
                    Annuler
                  </button>
                  <button
                    class="button btn-008489 text-white size-12 rounded px-5"
                  >
                    Enregister
                  </button>
                </div> -->
              </figure>
              <!-- <div
                v-if="size > 850 || size < 467"
                class="flex space-x-4 pt-5 pb-3"
              >
                <button class="button is-light size-12 rounded px-5">
                  Annuler
                </button>
                <button
                  class="button btn-008489 text-white size-12 rounded px-5"
                >
                  Enregister
                </button>
              </div> -->
            </div>
            <div class="flex flex-col text-center">
              <span class="size-18 logo-color font-semibold"
                >Yaya Sopegue Soro</span
              >
              <span class="size-12 color-363636f"
                >yayasopeguesoro@gmail.com</span
              >
            </div>
          </div>
          <div
            :class="{
              'py-2': size >= 850,
              'nav-desc flex align-center': size < 850,
              'justify-between': size < 467,
            }"
          >
            <nuxt-link
              to="/user"
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute === '/user' && size >= 850,
                'font-semibold list-active': curoute === '/user' && size < 850,
              }"
              >Mes informations</nuxt-link
            >
            <nuxt-link
              to="/user/password"
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute === '/user/password' && size >= 850,
                'font-semibold list-active':
                  curoute === '/user/password' && size < 850,
              }"
              >Mot de passe</nuxt-link
            >
            <nuxt-link
              v-if="size > 425"
              to="/user/parametres"
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute === '/user/parametres' && size >= 850,
                'font-semibold list-active':
                  curoute === '/user/parametres' && size < 850,
              }"
              >Paramètres du compte</nuxt-link
            >
            <nuxt-link
              v-else
              to="/user/parametres"
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute === '/user/parametres' && size >= 850,
                'font-semibold list-active':
                  curoute === '/user/parametres' && size < 850,
              }"
              >Paramètres</nuxt-link
            >
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full"
        :class="{
          'rounded-bl rounded-br': size < 850,
          'border rounded shadow-sm': size >= 850,
          'px-8 py-4': size >= 467,
          'px-4 py-4': size < 467,
        }"
      >
        <nuxt-child />
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
