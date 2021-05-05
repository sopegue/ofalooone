<template>
  <div class="pl-5 pt-5">Verification...</div>
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
            if (localStorage.success) localStorage.removeItem('success')
            localStorage.setItem('success', true)
            location.assign('/confirmation-success')
          }
          if (result.status === '404' || result.status === '500') {
            location.assign('/')
          }
          if (result.status === '1997') {
            if (localStorage.invalid) localStorage.removeItem('invalid')
            localStorage.setItem('invalid', true)
            location.assign('/expirated-link')
          }
          if (result.status === '401') {
            if (this.$auth.loggedIn) {
              this.$auth.logout().then((res) => {
                if (localStorage.hdzd) localStorage.removeItem('hdzd')
                location.reload()
              })
            }
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
            'http://localhost:8000/api/verification/' +
              this.$route.query.email +
              '/' +
              this.$route.query.alinux
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
