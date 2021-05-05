<template>
  <div class="py-18">
    <div class="w-full flex flex-col">
      <div class="oath-log flex flex-col space-y-10">
        <div
          class="border bg-white rounded px-5 sm:px-8 py-5 flex flex-col space-y-2"
        >
          <h4 class="size-16 logo-color font-semibold mb-2">
            Lien de verification invalide
          </h4>
          <div class="appearZ">
            <span class="logo-color"
              >Désolé, ce lien de vérification n'est plus valide. Vous pouvez
              vérifier votre adresse email en utilisant le bon lien ou en
              envoyant un nouveau lien de vérification à partir de la page des
              paramètres de votre compte.</span
            >
          </div>
          <div class="w-fit m-0-auto">
            <div
              class="flex sm:flex-row flex-col align-center text-center sm:space-x-5 sm:space-y-0 space-y-5 size-13 mt-5"
            >
              <a
                href="/user/parametres"
                class="button btn-008489 text-white rounded size-12 px-10"
                >Aller aux paramètres du compte</a
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
  beforeMount() {
    if (!localStorage.invalid) {
      this.$router.replace('/')
    }
  },
}
</script>

<style scoped></style>
