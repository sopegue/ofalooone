export default function ({ route, redirect, $auth }) {
  if (route.path.includes('/connexion')) {
    if ($auth.loggedIn) return redirect('/')
  }
}
