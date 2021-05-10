<template>
  <div class="pl-5 pt-5">Vérification...</div>
</template>

<script>
export default {
  middleware: 'vef',
  beforeMount() {
    this.verify()
  },
  methods: {
    verify() {
      this.verification()
        .then((result) => {
          if (result.status === '200') {
            if (sessionStorage.new) sessionStorage.removeItem('new')
            sessionStorage.setItem('new', this.$route.query.email)
            if (sessionStorage.ofaloo_h) sessionStorage.removeItem('ofaloo_h')
            sessionStorage.setItem('ofaloo_h', this.$route.query.alinux)
            location.assign('/reset-success')
          }
          if (result.status === '500') {
            location.assign('/')
          }
          if (result.status === '1997' || result.status === '404') {
            if (localStorage.invalid) localStorage.removeItem('invalid')
            localStorage.setItem('invalid', true)
            location.assign('/expirated-reset')
          }
          if (result.status === '401') {
            if (this.$auth.loggedIn) {
              this.$auth.logout().then((res) => {
                if (localStorage.hdzd) localStorage.removeItem('hdzd')
                location.reload()
              })
            } else location.assign('/')
          }
        })
        .catch(() => {
          location.assign('/')
        })
    },
    async verification() {
      return await new Promise((resolve, reject) => {
        resolve(
          this.$axios.$get(
            'reset/' + this.$route.query.email + '/' + this.$route.query.alinux
          )
        )
      }).catch(() => {
        console.error("Oops, can't resolve your promise getting hash")
      })
    },
  },
}
</script>

<style scoped></style>
