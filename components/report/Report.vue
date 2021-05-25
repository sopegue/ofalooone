<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="box px-0 pt-3 pb-0">
        <div class="border-b pb-3">
          <h4
            v-if="!success"
            class="font-semibold flex items-center justify-center space-x-2 size-18 logo-color text-center"
          >
            <svg
              class="w-5 h-5 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              ></path>
            </svg>
            <span class="size-18 font-semibold logo-color">Signalement</span>
          </h4>
          <h4
            v-if="success"
            class="font-semibold flex items-center justify-center space-x-2 size-18 logo-color text-center"
          >
            <svg
              class="w-5 h-5 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="size-18 font-semibold logo-color"
              >Merci pour votre signalement</span
            >
          </h4>
        </div>
        <div v-if="error" class="w-full top-0 appearZ pt-3 px-5">
          <span
            class="block rounded border border-red-600 text-red-600 text-c py-1 px-10 text-white font-semibold size-12"
            >Oops désolé, une erreur s'est produite</span
          >
        </div>
        <div v-if="!success" class="border-b px-4 py-3">
          <span class="font-semibold size-16 logo-color text-center"
            >Veuillez sélectionner la raison de votre signalement</span
          >
          <span class="block"
            >Si vous pensez que cette propriété n'a rien à faire ici, veuillez
            choisir une option parmi les suivantes pour signaler la
            propriété.</span
          >
          <div class="flex flex-wrap pt-1">
            <button
              v-for="(rep, i) in report"
              :key="i"
              class="button mx-2 my-2 is-light rounded-full px-4"
              :class="{
                'flex cursor-default items-center btn-008489 color-white space-x-2':
                  rep === signal,
              }"
              @click="
                {
                  signal = rep
                }
              "
            >
              <span :class="{ 'color-white': rep === signal }">{{ rep }}</span>
              <svg
                v-if="rep === signal"
                class="w-5 h-5 mt-px"
                :class="{ 'color-white': rep === signal }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div v-if="success" class="border-b px-4 py-3">
          <span class="block text-center"
            >Vous avez signalé cette propriété pour</span
          >
          <div class="flex justify-center pt-1">
            <button
              class="button my-2 flex cursor-default items-center bg-008489 color-white space-x-2 rounded-full px-4"
            >
              <span class="color-white size-13">{{ signal }}</span>
              <svg
                class="w-5 h-5 mt-px color-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
          <div v-if="content !== ''">
            <span class="font-semibold size-15 logo-color text-center"
              >Contenu</span
            >
            <span class="block size-15">{{ content }}</span>
          </div>
        </div>
        <div v-if="signal === 'Autre' && !success" class="autre border-b">
          <textarea
            id="coment2x"
            v-model="content"
            wrap="hard"
            class="w-full aside noscroll toyo size-16 px-5 py-1 text-gray-700 focus:outline-none mt-1"
            placeholder="Que voulez-vous signaler ? (optionnel)"
            rows="4"
          ></textarea>
        </div>
        <div class="signaler py-3 px-4 flex justify-end">
          <button
            v-if="!success"
            class="button border-0 rounded btn-008489 text-white size-13 py-1 px-4"
            :class="{ noclick: signal === '' || onsent }"
            @click="send"
          >
            <span class="text-white size-13">Signaler la propriété</span>
            <span v-if="onsent" class="w-fit h-fit pl-1"
              ><i
                class="animate-spin fas fa-circle-notch color-white mt-0.5"
              ></i
            ></span>
          </button>
          <button
            v-if="success"
            class="button border-0 rounded btn-008489 text-white size-13 py-1 px-4"
            @click="close"
          >
            <span class="text-white size-13">Fermer</span>
          </button>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large color-white"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
import { report } from '@/signalement/report'
export default {
  data() {
    return {
      report,
      signal: '',
      content: '',
      sending: false,
      err: false,
      sent: false,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    prop() {
      return this.$store.state.prop
    },
    onsent() {
      return this.sending === true
    },
    success() {
      return this.sent === true
    },
    error() {
      return this.err === true
    },
  },
  methods: {
    close() {
      this.$store.commit('set_report', false)
      document.body.style.overflow = 'visible'
    },
    async send() {
      this.sending = true
      this.err = false
      try {
        const data = await this.$axios.$post('report', {
          user: this.$auth.loggedIn ? this.$auth.user.id : null,
          prop: this.prop,
          signal: this.signal,
          content: this.content,
        })
        if (data.status === '201') {
          this.sent = true
        } else {
          this.err = true
        }
        this.sending = false
      } catch (error) {
        this.sending = false
        this.err = true
        console.log('error on reporting')
      }
    },
  },
}
</script>

<style scoped>
.modal-close::after,
.modal-close::before {
  background-color: rgb(230, 230, 230) !important;
  content: '';
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
@media screen and (max-width: 600px) {
  .modal-close::after,
  .modal-close::before {
    background-color: rgb(48, 48, 48) !important;
  }
}
</style>
