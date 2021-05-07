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
            class="flex pb-8"
            :class="{
              'px-6 align-center space-x-5': size < 850 && size >= 467,
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
                <img class="rounded-full" src="/img/user.png" alt="Image" />
              </figure>
            </div>
            <div class="flex flex-col text-center pt-1.5">
              <span class="size-18 logo-color font-semibold"
                >{{ $linker.capitalize($auth.user.surname) }}
                {{ $linker.capitalize($auth.user.name) }}</span
              >
              <span class="size-12 color-363636f">{{ $auth.user.email }}</span>
            </div>
          </div>
          <div
            :class="{
              'py-2': size >= 850,
              'nav-desc flex align-center': size < 850,
              'justify-between px-2.5': size < 467,
            }"
          >
            <a
              href="/user"
              class="tyu size-13"
              prefetch
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  (curoute === '/user' || curoute === '/user/') && size >= 850,
                'font-semibold list-active':
                  (curoute === '/user' || curoute === '/user/') && size < 850,
              }"
              >Mes informations</a
            >
            <a
              href="/user/password"
              prefetch
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute.includes('/user/password') && size >= 850,
                'font-semibold list-active':
                  curoute.includes('/user/password') && size < 850,
              }"
              >Mot de passe</a
            >
            <a
              v-if="size > 425"
              href="/user/parametres"
              prefetch
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute.includes('/user/parametres') && size >= 850,
                'font-semibold list-active':
                  curoute.includes('/user/parametres') && size < 850,
              }"
              >Paramètres du compte</a
            >
            <a
              v-else
              href="/user/parametres"
              prefetch
              class="tyu size-13"
              :class="{
                'dropdown-item': size >= 850,
                'font-semibold color-008489 items-perm cursor-default':
                  curoute.includes('/user/parametres') && size >= 850,
                'font-semibold list-active':
                  curoute.includes('/user/parametres') && size < 850,
              }"
              >Paramètres</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full"
        :class="{
          'rounded-bl rounded-br pb-8 pt-8': size < 850,
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
  middleware: 'auth',
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
