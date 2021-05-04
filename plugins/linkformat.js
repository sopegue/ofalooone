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
  capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  email(hash, email, name) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Verification de votre adresse email</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta
          name="description"
          content="Page de verification de l'adresse email"
        />
        <style>
          .bb:hover {
            background-color: #0a3d4d !important;
          }
        </style>
      </head>
      <body>
        <div
          style="
            font-family: system-ui;
            padding-bottom: 3rem;
            margin-left: 10px !important;
            color: #2d3748;
            margin-right: 10px !important;
          "
        >
          <div style="display: flex !important; align-items: center !important">
            <svg
              style="transform: scale(0.8)"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <ellipse
                  id="svg_1"
                  stroke="null"
                  cx="32.29449"
                  cy="31.78108"
                  rx="9.660395"
                  ry="13.109834"
                  fill="#004e66"
                />
                <path
                  id="svg_2"
                  stroke="null"
                  d="m61.618233,26.535174l-28.087749,-23.924539a2.006268,1.993712 0 0 0 -2.608148,0l-28.087749,23.924539a2.006268,1.993712 0 1 0 2.608148,3.030442l1.364262,-1.17629l0,27.573031a6.018803,5.981135 0 0 0 6.018803,5.981135l38.801219,0a6.018803,5.981135 0 0 0 6.018803,-5.981135l0,-27.573031l1.364262,1.17629a2.006268,1.993712 0 1 0 2.608148,-3.030442zm-27.385555,20.774475l0,4.665285a2.006268,1.993712 0 0 1 -4.012536,0l0,-4.665285a16.812524,16.707303 0 0 1 1.384325,-31.121838a1.885892,1.874089 0 0 1 1.243886,0a16.812524,16.707303 0 0 1 1.384325,31.121838z"
                  fill="#004e66"
                />
              </g>
            </svg>
            <span
              style="
                font-weight: 600 !important;
                font-size: 36px;
                color: #004e66;
                margin-left: 5px;
              "
              >Ofaloo</span
            >
          </div>
          <div style="margin-top: 25px !important; font-size: 20px !important">
            <div>
              <span
                style="
                  font-weight: 600 !important;
                  margin: 0 auto !important;
                  width: fit-content !important;
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
                class="bb"
                style="
                  color: white !important;
                  padding: 10px 20px !important;
                  border: 1px transparent solid;
                  background-color: #004e66;
                  border-radius: 10px;
                  font-size: 16px !important;
                  text-decoration: none !important;
                  margin: 0 auto !important;
                  width: fit-content !important;
                  display: block;
                "
                href="https://www.ofaloo.com/vef?email=${email}&alinux=${hash}"
                >Verifier Maintenant</a
              >
            </div>
            <div style="margin-top: 30px !important">
              <span>Toute l'équipe Ofaloo,</span>
            </div>
            <div style="margin-top: 20px !important; font-size: 20px !important">
              <span>Ou vérifiez votre compte en utilisant le lien suivant:</span>
            </div>
            <a
              href="https://www.ofaloo.com/vef?email=${email}&alinux=${hash}"
              style="
                margin-top: 30px !important;
                font-size: 18px !important;
                color: #004e66;
              "
            >
              <span>https://www.ofaloo.com/vef?email=${email}&alinux=${hash}</span>
            </a>
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
      </body>
    </html>
    `
  },
}

export default ({ app }, inject) => {
  inject('linker', linker)
}
