<template>
  <div class="py-25">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border m-0-auto lg:w-3/5 md:w-4/5 bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Lien de réinitialisation invalide
          </h4>
          <div class="appearZ">
            <span class="logo-color"
              >Désolé, ce lien de réinitialisation a expiré ou n'est pas valide.
              Vous pouvez envoyer un nouveau lien de réinitialisation en
              cliquant
              <a
                href="/pwd-forgotten"
                class="color-008489 font-semibold underline-hover"
                >ici</a
              >.</span
            >
          </div>
          <div class="w-fit m-0-auto">
            <div
              class="flex sm:flex-row flex-col align-center text-center sm:space-x-5 sm:space-y-0 space-y-5 size-13 mt-5"
            >
              <a
                href="/"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Aller à l'accueil</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Lien expiré | Ofaloo',
    }
  },
  beforeMount() {
    if (!localStorage.invalid) {
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped></style>
