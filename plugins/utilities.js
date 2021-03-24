const utility = {
  name: 'Utility',
  sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < milliseconds)
  },
}

export default ({ app }, inject) => {
  inject('utility', utility)
}
