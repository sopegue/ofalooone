<template>
  <div>
    <h4 class="logo-color size-14 font-semibold border-b pb-1">
      Paramètres du compte
    </h4>
    <div class="mt-5">
      <div>
        <label class="flex align-center container pb-1"
          ><span class="size-13 -mt-012x block self-end"
            >Mettre à jour la liste d'enregistrements (Supprime les propriétés
            vendues ou louées)</span
          >
          <input
            v-model="checkedCateg"
            type="checkbox"
            :value="'auto-update'"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="pt-2">
        <h4 class="logo-color size-13 font-semibold pb-1">
          Fermeture de compte
        </h4>
        <div class="pt-1 w-fit">
          <button
            class="border-none size-12 w-fit text-white py-1 px-10 pb-2 rounded button bghover-008489er"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedCateg: [],
    }
  },
}
</script>

<style scoped></style>
