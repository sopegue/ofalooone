<template>
  <div class="py-10">
    <div
      id="contact-agent"
      class="w-full lg:w-2/5 md:w-3/5 sm:w-3/4 m-0-auto rounded bg-white"
    >
      <div class="bg-008489 px-4 py-3 rounded-tl rounded-tr">
        <h4 class="text-white size-20 font-semibold mb-1 text-c">
          Contactez Nous
        </h4>
        <span class="block px-2 sm:px-6 text-white leading-4 size-12"
          >Remplissez ce formulaire pour nous envoyer un message et nous vous
          répondrons dans les plus brefs délais possibles</span
        >
      </div>
      <div class="px-6 sm:px-10 pt-4 pb-5 flex flex-col space-y-3">
        <div class="w-full">
          <label for="username" class="size-13">Nom</label>
          <br />
          <input
            id="username"
            type="text"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div class="w-full">
          <label for="email" class="size-13">Email</label>
          <br />
          <input
            id="email"
            type="text"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div class="w-full">
          <label for="phone" class="size-13">Téléphone</label>
          <br />
          <input
            id="phone"
            type="tel"
            class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
          />
        </div>
        <div class="w-full">
          <label for="coment2x" class="size-14">Message</label>
          <div class="border rounded w-full">
            <textarea
              id="coment2x"
              wrap="hard"
              class="w-full aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
              placeholder="Ecrire un message"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div class="w-full pt-3">
          <button
            class="border-none w-full size-12 text-white px-5 pb-2 rounded button btn-008489 both-centers"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
