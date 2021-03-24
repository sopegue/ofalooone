<template>
  <div class="modal ml0 is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content w-full h-full m-5 px-6 py-4">
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        class="box relative bg-white wmin-900 wmin-900s m-0-auto h-full px-5 aside"
      >
        <button
          class="modal-close z-20 is-large logo-color absolute top-0 right-0 mt-2 mr-4"
          aria-label="close"
          @click="close"
        ></button>
        <div
          class="flex flex-col bg-white w-full h-full relative py-3 px-2 mt-4 overflow-y-auto aside"
        >
          <div class="mb-1">
            <h4 class="logo-color size-16 font-semibold">Appartement</h4>
          </div>
          <div
            class="flex mb-5"
            :class="{
              'flex-col space-y-1': size < 556,
              'space-x-4 align-center justify-between': size >= 556,
            }"
          >
            <div class="flex align-center space-x-1 mt-1">
              <svg
                class="w-6 h-6 logo-color -ml-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span class="logo-color size-14"
                >Plateau Angle Avenue Terrasson de Fougères et Rue Gourgas</span
              >
            </div>
            <div class="flex align-center space-x-5">
              <button class="flex align-center hover-008489 space-x-1 mt-1">
                <svg
                  class="w-6 h-6 logo-color makeme-008489"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-width="1"
                    d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                  ></path>
                </svg>
                <span class="logo-color size-14 makeme-008489"
                  >Enregistrer</span
                >
              </button>
              <button class="flex align-center hover-008489 space-x-1 mt-1">
                <svg
                  class="w-6 h-6 logo-color -ml-1 makeme-008489"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span class="logo-color size-14 makeme-008489">Partager</span>
              </button>
            </div>
          </div>
          <div class="h-402max flex space-x-6">
            <div class="h-full w-full">
              <bigads
                :indexer="index"
                :ads="ads"
                class="h-full"
                @indexed="indexed"
              ></bigads>
            </div>
            <div v-show="size > 999" class="w180e flex flex-col space-y-3">
              <figure
                class="image appearZ clickable relative"
                :class="{ ' is-5by3': ads[next2].includes('images') }"
                @mouseover="
                  {
                    hovered1 = true
                  }
                "
                @click="
                  {
                    index = next2 + 1
                  }
                "
                @mouseleave="
                  {
                    hovered1 = false
                  }
                "
              >
                <div
                  v-show="hovered1"
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                ></div>
                <img
                  v-if="ads[next2].includes('images')"
                  :src="ads[next2]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <svg
                    class="w-8 h-8 absolute text-white both-centers -mt-3"
                    fill="#00000041"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[next2]" type="video/mp4" />
                  </video>
                </p>
              </figure>

              <figure
                class="image appearZ clickable relative"
                :class="{ ' is-5by3': ads[next1].includes('images') }"
                @mouseover="
                  {
                    hovered2 = true
                  }
                "
                @click="
                  {
                    index = next1 + 1
                  }
                "
                @mouseleave="
                  {
                    hovered2 = false
                  }
                "
              >
                <div
                  v-show="hovered2"
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                ></div>
                <img
                  v-if="ads[next1].includes('images')"
                  :src="ads[next1]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <svg
                    class="w-8 h-8 absolute text-white both-centers -mt-3"
                    fill="#00000041"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[next1]" type="video/mp4" />
                  </video>
                </p>
              </figure>
              <figure
                class="image appearZ relative"
                :class="{ ' is-5by3': ads[curindex].includes('images') }"
                @mouseover="
                  {
                    hovered3 = true
                  }
                "
                @click="
                  {
                    index = curindex + 1
                  }
                "
                @mouseleave="
                  {
                    hovered3 = false
                  }
                "
              >
                <div
                  class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
                >
                  <svg
                    class="w-8 h-8 text-white both-centers -mt-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <img
                  v-if="ads[curindex].includes('images')"
                  :src="ads[curindex]"
                  alt="Placeholder image"
                />
                <p v-else class="relative w-w280x126">
                  <video id="my-video" class="w-w280x126">
                    <source :src="ads[curindex]" type="video/mp4" />
                  </video>
                </p>
              </figure>
            </div>
          </div>
          <div
            class="flex mt-4"
            :class="{
              'flex-col space-y-6': size < 770,
              'space-x-6': size >= 770,
            }"
          >
            <div class="w-full flex flex-col space-y-4">
              <div class="w-full border-b pb-4">
                <div class="flex align-center space-x-4 justify-between">
                  <span class="logo-color font-medium size-15 block"
                    >90 000 000 FCFA - 100 000 000 000 FCFA, négociable</span
                  >
                  <nuxt-link
                    to="#"
                    class="px-3 py-1 self-start block w-fit h-fit rounded btn-008489s color-008489 font-semibold size-12 my-1 whitespace-no-wrap"
                    >Achat total</nuxt-link
                  >
                </div>
                <div class="my-2">
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                </div>
                <div class="flex align-center space-x-4 justify-between py-2">
                  <nuxt-link to="#" class="flex align-center space-x-2"
                    ><img
                      class="rounded-full is-40x40"
                      src="https://ofaloo.herokuapp.com/images/4.jpg"
                      alt="Placeholder image"
                    />
                    <span class="size-14 font-semibold over"
                      >John Wick</span
                    ></nuxt-link
                  >
                  <nuxt-link
                    to="#"
                    class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489"
                    >Super agent</nuxt-link
                  >
                </div>
                <div class="mt-1">
                  <div>
                    <span class="color-363636 size-12"> Il y a 3 jours</span>
                  </div>
                </div>
              </div>
              <div class="border-b pb-5">
                <h4 class="logo-color size-16 font-semibold mb-5">
                  Appartement Caractéristiques
                </h4>
                <div class="my-2">
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                  <img
                    src="https://ofaloo.herokuapp.com/images/prop.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
            <div class="w180e defss h-fit p-2 border rounded">
              <h4 class="logo-color border-b text-c size-13 pb-2 font-semibold">
                Contacter l'agent
              </h4>
              <div class="w-full py-3 flex flex-col space-y-2">
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
                  <label for="username" class="size-13">Nom</label>
                  <br />
                  <input
                    id="username"
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
                  <label for="request" class="size-14">Requête</label>
                  <br />
                  <smstype></smstype>
                </div>
                <div class="w-full">
                  <label for="coment2x" class="size-14">Message</label>
                  <div class="border rounded w-full">
                    <textarea
                      id="coment2x"
                      wrap="hard"
                      class="w-full aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
                      placeholder="Ecrire un message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="w-full">
                  <button
                    class="border-none w-full size-12 text-white px-5 pb-2 rounded button btn-008489 both-centers"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Smstype from '../dropdown/Smstype.vue'
import Bigads from '../propriete/Bigads.vue'
export default {
  components: { Bigads, Smstype },
  data() {
    return {
      inside: false,
      hovered1: false,
      hovered2: false,
      hovered3: false,
      zoom: false,
      active: 0,
      index: 1,
      ads: [
        'https://ofaloo.herokuapp.com/images/9.jpg',
        'https://ofaloo.herokuapp.com/images/1.jpg',
        'https://ofaloo.herokuapp.com/images/3.jpg',
        'https://ofaloo.herokuapp.com/images/4.jpg',
        'https://ofaloo.herokuapp.com/images/5.jpg',
        'https://ofaloo.herokuapp.com/videos/vid.mp4',
      ],
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    next1() {
      if (this.ads.length - 1 - this.curindex <= 1) {
        if (this.ads.length - 1 - this.curindex === 1)
          return this.ads.length - 1
        if (this.ads.length - 1 - this.curindex === 0) return 0
      }
      return this.curindex + 1
    },
    next2() {
      if (this.ads.length - 1 - this.curindex <= 1) {
        if (this.ads.length - 1 - this.curindex === 1) return 0
        if (this.ads.length - 1 - this.curindex === 0) return 1
      }
      return this.curindex + 2
    },
    curindex() {
      return this.index - 1
    },
  },
  methods: {
    hidebody() {
      document.body.style = 'overflow: hidden !important;'
    },
    close() {
      this.$emit('close_quick')
    },
    indexed(val) {
      this.index = val
    },
  },
}
</script>
<style scoped>
.zoomimg {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}
.haszoomed {
  transform: scale(2) !important;
  cursor: zoom-out !important;
}
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>
