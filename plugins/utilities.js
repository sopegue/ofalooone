// import moment from 'moment'
const utility = {
  name: 'Utility',
  sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < milliseconds)
  },
  dating(date) {
    if (this.inSeconds(date, new Date()) > 60) {
      if (this.inMinutes(date, new Date()) > 60) {
        if (this.inHours(date, new Date()) > 24) {
          if (this.inDays(date, new Date()) > 7) {
            if (this.inWeeks(date, new Date()) > 4) {
              if (this.inMonths(date, new Date()) > 12) {
                return 'Il y a ' + this.inYears(date, new Date()) + ' an(s)'
              }
              return 'Il y a ' + this.inMonths(date, new Date()) + ' mois(s)'
            }
            return 'Il y a ' + this.inWeeks(date, new Date()) + ' semaine(s)'
          }
          return 'Il y a ' + this.inDays(date, new Date()) + ' jour(s)'
        }
        return 'Il y a ' + this.inHours(date, new Date()) + ' heure(s)'
      }
      return 'Il y a ' + this.inMinutes(date, new Date()) + ' an(s)'
    }
    return 'Il y a 1 minute'
  },
  inSeconds(date1, date2) {
    const diffInMs = Math.abs(date2 - date1)
    return diffInMs / (1000 * 60 * 60)
  },
  inMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1)
    return diffInMs / (1000 * 60)
  },
  inHours(date1, date2) {
    const diffInMs = Math.abs(date2 - date1)
    return diffInMs / 1000
  },
  inDays(d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / (24 * 3600 * 1000))
  },

  inWeeks(d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7))
  },

  inMonths(d1, d2) {
    const d1Y = d1.getFullYear()
    const d2Y = d2.getFullYear()
    const d1M = d1.getMonth()
    const d2M = d2.getMonth()

    return d2M + 12 * d2Y - (d1M + 12 * d1Y)
  },

  inYears(d1, d2) {
    return d2.getFullYear() - d1.getFullYear()
  },
}

export default ({ app }, inject) => {
  inject('utility', utility)
}
