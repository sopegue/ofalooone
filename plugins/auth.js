export default function ({ $auth, redirect }) {
  $auth.onError(() => {
    return redirect('/')
  })
}
