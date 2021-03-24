<template>
  <div class="bg-white w-full h-full relative">
    <div
      class="flex flex-col py-10"
      :class="{
        'px-10': size >= 1050 && size < 1200,
        'px-0': size < 1050,
        'px-24': size >= 1200,
      }"
    >
      <div class="mb-1">
        <h4 class="logo-color size-18 font-semibold">Appartement</h4>
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
          <span class="logo-color size-15"
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
            <span class="logo-color size-14 makeme-008489">Enregistrer</span>
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
      <div
        class="flex"
        :class="{
          ' space-x-6 h-402max': size >= 767,
          'flex-col space-y-3': size < 767,
        }"
      >
        <div class="h-full w-full">
          <bigadsbig
            :ads="ads"
            class="h-402max"
            @indexed="indexed"
            @show_quicks="show_quicks"
          ></bigadsbig>
        </div>
        <div
          class="flex flex-col space-y-3"
          :class="{
            w180e: size >= 767,
          }"
        >
          <figure
            class="image is-5by3 appearZ clickable relative"
            @mouseover="
              {
                hovered1 = true
              }
            "
            @click="setindex(2)"
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
            <img :src="ads[1]" alt="Placeholder image" />
          </figure>

          <figure
            class="image is-5by3 appearZ clickable relative"
            @mouseover="
              {
                hovered2 = true
              }
            "
            @click="setindex(3)"
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
            <img :src="ads[2]" alt="Placeholder image" />
          </figure>
          <figure
            class="image is-5by3 clickable appearZ relative"
            @mouseover="
              {
                hovered3 = true
              }
            "
            @click="setindex(4)"
            @mouseleave="
              {
                hovered3 = false
              }
            "
          >
            <div
              v-if="ads.length > 3 || hovered3"
              class="absolute appearZ z-10 top-0 left-0 w-full h-full bg-black-trer"
            >
              <span
                v-if="ads.length > 3"
                class="font-semibold size-36 text-white w-fit h-fit block vertical-center m-0-auto"
                >+{{ ads.length - 3 }}</span
              >
            </div>
            <img :src="ads[3]" alt="Placeholder image" />
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
        <div class="w-full pb-4">
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
          <div class="py-3">
            <a
              href="#contact-agent"
              class="button border-none size-12 text-white px-5 pb-2 rounded button btn-008489"
            >
              Envoyer un message
            </a>
          </div>
          <div class="mt-1">
            <div>
              <span class="color-363636 size-12"> Il y a 3 jours</span>
            </div>
          </div>
        </div>

        <div class="w180e defss h-fit p-2 border rounded">
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
          <div class="w-full pt-1">
            <a
              href="#contact-agent"
              class="button block border-none w-full size-12 text-white px-5 pb-2 rounded button btn-008489 both-centers"
            >
              Contacter agent
            </a>
          </div>
        </div>
      </div>
      <div class="w-full border-t pt-4">
        <div>
          <h4 class="logo-color size-16 font-semibold mb-5">
            Localisation Map
          </h4>
          <div class="my-2">
            <img
              class="m-0-auto"
              src="https://ofaloo.herokuapp.com/images/4.png"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full flex mt-4 flex-col space-y-6 border-b border-t pt-5 pb-5"
      >
        <div
          class="flex"
          :class="{
            'flex-col space-y-3': size < 770,
          }"
        >
          <div class="w-full">
            <div>
              <h4 class="logo-color size-16 font-semibold mb-5">
                Informations Appartement
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
          <div class="w-full">
            <div>
              <h4 class="logo-color size-16 font-semibold mb-5">
                Caractéristiques Appartement
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
        </div>
      </div>
      <div class="flex w-full">
        <div id="contact-agent" class="w-full mt-3 h-fit p-2">
          <h4 class="logo-color size-16 font-semibold mb-5">
            Contacter l'agent
          </h4>
          <div
            class="flex"
            :class="{
              'flex-col space-y-8': size < 640,
              'space-x-5 justify-between': size >= 640,
            }"
          >
            <div
              class="w-full lg:w-2/5 md:w-3/5 sm:w-3/4 border rounded px-6 pt-4 pb-10 flex flex-col space-y-2"
            >
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
                    rows="5"
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
            <div
              class="flex align-center border justify-between h-16 rounded bg-white"
              :class="{
                'w-full': size < 424,
                'h-centers': size < 640,
                w360: size >= 424,
              }"
            >
              <div class="pl-3">
                <h4 class="logo-color block size-14 font-semibold">
                  Vendez et louez vos propriétés
                </h4>
                <span class="logo-color size-14">Devenir agent sur Ofaloo</span>
              </div>
              <div>
                <button class="button no-outlines border-transparent">
                  <svg
                    class="w-9 h-9 transform -rotate-90 logo-color"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <imgmodal
      v-if="quick"
      :ads="ades"
      :activeindex="index"
      @close_quick="close_quick"
    ></imgmodal>
  </div>
</template>

<script>
import Smstype from '@/components/dropdown/Smstype'
import Bigadsbig from '~/components/propriete/Bigadsbig.vue'
import Imgmodal from '~/components/modal/Imgmodal.vue'

export default {
  components: { Smstype, Bigadsbig, Imgmodal },
  data() {
    return {
      inside: false,
      hovered1: false,
      hovered2: false,
      hovered3: false,
      zoom: false,
      quick: false,
      active: 0,
      index: 1,
      ades: [
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
    ads() {
      return this.ades.filter((post) => {
        return post.includes('images')
      })
    },
    size() {
      return this.$store.state.size
    },
    curindex() {
      return this.index - 1
    },
  },
  methods: {
    close_quick() {
      this.quick = false
    },
    show_quick() {
      this.quick = true
    },
    show_quicks(val) {
      this.index = val
      this.quick = true
    },
    hidebody() {
      document.body.style = 'overflow: hidden !important;'
    },
    close() {
      this.$emit('close_quick')
    },
    setindex(val) {
      this.index = val
      this.show_quick()
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
