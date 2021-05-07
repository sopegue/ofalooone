export default function ({ $auth, redirect, store, route }) {
  $auth.onError(() => {
    return redirect('/')
  })
  // store.commit('previous', route.path)
}
