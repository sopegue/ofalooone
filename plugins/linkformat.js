const linker = {
  name: 'Test',
  format(value) {
    let str = value.replace(/ /g, '-')
    str = str.replace(/&/g, 'and')
    str = str.replace(/"/g, '')
    str = str.replace(/,/g, '')
    str = str.replace(/'/g, '')
    return str.toLowerCase()
  },
  emailValidated(value) {
    return (
      value !== '' &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      ) === true
    )
  },
  pwdValidated(val) {
    let num = 0
    let str = 0
    if (val.length >= 8) {
      for (let index = 0; index < 7; index++) {
        if (/\d/.test(val[index])) {
          num++
        }
        if (/[a-zA-Z]/.test(val[index])) {
          str++
        }
      }
      return (
        num > 0 &&
        str > 0 &&
        /\d/.test(val) === true &&
        /[a-zA-Z]/.test(val) === true &&
        /^[0-9a-zA-Z]+$/.test(val) === true
      )
    }
    return false
  },
  onlyLetters(val) {
    return /\d/.test(val) === false && /[a-zA-Z]/.test(val) === true
  },
  isNumber(val) {
    if (!val.includes(' ')) {
      if (!isNaN(val) && !val.includes('.')) return true
    }
    return false
  },
  formatMoney(val) {
    let money = ''
    let reverse = ''
    let i = 0
    for (let index = val.length - 1; index >= 0; index--) {
      money = money + val[index]
      if (i === 2) {
        money = money + ' '
        i = 0
      } else i++
    }
    for (let index = money.length - 1; index >= 0; index--) {
      reverse = reverse + money[index]
    }
    return reverse
  },
  capitalizeEach(value) {
    if (!value) return ''
    const words = value.split(' ')
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    let ret = words[0]
    for (let i = 1; i < words.length; i++) {
      ret += ' ' + words[i]
    }
    return ret
  },
  capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  },
  admin(message) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Nouveau message pour admin | Ofaloo</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Contenu du message pour admin" />
        <style>
          .color-008489 {
            color: #004e66 !important;
          }
          .btn-008489s {
            background-color: rgba(0, 78, 102, 0.089) !important;
          }
          .over {
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .font-semibold {
            font-weight: 600;
          }
          .body {
            background-color: #dedede;
          }
          .bb:hover {
            background-color: #0a3d4d !important;
          }
          .size-11 {
            font-size: 11px;
          }
          .size-12 {
            font-size: 12px !important;
          }
          .size-13 {
            font-size: 13px !important;
          }
          .size-14 {
            font-size: 14px !important;
          }
          .size-145 {
            font-size: 14.5px !important;
          }
          .size-15 {
            font-size: 15px !important;
          }
          .size-16 {
            font-size: 16px !important;
          }
          .img {
            width: 48px !important;
            height: 48px !important;
          }
          .block {
            display: block !important;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .border {
            border: 1px solid #e2e8f0;
          }
          .border-b {
            border-bottom: 1px solid #e2e8f0;
          }
          .border-t {
            border-top: 1px solid #e2e8f0;
          }
          .rounded {
            border-radius: 0.25rem;
          }
          .pos-right {
            float: right;
          }
          .pos-left {
            float: left;
          }
          .clbo {
            clear: both;
          }
          .w-fit {
            width: intrinsic !important; /* Safari/WebKit uses a non-standard name */
            width: -moz-max-content !important; /* Firefox/Gecko */
            width: -webkit-max-content !important;
          }
          .h-fit {
            height: intrinsic !important; /* Safari/WebKit uses a non-standard name */
            height: -moz-max-content !important; /* Firefox/Gecko */
            height: -webkit-max-content !important;
          }
          .h-250 {
            height: 250px !important;
          }
          .w-full {
            width: 100% !important;
          }
          .h-full {
            height: 100% !important;
          }
          .m-0-auto {
            margin: 0 auto !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          @media screen and (max-width: 99999px) {
            .prop {
              max-width: 50% !important;
            }
          }
          @media screen and (max-width: 767px) {
            .prop {
              max-width: 70% !important;
            }
          }
          @media screen and (max-width: 640px) {
            .prop {
              max-width: 80% !important;
            }
          }
          @media screen and (max-width: 520px) {
            .prop {
              max-width: 100% !important;
            }
          }
          @media screen and (max-width: 500px) {
            .h-250 {
              height: 200px !important;
            }
          }
          @media screen and (max-width: 1024px) {
            .home {
              width: auto !important;
            }
          }
          .bg-black {
            background-color: rgba(0, 0, 0, 0.507) !important;
          }
          .header-home {
            height: 80px;
            width: 100%;
            background-image: url("https://ofalooback.herokuapp.com/storage/svg/estate.jpg");
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-position: center;
            background-size: cover;
          }
          @media screen and (max-width: 640px) {
            .header-home {
              height: 64px;
            }
            .zozo {
              padding: 48px 10px !important;
            }
          }
          @media screen and (max-width: 480px) {
            .header-home {
              height: 56px;
            }
          }
        </style>
      </head>
      <body>
        <div class="zozo body" style="padding: 20px 48px">
          <div
            class="home rounded m-0-auto"
            style="
              font-family: system-ui;
              padding: 20px;
              color: #2d3748;
              background-color: #fff;
              width: 767px;
            "
          >
            <div
              style="
                display: flex !important;
                align-items: center !important;
                justify-content: center;
                padding-bottom: 1rem;
              "
            >
              <img
                class="img"
                src="https://ofalooback.herokuapp.com/storage/svg/logo.png"
                alt="Ofaloo logo"
              />
              <span
                class="block w-fit h-fit"
                style="
                  font-weight: 600 !important;
                  font-size: 28px;
                  color: #004e66;
                  margin-left: 5px;
                "
                >Ofaloo</span
              >
            </div>
            <div class="header-home">
              <div class="w-full h-full bg-black"></div>
            </div>
            <div style="margin-top: 15px !important; font-size: 16px !important">
              <div style="margin-top: 30px !important; font-weight: 600 !important">
                <span>Bonjour Sopégué,</span>
              </div>
              <div style="margin-top: 10px !important">
                <span
                  >Un utilisateur vous a envoyé un message, essayez de lui répondre dans les plus brefs délais.</span
                >
              </div>
              <div>
                <span
                  class="w-fit m-0-auto"
                  style="
                    font-weight: 600 !important;
                    margin: 0 auto !important;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    width: fit-content !important;
                    display: block;
                    font-size: 14px !important;
                  "
                  >Détails du message</span
                >
              </div>
              <div
                class="border rounded"
                style="padding: 10px; font-size: 14px !important"
              >
                <div>
                  <span style="font-weight: 600 !important"
                    >Informations sur l'expéditeur</span
                  >
                  <div style="padding-top: 0.25rem">
                    <div>
                      <span>Nom:</span>
                      <span style="font-weight: 600 !important"
                        >${
                          message.name !== ''
                            ? this.capitalizeEach(message.name)
                            : 'Non fourni'
                        }</span
                      >
                    </div>
                    <div>
                      <span>Email:</span>
                      <span style="font-weight: 600 !important"
                        >${message.email}</span
                      >
                    </div>
                    <div>
                      <span>Téléphone:</span>
                      <span style="font-weight: 600 !important"
                        >${
                          message.tel !== '' ? message.tel : 'Non fourni'
                        }</span
                      >
                    </div>
                  </div>
                </div>
                <div class="border-b border-t" style="margin-top: 1.5rem">
                  <span
                    class="w-fit m-0-auto"
                    style="
                      font-weight: 600 !important;
                      margin: 0 auto !important;
                      padding-top: 0.5rem;
                      padding-bottom: 0.5rem;
                      width: fit-content !important;
                      display: block;
                      font-size: 14px !important;
                    "
                    >Contenu du message</span
                  >
                </div>
                <div style="padding: 20px 0px">
                  <span style="font-size: 15px !important">${
                    message.content
                  }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  },
  message(property, message, condition = true) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Nouveau message pour votre propriété | Ofaloo</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Contenu du message pour une propriété" />
        <style>
          .color-008489 {
            color: #004e66 !important;
          }
          .btn-008489s {
            background-color: rgba(0, 78, 102, 0.089) !important;
          }
          .over {
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .font-semibold {
            font-weight: 600;
          }
          .body {
            background-color: #ececec;
          }
          .bb:hover {
            background-color: #0a3d4d !important;
          }
          .size-11 {
            font-size: 11px;
          }
          .size-12 {
            font-size: 12px !important;
          }
          .size-13 {
            font-size: 13px !important;
          }
          .size-14 {
            font-size: 14px !important;
          }
          .size-145 {
            font-size: 14.5px !important;
          }
          .size-15 {
            font-size: 15px !important;
          }
          .size-16 {
            font-size: 16px !important;
          }
          .img {
            width: 48px !important;
            height: 48px !important;
          }
          .block {
            display: block !important;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .border {
            border: 1px solid #e2e8f0;
          }
          .border-b {
            border-bottom: 1px solid #e2e8f0;
          }
          .border-t {
            border-top: 1px solid #e2e8f0;
          }
          .rounded {
            border-radius: 0.25rem;
          }
          .pos-right {
            float: right;
          }
          .pos-left {
            float: left;
          }
          .clbo {
            clear: both;
          }
          .w-fit {
            width: intrinsic !important; /* Safari/WebKit uses a non-standard name */
            width: -moz-max-content !important; /* Firefox/Gecko */
            width: -webkit-max-content !important;
          }
          .h-fit {
            height: intrinsic !important; /* Safari/WebKit uses a non-standard name */
            height: -moz-max-content !important; /* Firefox/Gecko */
            height: -webkit-max-content !important;
          }
          .h-250 {
            height: 250px !important;
          }
          .w-full {
            width: 100% !important;
          }
          .h-full {
            height: 100% !important;
          }
          .m-0-auto {
            margin: 0 auto !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          @media screen and (max-width: 99999px) {
            .prop {
              max-width: 50% !important;
            }
          }
          @media screen and (max-width: 767px) {
            .prop {
              max-width: 70% !important;
            }
          }
          @media screen and (max-width: 640px) {
            .prop {
              max-width: 80% !important;
            }
          }
          @media screen and (max-width: 520px) {
            .prop {
              max-width: 100% !important;
            }
          }
          @media screen and (max-width: 500px) {
            .h-250 {
              height: 200px !important;
            }
          }
          @media screen and (max-width: 1024px) {
            .home {
              width: auto !important;
            }
          }
          .bg-black {
            background-color: rgba(0, 0, 0, 0.507) !important;
          }
          .header-home {
            height: 80px;
            width: 100%;
            background-image: url("https://ofalooback.herokuapp.com/storage/svg/estate.jpg");
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-position: center;
            background-size: cover;
          }
          @media screen and (max-width: 640px) {
            .header-home {
              height: 64px;
            }
            .zozo {
              padding: 48px 10px !important;
            }
          }
          @media screen and (max-width: 480px) {
            .header-home {
              height: 56px;
            }
          }
        </style>
      </head>
      <body>
        <div class="zozo body" style="padding: 20px 48px">
          <div
            class="home rounded m-0-auto"
            style="
              font-family: system-ui;
              padding: 20px;
              color: #2d3748;
              background-color: #fff;
              width: 767px;
            "
          >
            <div
              style="
                display: flex !important;
                align-items: center !important;
                justify-content: center;
                padding-bottom: 1rem;
              "
            >
              <img
                class="img"
                src="https://ofalooback.herokuapp.com/storage/svg/logo.png"
                alt="Ofaloo logo"
              />
              <span
                class="block w-fit h-fit"
                style="
                  font-weight: 600 !important;
                  font-size: 28px;
                  color: #004e66;
                  margin-left: 5px;
                "
                >Ofaloo</span
              >
            </div>
            <div class="header-home">
              <div class="w-full h-full bg-black"></div>
            </div>
            <div style="margin-top: 15px !important; font-size: 16px !important">
              <div style="margin-top: 30px !important; font-weight: 600 !important">
                <span>Bonjour ${this.capitalize(property.agence)},</span>
              </div>
              <div style="margin-top: 10px !important">
                <span
                  >Vous avez reçu un message concernant l'une de vos
                  propriété.</span
                >
              </div>
              <div>
                <span
                  class="w-fit m-0-auto"
                  style="
                    font-weight: 600 !important;
                    margin: 0 auto !important;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    width: fit-content !important;
                    display: block;
                    font-size: 14px !important;
                  "
                  >Détails du message</span
                >
              </div>
              <div
                class="border rounded"
                style="padding: 10px; font-size: 14px !important"
              >
                <div>
                  <span style="font-weight: 600 !important"
                    >Informations sur l'expéditeur</span
                  >
                  <div style="padding-top: 0.25rem">
                    <div>
                      <span>Nom:</span>
                      <span style="font-weight: 600 !important">${this.capitalizeEach(
                        message.name
                      )}</span>
                    </div>
                    <div>
                      <span>Email:</span>
                      <span style="font-weight: 600 !important"
                        >${message.email}</span
                      >
                    </div>
                    <div>
                      <span>Téléphone:</span>
                      <span style="font-weight: 600 !important">${
                        message.tel !== '' ? message.tel : 'Non fourni'
                      }</span>
                    </div>
                    <div>
                      <span>Requête:</span>
                      <span style="font-weight: 600 !important">${
                        message.req
                      }</span>
                    </div>
                    <div>
                      <span>L'expéditeur est:</span>
                      <span style="font-weight: 600 !important">${
                        message.type
                      }</span>
                    </div>
                  </div>
                </div>
                <div class="border-b border-t" style="margin-top: 1.5rem">
                  <span
                    class="w-fit m-0-auto"
                    style="
                      font-weight: 600 !important;
                      margin: 0 auto !important;
                      padding-top: 0.5rem;
                      padding-bottom: 0.5rem;
                      width: fit-content !important;
                      display: block;
                      font-size: 14px !important;
                    "
                    >Contenu du message</span
                  >
                </div>
                <div style="padding: 20px 0px">
                  <span style="font-size: 15px !important"
                    >${message.content}</span
                  >
                </div>
              </div>
              <div class="w-full" style="padding: 10px 0px">
                <div>
                  <span
                    class="w-fit m-0-auto"
                    style="
                      font-weight: 600 !important;
                      padding-top: 1rem;
                      padding-bottom: 1rem;
                      display: block;
                      font-size: 14px !important;
                    "
                    >Aperçu de la propriété concernée</span
                  >
                </div>
                <div class="h-fit m-0-auto prop cursor-pointer border">
                <a 
                href="https://ofalooagent.netlify.app/dashboard/proprietes/mes-proprietes/viewed?id=${
                  property.id
                }">
                  <img
                    class="w-full h-250 block"
                    src="${property.image}"
                    alt="Image de la propriété"
                  />
                  </a>
                  <div style="padding: 0.8rem 0.8rem">
                    <div>
                      <span style="font-weight: 600" class="size-15 block pos-left"
                        >${property.type}</span
                      >
                      <div class="pos-right">
                        <a
                          class="block w-fit rounded btn-008489s color-008489 size-11"
                          style="padding: 5px 10px"
                          >${property.proposition}</a
                        >
                      </div>
                    </div>
                    <div class="clbo" style="padding-top: 0.2rem">
                      <span class="font-semibold size-13 block over"
                        >${property.price}</span
                      >
                    </div>
                    <div style="padding: 5px 0px">
                      <img
                        class="pos-left"
                        src="https://ofalooback.herokuapp.com/storage/svg/place.png"
                        alt="Location icône"
                      />
                      <span
                        class="inline block over size-14"
                        style="padding-left: 0.2rem"
                        >${property.adresse}</span
                      >
                    </div>
                    <div
                      class="clbo"
                      style="padding-bottom: 1rem; padding-top: 0.2rem"
                    >
                      <div class="w-fit">
                        <div class="flex items-center pos-left">
                          <img
                            class="block pos-left"
                            src="https://ofalooback.herokuapp.com/storage/svg/1.png"
                            alt="Lit icône"
                          />
                          <span
                            class="logo-color size-13 block pos-right"
                            style="margin-left: 0.3rem"
                            >${property.bed}</span
                          >
                        </div>
                        <div
                          class="flex items-center pos-left"
                          style="margin-left: 0.8rem"
                        >
                          <img
                            class="block pos-left"
                            src="https://ofalooback.herokuapp.com/storage/svg/2.png"
                            alt="Salle de bain icône"
                          />
                          <span
                            class="logo-color size-13 block pos-right"
                            style="margin-left: 0.3rem"
                            >${property.bath}</span
                          >
                        </div>
                        <div
                          class="flex items-center pos-left"
                          style="margin-left: 0.8rem"
                        >
                          <img
                            class="block pos-left"
                            src="https://ofalooback.herokuapp.com/storage/svg/3.png"
                            alt="Garage icône"
                          />
                          <span
                            class="logo-color size-13 block pos-right"
                            style="margin-left: 0.3rem"
                            >${property.garage}</span
                          >
                        </div>
                        <div
                          class="flex items-center pos-left"
                          style="margin-left: 0.8rem"
                        >
                          <img
                            class="block pos-left"
                            src="https://ofalooback.herokuapp.com/storage/svg/4.png"
                            alt="Traceuse icône"
                          />
                          <span
                            class="logo-color size-13 block pos-right"
                            style="margin-left: 0.3rem"
                            >${property.size} m²</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t" style="padding-top: 1.3rem; margin-top: 1.5rem">
                <div
                  style="
                    margin: 0 auto !important;
                    width: fit-content !important;
                    display: block;
                  "
                >
                  <span
                    class="w-fit m-0-auto size-14"
                    style="
                      margin: 0 auto !important;
                      width: fit-content !important;
                      display: block;
                    "
                    >Avez-vous une question ou besoin d'une assistance ?</span
                  >
                  <div
                    style="
                      margin-top: 1rem !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-items: center;
                      justify-content: center;
                    "
                  >
                    <a
                      class="w-fit m-0-auto"
                      style="
                        color: #004e66 !important;
                        padding: 10px 20px !important;
                        border: 1px #004e66 solid;
                        background-color: transparent;
                        border-radius: 10px;
                        font-size: 14px !important;
                        text-decoration: none !important;
                        width: 160px;
                        text-align: center;
                        display: block;
                      "
                      href="https://ofalooagent.netlify.app/ofalooagent/contactez-nous"
                      >Contactez-nous</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="pb-4"
                style="
                  margin-top: 30px !important;
                  font-size: 14px !important;
                  padding-top: 1rem;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <span
                  >Si vous pensez que cet email ne vous ait pas adressé(e), veuillez
                  s'il vous plaît l'ignorer et le supprimer.</span
                >
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  },
  email(hash, email, name) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Verification de votre adresse email | Ofaloo</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Page de verification de l'adresse email"
        />
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    />
        <style>
          .bb:hover {
            background-color: #0a3d4d !important;
          }

          .img {
            width: 48px !important;
            height: 48px !important;
          }
          .block {
            display: block !important;
          }
          .w-fit {
        width: intrinsic !important; /* Safari/WebKit uses a non-standard name */
        width: -moz-max-content !important; /* Firefox/Gecko */
        width: -webkit-max-content !important;
      }
      .h-fit {
        height: intrinsic !important; /* Safari/WebKit uses a non-standard name */
        height: -moz-max-content !important; /* Firefox/Gecko */
        height: -webkit-max-content !important;
      }
      .m-0-auto {
        margin: 0 auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      .img {
        width: 48px !important;
        height: 48px !important;
      }
          .w-full{
            width: 100% !important;
          }
          .h-full {
            height: 100% !important;
          }
          @media screen and (max-width: 800px) {
            .home {
              width: auto !important;
            }
          }
          @media screen and (max-width: 640px) {
            .home {
              width: 100% !important;
              padding-left: 2.5rem !important;
              padding-right: 2.5rem !important;
              width: fit-content !important;
            }
          }
        </style>
      </head>
      <body>
        <div
          class="home"
          style="
            font-family: system-ui;
            padding-bottom: 3rem;
            color: #2d3748;
            width: 767px;
            margin: 0 auto !important;
          "
        >
          <div style="display: flex !important; align-items: center !important">
          <img
              class="img"
              src="https://ofalooback.herokuapp.com/storage/svg/logo.png"
              alt="Ofaloo logo"
            />
            <span class="block w-fit h-fit"
              style="
                font-weight: 600 !important;
                font-size: 28px;
                color: #004e66;
                margin-left: 5px;
              "
              >Ofaloo</span
            >
          </div>
          <div style="margin-top: 25px !important; font-size: 18px !important">
            <div>
              <span class="w-fit m-0-auto"
                style="
                  font-weight: 600 !important;
                  display: block;
                "
                >CONFIRMATION EMAIL</span
              >
            </div>
            <div style="margin-top: 30px !important; font-weight: 600 !important">
              <span>Bonjour ${this.capitalize(name)},</span>
            </div>
            <div style="margin-top: 10px !important">
              <span
                >Bienvenue et merci d'avoir ouvrir un compte sur Ofaloo, nous sommes
                excités à l'idée de vous voir profiter de nos meilleures offres.
                Pour compléter votre inscription, veuillez s'il vous plaît confirmer
                votre adresse email en cliquant sur le bouton suivant.</span
              >
            </div>
            <div style="margin-top: 30px !important">
              <a
                class="bb w-fit m-0-auto"
                style="
                  color: white !important;
                  padding: 10px 20px !important;
                  border: 1px transparent solid;
                  background-color: #004e66;
                  border-radius: 10px;
                  font-size: 16px !important;
                  text-decoration: none !important;
                  display: block;
                "
                href="https://www.ofaloo.com/vef?email=${email}&alinux=${hash}"
                >Verifier Maintenant</a
              >
            </div>
            <div style="margin-top: 30px !important">
              <span>Toute l'équipe Ofaloo,</span>
            </div>
            <div style="margin-top: 20px !important; font-size: 18px !important">
              <span>Ou vérifiez votre compte en utilisant le lien suivant:</span>
            </div>
            <a
              href="https://www.ofaloo.com/vef?email=${email}&alinux=${hash}"
              style="
                margin-top: 30px !important;
                font-size: 16px !important;
                color: #004e66;
              "
            >
              <span>https://www.ofaloo.com/vef?email=${email}&alinux=${hash}</span>
            </a>
            <div
                style="
                  margin-top: 30px !important;
                  font-size: 16px !important;
                  font-weight: 600 !important;
                  padding-top: 1.5rem;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <span
                  >Ce lien n'est valable que pendant 1h (une heure).</span
                >
              </div>
            <div
              style="
                margin-top: 40px !important;
                font-size: 16px !important;
                padding-top: 1.5rem;
                border-top: 1px solid #e2e8f0;
              "
            >
              <div class="w-fit m-0-auto"
                style="
                text-align: center;
                  display: block;
                "
              >
                <span class="w-fit m-0-auto"
                  style="
                    display: block;
                  "
                  >Avez-vous une question ou besoin d'une assistance ?</span
                >
                <div class="w-fit m-0-auto"
                  style="
                    margin-top: 1rem !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-items: center;
                    justify-content: center;
                  "
                >
                  <a
                    class="auto-width"
                    style="
                      color: #004e66 !important;
                      padding: 10px 20px !important;
                      border: 1px #004e66 solid;
                      background-color: transparent;
                      border-radius: 10px;
                      font-size: 16px !important;
                      text-decoration: none !important;
                      width: 160px;
                      text-align: center;
                      display: block;
                    "
                    href="https://www.ofaloo.com/contactez-nous/"
                    >Contactez-nous</a
                  >
                  <a
                    class="auto-width"
                    style="
                      color: #004e66 !important;
                      padding: 10px 20px !important;
                      border: 1px #004e66 solid;
                      background-color: transparent;
                      border-radius: 10px;
                      font-size: 16px !important;
                      text-decoration: none !important;
                      width: 160px;
                      display: block;
                      margin-left: 2rem;
                      text-align: center;
                    "
                    href="https://www.ofaloo.com/faq/"
                    >FAQs</a
                  >
                </div>
              </div>
    
              <div
                style="
                  margin-top: 30px !important;
                  font-size: 16px !important;
                  padding-top: 1.5rem;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <span
                  >Si vous n'avez pas créer de compte avec cette adresse email,
                  veuillez s'il vous plaît ignorer cet email et le supprimer.</span
                >
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  },
  reset(hash, email, name) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Réinitialisation du mot de passe | Ofaloo</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Page de réinitialisation du mot de passe"
        />
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    />
        <style>
          .bb:hover {
            background-color: #0a3d4d !important;
          }

          .img {
            width: 48px !important;
            height: 48px !important;
          }
          .block {
            display: block !important;
          }
          .w-fit {
        width: intrinsic !important; /* Safari/WebKit uses a non-standard name */
        width: -moz-max-content !important; /* Firefox/Gecko */
        width: -webkit-max-content !important;
      }
      .h-fit {
        height: intrinsic !important; /* Safari/WebKit uses a non-standard name */
        height: -moz-max-content !important; /* Firefox/Gecko */
        height: -webkit-max-content !important;
      }
      .m-0-auto {
        margin: 0 auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      .img {
        width: 48px !important;
        height: 48px !important;
      }
          .w-full{
            width: 100% !important;
          }
          .h-full {
            height: 100% !important;
          }
          @media screen and (max-width: 800px) {
            .home {
              width: auto !important;
            }
          }
          @media screen and (max-width: 640px) {
            .home {
              width: 100% !important;
              padding-left: 2.5rem !important;
              padding-right: 2.5rem !important;
              width: fit-content !important;
            }
          }
        </style>
      </head>
      <body>
        <div
          class="home"
          style="
            font-family: system-ui;
            padding-bottom: 3rem;
            color: #2d3748;
            width: 767px;
            margin: 0 auto !important;
          "
        >
          <div style="display: flex !important; align-items: center !important">
          <img
              class="img"
              src="https://ofalooback.herokuapp.com/storage/svg/logo.png"
              alt="Ofaloo logo"
            />
            <span class="block w-fit h-fit"
              style="
                font-weight: 600 !important;
                font-size: 28px;
                color: #004e66;
                margin-left: 5px;
              "
              >Ofaloo</span
            >
          </div>
          <div style="margin-top: 25px !important; font-size: 18px !important">
            <div>
              <span class="w-fit m-0-auto"
                style="
                  font-weight: 600 !important;
                  display: block;
                "
                >REINITIALISATION DU MOT DE PASSE</span
              >
            </div>
            <div style="margin-top: 30px !important; font-weight: 600 !important">
              <span>Bonjour ${this.capitalize(name)},</span>
            </div>
            <div style="margin-top: 10px !important">
              <span
                >Vous avez demandé à réinitialiser votre mot de passe.
                Pour réinitialiser votre mot de passe, veuillez s'il vous plaît cliquer sur le bouton suivant.</span
              >
            </div>
            <div style="margin-top: 30px !important">
              <a
                class="bb w-fit m-0-auto"
                style="
                  color: white !important;
                  padding: 10px 20px !important;
                  border: 1px transparent solid;
                  background-color: #004e66;
                  border-radius: 10px;
                  font-size: 16px !important;
                  text-decoration: none !important;
                  display: block;
                "
                href="https://www.ofaloo.com/res?email=${email}&alinux=${hash}"
                >Réinitialiser</a
              >
            </div>
            <div style="margin-top: 30px !important">
              <span>Toute l'équipe Ofaloo,</span>
            </div>
            <div style="margin-top: 20px !important; font-size: 18px !important">
              <span>Ou réinitialisez votre mot de passe en utilisant le lien suivant:</span>
            </div>
            <a
              href="https://www.ofaloo.com/res?email=${email}&alinux=${hash}"
              style="
                margin-top: 30px !important;
                font-size: 16px !important;
                color: #004e66;
              "
            >
              <span>https://www.ofaloo.com/res?email=${email}&alinux=${hash}</span>
            </a>
            <div
                style="
                  margin-top: 30px !important;
                  font-size: 16px !important;
                  font-weight: 600 !important;
                  padding-top: 1.5rem;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <span
                  >Ce lien n'est valable que pendant 1h (une heure).</span
                >
              </div>
            <div
              style="
                margin-top: 40px !important;
                font-size: 16px !important;
                padding-top: 1.5rem;
                border-top: 1px solid #e2e8f0;
              "
            >
              <div class="w-fit m-0-auto"
                style="
                text-align: center;
                  display: block;
                "
              >
                <span class="w-fit m-0-auto"
                  style="
                    display: block;
                  "
                  >Avez-vous une question ou besoin d'une assistance ?</span
                >
                <div class="w-fit m-0-auto"
                  style="
                    margin-top: 1rem !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-items: center;
                    justify-content: center;
                  "
                >
                  <a
                    class="auto-width"
                    style="
                      color: #004e66 !important;
                      padding: 10px 20px !important;
                      border: 1px #004e66 solid;
                      background-color: transparent;
                      border-radius: 10px;
                      font-size: 16px !important;
                      text-decoration: none !important;
                      width: 160px;
                      text-align: center;
                      display: block;
                    "
                    href="https://www.ofaloo.com/contactez-nous/"
                    >Contactez-nous</a
                  >
                  <a
                    class="auto-width"
                    style="
                      color: #004e66 !important;
                      padding: 10px 20px !important;
                      border: 1px #004e66 solid;
                      background-color: transparent;
                      border-radius: 10px;
                      font-size: 16px !important;
                      text-decoration: none !important;
                      width: 160px;
                      display: block;
                      margin-left: 2rem;
                      text-align: center;
                    "
                    href="https://www.ofaloo.com/faq/"
                    >FAQs</a
                  >
                </div>
              </div>
    
              <div
                style="
                  margin-top: 30px !important;
                  font-size: 16px !important;
                  padding-top: 1.5rem;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <span
                  >Si vous n'avez pas créer de compte avec cette adresse email,
                  veuillez s'il vous plaît ignorer cet email et le supprimer.</span
                >
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  },
}

export default ({ app }, inject) => {
  inject('linker', linker)
}
