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
          v-if="dataOk"
          class="flex flex-col bg-white w-full h-full relative py-3 sm:px-8 px-0.5 mt-4 overflow-y-auto aside"
        >
          <div class="mb-1 flex justify-between">
            <h4 class="logo-color size-18 font-semibold">
              {{ property.property.type }}
            </h4>
            <a class="color-008489 underline-hover clickable" @click="report"
              >Signaler</a
            >
          </div>
          <div
            class="flex mb-5"
            :class="{
              'flex-col space-y-3': size < 556,
              'space-x-4 align-center justify-between': size >= 556,
            }"
          >
            <div class="flex space-x-1 mt-1">
              <svg
                class="w-6 h-6 min-h-6 min-w-6 logo-color -ml-px"
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
                >{{ property.adresse }}, {{ property.ville }}</span
              >
            </div>
            <!-- here for save and non saved property -->
            <div class="relative">
              <div
                v-if="notification"
                class="absolute rounded w-fit top-7.5 left-0 appearZ z-15"
              >
                <span
                  class="block text-c bg-green-600 rounded py-1.5 px-4 text-white font-semibold size-11"
                  >Enregistrée √</span
                >
              </div>
              <div class="flex align-center space-x-5">
                <client-only>
                  <button
                    class="flex align-center hover-008489 space-x-1 mt-1"
                    @click="savelist"
                  >
                    <svg
                      v-if="asaved"
                      class="w-5 h-5 logo-color"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-width="1"
                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                      ></path>
                    </svg>
                    <svg
                      v-if="adesaved"
                      class="w-5 h-5 logo-color"
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
                    <span
                      v-if="adesaved"
                      class="logo-color underline-hover size-14 makeme-008489"
                      >Enregistrer</span
                    >
                    <span
                      v-if="asaved"
                      class="logo-color underline-hover size-14 makeme-008489"
                      >Enregistrée</span
                    >
                  </button>
                </client-only>
                <button
                  v-click-outside="hideshare"
                  class="flex align-center relative hover-008489 space-x-1 mt-1"
                  @click="
                    {
                      share = !share
                    }
                  "
                >
                  <svg
                    class="w-5 h-5 logo-color -ml-1 makeme-008489"
                    stroke="none"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569
                     2 15 2C13.3431 2 12 3.34315 12 5C12 5.12548 12.0077 
                     5.24917 12.0227 5.37061L7.08259 7.84064C6.54303 7.32015 
                     5.8089 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 
                     13 5 13C5.80892 13 6.54306 12.6798 7.08263 12.1593L12.0227
                      14.6293C12.0077 14.7508 12 14.8745 12 15C12 16.6569 13.3431 
                      18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 
                      12C14.1911 12 13.457 12.3201 12.9174 12.8406L7.97733 10.3706C7.9923 10.2492 8 10.1255 8 10C8 9.8745 7.99229 9.7508 7.97733 9.62934L12.9174 7.15932C13.4569 7.67984 14.1911 8 15 8Z"
                      fill="#2d3748"
                    />
                  </svg>
                  <div
                    v-show="share"
                    class="absolute bg-white top-0 mt-6 z-20 appearZ w-fit flex align-center space-x-4 border py-2 px-5 rounded"
                    :class="{ 'right-0': size >= 556, 'left-0': size < 556 }"
                  >
                    <a
                      class="twitter-share-button"
                      :href="`https://twitter.com/intent/tweet?text=https://www.ofaloo.com/propriete/?wyzes=${property.property.id}`"
                      data-size="large"
                      title="Partager sur Twitter"
                      target="_blank"
                      ><i class="fab fa-twitter size-20 clickable twi-col"></i
                    ></a>
                    <a title="Partager sur Facebook" target="_blank"
                      ><iframe
                        :src="`https://www.facebook.com/plugins/share_button.php?href=https://www.ofaloo.com/propriete/?wyzes=${property.property.id}&layout=button&size=small&width=81&height=20&appId`"
                        width="81"
                        height="20"
                        style="border: none; overflow: hidden"
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe
                    ></a>
                    <a
                      v-show="size < 640"
                      :href="mail"
                      title="Partager par email"
                      ><svg
                        class="w-7 min-w-7 h-7 min-h-7 logo-color"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                          fill="#004e66"
                        />
                        <path
                          d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                          fill="#004e66"
                        />
                      </svg>
                    </a>
                  </div>
                  <span class="logo-color size-14 makeme-008489 underline-hover"
                    >Partager</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="h-402max flex space-x-6">
            <div class="h-full relative w-full">
              <div
                v-if="property.property.sold === 'yes'"
                class="absolute z-10 bottom-0 left-0"
              >
                <button
                  class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
                >
                  Vendue
                </button>
              </div>
              <div
                v-if="property.property.rent === 'yes'"
                class="absolute z-10 bottom-0 left-0"
              >
                <button
                  class="border-none size-12 text-white rounded ml-2 mb-2 button bg-black-tre both-centers"
                >
                  Louée
                </button>
              </div>
              <bigads
                :ids="property.property.id"
                :indexer="index"
                :ads="images"
                :link="property.links !== null"
                class="h-full"
                @indexed="indexed"
              ></bigads>
            </div>
            <div
              v-show="size > 999"
              class="w180e h-402max flex flex-col space-y-3"
            >
              <figure
                class="image appearZ clickable relative is-5by3s"
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
                <img :src="images[next2]" alt="Image" />
              </figure>

              <figure
                class="image appearZ clickable relative is-5by3s"
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
                <img :src="images[next1]" alt="Image" />
              </figure>
              <figure
                class="image appearZ relative is-5by3s"
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
                    class="w-14 h-14 text-white both-centers -mt-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <img :src="images[curindex]" alt="Image" />
              </figure>
            </div>
          </div>
          <div
            class="flex mt-4"
            :class="{
              'flex-col space-y-6': size < 999,
              'space-x-6': size >= 999,
            }"
          >
            <div class="w-full flex flex-col space-y-4">
              <div class="w-full border-b pb-4">
                <div class="flex align-center space-x-4 justify-between">
                  <div>
                    <span
                      v-if="property.property.price_fixed.toString() !== '0'"
                      class="logo-color font-medium size-15 block"
                      :class="{
                        'w-max-96 over': size > 599,
                      }"
                      >{{
                        $linker.formatMoney(
                          property.property.price_fixed.toString()
                        )
                      }}
                      FCFA
                      <span
                        v-if="
                          property.property.proposition.includes('Location')
                        "
                        class="logo-color font-medium size-15"
                      >
                        {{ property.property.location_freq }}</span
                      ><span
                        v-if="property.property.negociable === 'yes'"
                        class="logo-color font-medium size-15"
                      >
                        , négociable</span
                      ></span
                    >
                    <span
                      v-else-if="
                        property.property.price_min.toString() !== '0' &&
                        property.property.price_max.toString() !== '0'
                      "
                      class="logo-color font-medium size-15 block"
                      :class="{
                        'w-max-96 over': size > 599,
                      }"
                      >{{
                        $linker.formatMoney(
                          property.property.price_min.toString()
                        )
                      }}
                      FCFA -
                      {{
                        $linker.formatMoney(
                          property.property.price_max.toString()
                        )
                      }}
                      FCFA
                      <span
                        v-if="
                          property.property.proposition.includes('Location')
                        "
                        class="logo-color font-medium size-15"
                      >
                        {{ property.property.location_freq }}</span
                      ><span
                        v-if="property.property.negociable === 'yes'"
                        class="logo-color font-medium size-15"
                      >
                        , négociable</span
                      ></span
                    >
                    <span
                      v-else-if="property.property.price_min.toString() === '0'"
                      class="logo-color font-medium size-15 block"
                      :class="{
                        'w-max-96 over': size > 599,
                      }"
                      >Jusqu'à
                      {{
                        $linker.formatMoney(
                          property.property.price_max.toString()
                        )
                      }}
                      FCFA
                      <span
                        v-if="
                          property.property.proposition.includes('Location')
                        "
                        class="logo-color font-medium size-15"
                      >
                        {{ property.property.location_freq }}</span
                      ><span
                        v-if="property.property.negociable === 'yes'"
                        class="logo-color font-medium size-15"
                      >
                        , négociable</span
                      ></span
                    >
                    <span
                      v-else
                      class="logo-color font-medium size-15 block"
                      :class="{
                        'w-max-96 over': size > 599,
                      }"
                      >A partir de
                      {{
                        $linker.formatMoney(
                          property.property.price_min.toString()
                        )
                      }}
                      FCFA
                      <span
                        v-if="
                          property.property.proposition.includes('Location')
                        "
                        class="logo-color font-medium size-15"
                      >
                        {{ property.property.location_freq }}</span
                      ><span
                        v-if="property.property.negociable === 'yes'"
                        class="logo-color font-medium size-15"
                      >
                        , négociable</span
                      ></span
                    >
                  </div>
                  <div>
                    <a
                      v-if="property.property.proposition === 'Vente totale'"
                      title="Le prix indiqué représente le montant à payer pour toute la propriété"
                      class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                      >Achat total</a
                    ><a
                      v-if="property.property.proposition === 'Vente partielle'"
                      :title="
                        'Le prix indiqué représente ' +
                        property.property.percentage_part.toString() +
                        '%' +
                        ' de la propriété (la part disponible)'
                      "
                      class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                      >Acheter une part ({{
                        property.property.percentage_part.toString() + '%'
                      }})</a
                    >
                    <a
                      v-if="property.property.proposition === 'Location totale'"
                      title="Le prix indiqué représente le montant à payer pour toute la propriété"
                      class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                      >Location totale</a
                    >
                    <a
                      v-if="
                        property.property.proposition === 'Location partielle'
                      "
                      :title="
                        'Le prix indiqué représente ' +
                        property.property.percentage_part.toString() +
                        '%' +
                        ' de la propriété (la part disponible)'
                      "
                      class="px-3 py-1 z-20 block w-fit rounded btn-008489s color-008489 font-semibold size-11 my-1"
                      >Louer une part ({{
                        property.property.percentage_part.toString() + '%'
                      }})</a
                    >
                  </div>
                </div>
                <div class="mt-2">
                  <div class="flex align-center space-x-3.5">
                    <div
                      v-if="property.property.bed > 0"
                      :title="property.property.bed + ' pièce(s)'"
                      class="flex align-center space-x-1.5"
                    >
                      <span>
                        <i class="fas size-16 logo-color fa-bed"></i>
                      </span>
                      <span class="logo-color">{{
                        property.property.bed
                      }}</span>
                    </div>
                    <div
                      v-if="property.property.bath > 0"
                      :title="property.property.bath + ' salles(s) de bain(s)'"
                      class="flex align-center space-x-1.5"
                    >
                      <span>
                        <i class="fas size-16 logo-color fa-shower"></i>
                      </span>
                      <span class="logo-color">{{
                        property.property.bath
                      }}</span>
                    </div>
                    <div
                      v-if="property.property.garage > 0"
                      :title="property.property.garage + ' garage(s)'"
                      class="flex align-center space-x-1.5"
                    >
                      <span>
                        <i class="fas size-16 logo-color fa-warehouse"></i>
                      </span>
                      <span class="logo-color">{{
                        property.property.garage
                      }}</span>
                    </div>
                    <div
                      v-if="property.property.taille > 0"
                      :title="'La taille de la propriété'"
                      class="flex align-center space-x-1.5"
                    >
                      <span>
                        <i class="fas size-16 logo-color fa-ruler-vertical"></i>
                      </span>
                      <span class="logo-color"
                        >{{ property.property.taille }} m²</span
                      >
                    </div>
                  </div>
                </div>
                <div v-if="property.property.rent === 'yes'" class="w-fit mt-3">
                  <span class="font-semibold size-13 logo-color flex"
                    ><svg
                      class="mr-1.5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="#2d3748"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Disponible à partir du
                    {{ $moment(property.property.fin_loc).format('LL') }}</span
                  ><br />
                </div>
                <div
                  :class="{
                    'pb-2': property.property.rent === 'yes',
                    'py-2': property.property.rent !== 'yes',
                  }"
                >
                  <span class="color-363636 size-11">{{
                    $moment(property.property.updated_at).format('LL')
                  }}</span>
                </div>
                <div class="flex align-center space-x-4 justify-between py-2">
                  <a
                    :href="'/recherche?ofloowa=' + property.property.user_id"
                    class="flex align-center space-x-2"
                    ><img
                      class="rounded-full is-40x40 border"
                      :src="
                        'https://ofaloo.blob.core.windows.net/ofaloo/' +
                        property.user_pic
                      "
                      alt="Image"
                    />
                    <span class="size-16 font-semibold">{{
                      $linker.capitalizeEach(property.agence.name)
                    }}</span></a
                  >
                  <a
                    v-show="property.agence.super === 'yes'"
                    href="/recherche?q=super-agent"
                    class="button bg-transparent px-3 py-1 rounded border-008489ss size-12 color-008489"
                    >Super agent</a
                  >
                </div>
                <div>
                  <span
                    v-if="showtel"
                    class="size-14 appearZ block flex align-center mt-1 mb-3"
                  >
                    <svg
                      class="mr-0.5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z"
                        stroke="#2d3748"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Tel:
                    {{
                      property.property.phone !== null
                        ? property.property.phone
                        : property.agence.tel
                    }}</span
                  >
                  <button
                    class="border-none mt-1.5 flex align-center w-fit size-12 text-white px-5 pb-2 pt-1.5 rounded button btn-008489"
                    @click="
                      {
                        showtel = !showtel
                      }
                    "
                  >
                    <svg
                      class="mr-1.5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"
                        fill="#fff"
                      />
                    </svg>
                    Appeler l'agent
                  </button>
                </div>
              </div>
              <div class="w-full border-b pb-5">
                <div class="w-full">
                  <div>
                    <h4 class="logo-color size-16 font-semibold mb-5">
                      Informations {{ property.property.type }}
                    </h4>
                    <div
                      class="my-2"
                      v-html="property.property.informations"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="flex align-center border justify-between h-16 rounded bg-white"
                :class="{
                  'w-full': size < 500,
                  'h-centers': size < 640,
                  w360: size >= 500,
                }"
              >
                <div class="pl-3">
                  <h4 class="logo-color block size-14 font-semibold">
                    Vendez et louez vos propriétés
                  </h4>
                  <a href="/devenir-agent" class="logo-color size-14"
                    >Devenez agent sur Ofaloo</a
                  >
                </div>
                <div>
                  <a
                    href="/devenir-agent"
                    class="no-outlines border-transparent"
                  >
                    <svg
                      class="w-9 h-9 transform -rotate-90 logo-color mr-2"
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
                  </a>
                </div>
              </div>
            </div>
            <div class="w180e defss h-fit p-2 border rounded">
              <h4 class="logo-color border-b text-c size-13 pb-2 font-semibold">
                Contacter l'agent
              </h4>
              <form
                class="w-full py-3 flex flex-col space-y-2"
                @submit.prevent="send"
              >
                <div class="w-full" :class="{ noclick: authmail.length > 0 }">
                  <label for="email" class="size-13">Email</label>
                  <br />
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                    :class="{
                      'border-red-700': mailerror,
                      'border-green-700': $linker.emailValidated(email),
                    }"
                  />
                  <p
                    v-show="mailerror"
                    class="size-12 appearZ text-red-700 leading-4 pt-1"
                  >
                    Veuillez enter un email valide !
                  </p>
                </div>
                <div
                  v-show="$auth.loggedIn"
                  class="w-full flex align-center space-x-2 pt-1"
                >
                  <input
                    id="senupd"
                    v-model="authmail"
                    type="checkbox"
                    value="yes"
                    class="border rounded no-outlines outline-none"
                  />
                  <label for="senupd" class="size-12"
                    >Utiliser l'adresse email de mon compte</label
                  >
                </div>
                <div class="w-full">
                  <label for="username" class="size-13">Nom</label>
                  <br />
                  <input
                    id="username"
                    v-model="name"
                    autocomplete="none"
                    type="text"
                    class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                    :class="{
                      'border-red-700': nameerror,
                      'border-green-700':
                        name.length >= 2 && $linker.onlyLetters(name),
                    }"
                  />
                  <p
                    v-show="nameerror"
                    class="size-12 appearZ text-red-700 leading-4 pt-1"
                  >
                    Veuillez enter votre nom !
                  </p>
                </div>
                <div class="w-full">
                  <label for="phone" class="size-13">Téléphone</label>
                  <br />
                  <input
                    id="phone"
                    v-model="tel"
                    autocomplete="none"
                    type="tel"
                    class="border w-full py-1 h-7 size-14 rounded no-outlines px-2"
                  />
                </div>
                <div class="w-full">
                  <label for="request" class="size-14">Requête</label>
                  <br />
                  <smstype @req="req"></smstype>
                </div>
                <div class="w-full">
                  <label for="request" class="size-14">Vous êtes</label>
                  <br />
                  <typeprop
                    :content="[
                      'Acheteur',
                      'Locataire',
                      'Agent immobilier',
                      'Investisseur',
                      'Vendeur',
                      'Autre',
                    ]"
                    @val="type"
                  ></typeprop>
                </div>
                <div class="w-full">
                  <label for="coment2x" class="size-14">Message</label>
                  <div
                    class="border rounded w-full"
                    :class="{
                      'border-red-700': contenterror,
                      'border-green-700': content.length >= 2,
                    }"
                  >
                    <textarea
                      id="coment2x"
                      v-model="content"
                      wrap="hard"
                      class="w-full aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
                      placeholder="Ecrire un message"
                      rows="5"
                    ></textarea>
                  </div>
                  <p
                    v-show="contenterror"
                    class="size-12 appearZ text-red-700 leading-4 pt-1"
                  >
                    Veuillez écrire un message !
                  </p>
                </div>
                <p
                  v-show="err"
                  class="size-12 appearZ text-red-700 leading-4 pt-1"
                >
                  Oops, une erreur s'est produite pendant l'envoi du message
                </p>
                <p
                  v-show="sent"
                  class="size-13 appearZ text-green-700 leading-4 pt-1"
                >
                  Votre message a été envoyé avec succès √
                </p>
                <button></button>
                <div class="w-full pt-2">
                  <button
                    type="button"
                    class="border-none w-full size-12 text-white px-5 pb-2 pt-1.5 flex align-center space-x-2 rounded button btn-008489 both-centers"
                    :class="{ noclick: onsent }"
                    @click.stop="send"
                  >
                    <span class="size-12 text-white">Envoyer</span>
                    <span v-show="onsent" class="w-fit h-fit"
                      ><i
                        class="animate-spin fas fa-circle-notch color-white"
                      ></i
                    ></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Smstype from '../dropdown/Smstype.vue'
import Typeprop from '../dropdown/Typeprop.vue'
import Bigads from '../propriete/Bigads.vue'
export default {
  components: { Bigads, Smstype, Typeprop },
  props: {
    property: {
      type: Object,
      default: () => {},
    },
    images: {
      type: Array,
      default: () => [],
    },
    compo: {
      type: Number,
      default: -1,
    },
    asaved: {
      type: Boolean,
      default: false,
    },
    adesaved: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inside: false,
      options: {
        indoor: [],
        outdoor: [],
        energy: [],
      },
      showtel: false,
      share: false,
      hovered1: false,
      hovered2: false,
      hovered3: false,
      saved: false,
      desavedd: false,
      notif: false,
      zoom: false,
      active: 0,
      index: 1,
      ads: [
        'https://ofalooback.herokuapp.com/images/9.jpg',
        'https://ofalooback.herokuapp.com/images/1.jpg',
        'https://ofalooback.herokuapp.com/images/3.jpg',
        'https://ofalooback.herokuapp.com/images/4.jpg',
        'https://ofalooback.herokuapp.com/images/5.jpg',
      ],
      authmail: [],
      email: '',
      name: '',
      tel: '',
      content: '',
      mess: {
        email: '',
        name: '',
        tel: '',
        req: '',
        type: '',
        content: '',
      },
      prop: {
        id: 0,
        agence: '',
        image: '',
        type: '',
        price: '',
        proposition: '',
        adresse: '',
        bed: 0,
        bath: 0,
        garage: 0,
        size: 0,
      },
      maierror: false,
      nerror: false,
      perror: false,
      cerror: false,
      error: false,
      success: false,
      sending: false,
    }
  },
  computed: {
    err() {
      return this.error === true
    },
    sent() {
      return this.success === true
    },
    onsent() {
      return this.sending === true
    },
    size() {
      return this.$store.state.size
    },
    mailerror() {
      return this.maierror === true
    },
    nameerror() {
      return this.nerror === true
    },
    contenterror() {
      return this.cerror === true
    },
    here() {
      return this.$store.state.component
    },
    notification() {
      return this.notif === true
    },
    has_saved() {
      return this.saved === true
    },
    has_desaved() {
      return this.desavedd === true
    },
    dataOk() {
      return (
        this.property !== undefined &&
        this.property.property !== undefined &&
        this.property.property !== null
      )
    },
    has_options() {
      return (
        this.property !== undefined &&
        this.property.options !== null &&
        this.property.options !== undefined &&
        this.property.options.length > 0
      )
    },
    has_in() {
      return this.options.indoor.length > 0
    },
    curoute() {
      return this.$route.path
    },
    has_out() {
      return this.options.outdoor.length > 0
    },
    has_en() {
      return this.options.energy.length > 0
    },
    mail() {
      return `mailto:?subject=Propriétés à acheter et louer sur le site Ofaloo.com&amp;body=Découvrez cette superbe propriété sur https://www.ofaloo.com/propriete/?wyzes=${this.property.property.id}`
    },
    next1() {
      if (this.images.length - 1 - this.curindex <= 1) {
        if (this.images.length - 1 - this.curindex === 1)
          return this.images.length - 1
        if (this.images.length - 1 - this.curindex === 0) return 0
      }
      return this.curindex + 1
    },
    next2() {
      if (this.images.length - 1 - this.curindex <= 1) {
        if (this.images.length - 1 - this.curindex === 1) return 0
        if (this.images.length - 1 - this.curindex === 0) return 1
      }
      return this.curindex + 2
    },
    curindex() {
      return this.index - 1
    },
  },
  watch: {
    here(nv, ov) {
      if (nv === this.compo) {
        // console.log(this.notif, 'here')
        this.notif = true
        this.saved = true
        this.desavedd = false
        setTimeout(() => {
          this.notif = false
        }, 3000)
      }
    },
    authmail(nv, ov) {
      if (nv.length > 0) {
        this.email = this.$auth.user.email
      }
    },
    email(nv, ov) {
      if (this.mailerror) {
        this.maierror = false
      }
      this.error = false
    },
    name() {
      if (this.nameerror) {
        this.nerror = false
      }
      this.error = false
    },
    tel(newval, oldval) {
      this.error = false
      if (!newval.includes(' ')) {
        if (
          (newval.length === 1 && newval.lastIndexOf('+') === 0) ||
          (newval.length > 1 &&
            newval.lastIndexOf('+') === 0 &&
            !isNaN(newval.substr(1, newval.length - 1)) &&
            !newval.substr(1, newval.length - 1).includes('.')) ||
          (!isNaN(newval) && !newval.includes('.'))
        )
          this.tel = newval
        else this.tel = oldval
      } else this.tel = oldval
    },
    content() {
      if (this.contenterror) {
        this.cerror = false
      }
      this.error = false
    },
  },
  beforeMount() {
    this.savetorecent()
    this.checkOptions()
    if (this.property.saved) this.saved = true
    else this.desavedd = true
  },
  mounted() {
    if (this.$auth.loggedIn && this.authmail.length > 0)
      this.email = this.$auth.user.email
    this.prepare()
    this.increment()
  },
  methods: {
    report() {
      this.$store.commit('set_id', this.property.property.id)
      this.$store.commit('set_report', true)
      document.body.style.overflow = 'hidden'
      this.close()
    },
    prepare() {
      this.prop.id = this.property.property.id
      this.prop.agence = this.property.agence.name
      this.prop.image = this.images[0]
      this.prop.type = this.property.property.type
      this.prop.proposition = this.property.property.proposition
      if (this.property.property.proposition.includes('partielle')) {
        this.prop.proposition =
          this.prop.proposition +
          ' (' +
          this.property.property.percentage_part.toString() +
          '%)'
      }
      this.prop.price =
        this.$linker.formatMoney(
          this.property.property.price_fixed.toString()
        ) + ' FCFA'
      if (this.property.property.proposition.includes('Location')) {
        this.prop.price =
          this.prop.price + ' ' + this.property.property.location_freq
      }
      if (this.property.property.negociable === 'yes') {
        this.prop.price = this.prop.price + ', négociable'
      }
      this.prop.adresse = this.property.adresse + ', ' + this.property.ville
      this.prop.bed = this.property.property.bed
      this.prop.bath = this.property.property.bath
      this.prop.garage = this.property.property.garage
      this.prop.size = this.property.property.taille
    },
    req(val) {
      this.mess.req = val
    },
    type(val) {
      this.mess.type = val
    },
    validated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      if (this.name.length > 1 && this.$linker.onlyLetters(this.name)) {
        this.nerror = false
      } else this.nerror = true

      if (this.content.length >= 2) {
        this.cerror = false
      } else this.cerror = true

      return (
        this.mailerror === false &&
        this.nameerror === false &&
        this.contenterror === false
      )
    },
    send() {
      this.error = false
      if (this.validated()) {
        this.sending = true
        this.mess.email = this.email
        this.mess.name = this.name
        this.mess.tel = this.tel
        this.mess.content = this.content
        const html = this.$linker.message(this.prop, this.mess)
        this.sendMess(html)
          .then((result) => {
            this.sending = false
            if (result.status !== '200') this.error = true
            else {
              this.success = true
              this.email = ''
              this.name = ''
              this.tel = ''
              this.content = ''
              this.authmail = []
              setTimeout(() => {
                this.success = false
              }, 4000)
            }
          })
          .catch(() => {
            this.error = true
            this.sending = false
          })
      }
    },
    async sendMess(html) {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('message', {
            email: 'yayasopeguesoro@gmail.com',
            message: html,
            user: this.$auth.loggedIn ? this.$auth.user.id : null,
            prop: this.property.property.id,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise sending message")
      })
    },
    checkOptions() {
      if (this.has_options) {
        this.property.options.forEach((option) => {
          if (option.options.type === 'indoor') {
            this.options.indoor.push(option.options.title)
          }
          if (option.options.type === 'outdoor') {
            this.options.outdoor.push(option.options.title)
          }
          if (option.options.type === 'energie') {
            this.options.energy.push(option.options.title)
          }
        })
      }
    },
    sort(val, first) {
      const newarray = [first]
      val.forEach((element) => {
        if (element !== first) newarray.push(element)
      })
      return newarray
    },
    async savetorecent() {
      if (localStorage.viewed) {
        let data = await JSON.parse(localStorage.getItem('viewed'))
        if (!data.includes(this.property.property.id)) {
          data.unshift(this.property.property.id)
        } else if (data.length > 0) {
          data = this.sort(data, this.property.property.id)
        }

        localStorage.removeItem('viewed')
        localStorage.setItem('viewed', JSON.stringify(data.slice(0, 10)))
      } else {
        const data = [this.property.property.id]
        localStorage.setItem('viewed', JSON.stringify(data))
      }
    },
    async increment() {
      await this.$axios.$get('property/visit/' + this.property.property.id)
    },
    hideshare() {
      this.share = false
    },
    hidebody() {
      document.body.style = 'overflow: hidden !important;'
    },
    close() {
      this.$emit('close_quick')
    },
    indexed(val) {
      this.index = val
    },
    async saveProp() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('save/property', {
            prop: this.property.property.id,
            user: this.$auth.loggedIn ? this.$auth.user.id : -1,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise saving")
      })
    },
    async desaved() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$post('unsave/property', {
            prop: this.property.property.id,
            user: this.$auth.loggedIn ? this.$auth.user.id : -1,
          })
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise saving")
      })
    },
    savelist() {
      if (!this.$auth.loggedIn) {
        this.close()
        this.$store.commit('close_quick_sign', true)
        this.$store.commit('precom', this.compo)
        this.$store.commit('set_tosave', this.property.property.id)
        document.body.style = 'overflow: hidden'
      } else {
        // save or desaved
        if (this.asaved) {
          this.$store.commit('precom', -1)
          this.$store.commit('decomponent', -1)
          this.desaved().then((res) => {
            this.desavedd = true
            this.saved = false
            this.$store.commit('decomponent', this.compo)
            if (this.curoute.includes('/favoris')) {
              this.$store.commit('rel_fav', true)
            }
          })
        }
        if (this.adesaved) {
          this.$store.commit('precom', -1)
          this.$store.commit('component', -1)
          this.saveProp().then((res) => {
            this.saved = true
            this.desavedd = false
            this.notif = true
            this.$store.commit('component', this.compo)
            setTimeout(() => {
              this.notif = false
            }, 3000)
          })
        }
      }
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
