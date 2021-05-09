<template>
  <div class="bg-white w-full h-full relative py-8">
    <div class="border-b mb-8">
      <h4 class="logo-color size-18 font-semibold mb-5 text-c">
        Questions Fréquemment Posées (FAQ)
      </h4>
    </div>
    <div class="lg:w-3/5 md:w-4/5 w-full flex flex-col space-y-6 m-0-auto">
      <div>
        <h4 class="color-008489 size-16 font-semibold mb-2">
          Acheter et Louer
        </h4>
        <div class="mb-2">
          <span class="size-16"
            >Acheter et louer des propriétés, maisons, appartement, villa,
            haut-standings, bureaux, magasins, terrains partout en Côte d'Ivoire
            sur Ofaloo.</span
          >
        </div>
        <div class="flex flex-col space-y-3">
          <question
            :link1="{
              text: 'Acheter une propriété',
              link: '/recherche',
            }"
            content="Acheter des propriétés, maisons, appartement, villa,
            haut-standings, bureaux, magasins, terrains partout en Côte d'Ivoire
            sur Ofaloo avec les caractéristiques de votre choix."
            title="Acheter une propriété"
          ></question>
          <question
            :link1="{
              text: 'Louer une propriété',
              link: '/recherche?',
            }"
            content="Louer des propriétés, maisons, appartement, villa,
            haut-standings, bureaux, magasins, terrains partout en Côte d'Ivoire
            sur Ofaloo avec les caractéristiques de votre choix."
            title="Louer une propriéte"
          ></question>
          <question
            :link1="{
              text: 'Rechercher une propriété',
              link: '/recherche',
            }"
            content="Vous pouvez demander à visiter 
            une propriété en vu d'un achat ou d'une 
            location en contactant l'agent en charge 
            de la propriété."
            title="Visiter une propriété"
          ></question>
          <question
            :link1="{
              text: 'Rechercher une propriété',
              link: '/recherche',
            }"
            content="Vous pouvez envoyer un message à 
            l'agent en charge d'une propriété pour savoir 
            les moyens de paiements disponibles dans le cadre 
            d'un achat ou d'une location."
            title="Méthode de paiement"
          ></question>
        </div>
      </div>
      <div>
        <h4 class="color-008489 size-16 font-semibold mb-2">
          Rejoindre Ofaloo
        </h4>
        <div class="mb-2">
          <span class="size-16"
            >Rejoindre Ofaloo est facile et gratuit, vous n'avez pas besoin de
            payer ou souscrire à un abonnement pour utiliser Ofaloo.</span
          >
        </div>
        <div class="flex flex-col space-y-3">
          <question
            :link1="{
              text: 'Créer un compte',
              link: '/inscription',
            }"
            content="L'inscription sur Ofaloo est facile et 
            reste gratuit pour tous. Cliquez sur le bouton 
            suivant pour vous inscrire et profiter de tous 
            les avantages de Ofaloo."
            title="S'inscrire"
          ></question>
          <question
            :link1="{
              text: 'Se connecter',
              link: '/connexion',
            }"
            content="Connectez-vous à votre compte pour pouvoir enregister
             des propriétés et profiter pleinement des offres sur Ofaloo."
            title="Se connecter"
          ></question>
          <question
            :link1="{
              text: 'Devenir agent sur Ofaloo',
              link: '/devenir-agent',
            }"
            content="Vous avez une ou plusieurs propriétés 
            que vous voulez vendre ou louer ? Devenez agent sur 
            Ofaloo et faites vous découvrir."
            title="Devenir agent sur Ofaloo"
          ></question>
        </div>
      </div>
      <div>
        <h4 class="color-008489 size-16 font-semibold mb-2">Votre compte</h4>
        <div class="mb-2">
          <span class="size-16"
            >Se connecter et gérer son compte sur Ofaloo.</span
          >
        </div>
        <div class="flex flex-col space-y-3">
          <question
            :link1="{
              text: 'Accéder à mon profl',
              link: '/user',
            }"
            content="Votre profil contient vos informations personnelles
             et les paramètres de votre compte."
            title="Mon profil"
          ></question>
          <question
            :link1="{
              text: 'Liste d\'enregistrements',
              link: '/favoris',
            }"
            content="Vous pouvez enregistrer une propriété 
            pour la retrouver plus tard facilement."
            title="Ma liste d'enregistrements"
          ></question>
          <question
            :link1="{
              text: 'Paramètres du compte',
              link: '/user/parametres',
            }"
            content="Personnalisez votre compte selon vos 
            objectifs ou/et supprimer votre compte définitivement."
            title="Paramètres du compte"
          ></question>
        </div>
      </div>
      <div class="pb-10">
        <h4 class="color-008489 size-16 font-semibold mb-2">Nous Joindre</h4>

        <div class="flex flex-col space-y-3">
          <span class="size-16"
            >Vous avez une question ou une suggestion ? Remplissez
            <a
              href="/contactez-nous"
              class="color-008489 size-16 underline-hover"
              >ce formulaire</a
            >
            pour nous envoyer un message et nous vous répondrons dans les plus
            brefs délais possibles.</span
          >
          <span class="size-16"
            >Rejoignez-nous aussi sur les réseaux sociaux</span
          >
          <p class="flex align-center space-x-3">
            <a href="#" target="_blank"
              ><i class="fab fa-twitter size-20 clickable"></i
            ></a>
            <a href="#" target="_blank"
              ><i class="fab fa-facebook size-20 clickable"></i
            ></a>
            <a href="#" target="_blank"
              ><i class="fab fa-instagram size-20 clickable"></i
            ></a>
            <a href="#" target="_blank"
              ><i class="fab fa-tiktok size-20 clickable"></i
            ></a>
            <a href="#" target="_blank"
              ><i class="fab fa-youtube size-20 clickable"></i
            ></a>
            <!-- <a href="#" target="_blank"
              ><i class="fab fa-linkedin-in size-20 clickable"></i
            ></a> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '~/components/question/Question.vue'
export default {
  components: { Question },
}
</script>

<style scoped></style>
