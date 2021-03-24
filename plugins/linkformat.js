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
}

export default ({ app }, inject) => {
  inject('linker', linker)
}
