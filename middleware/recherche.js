export default function ({ store, route, redirect }) {
  if (route.query.q !== undefined && route.query.q !== 'super-agent')
    return redirect('/recherche')
  if (
    route.query.q !== null &&
    route.query.q !== undefined &&
    route.query.ofloowa !== null &&
    route.query.ofloowa !== undefined
  )
    return redirect('/recherche')
  if (route.query.ofloowa !== null && route.query.ofloowa !== undefined) {
    if (!route.query.ofloowa.includes(' ')) {
      if (!isNaN(route.query.ofloowa) && !route.query.ofloowa.includes('.')) {
        if (route.query.ofloowa === '') {
          return redirect('/recherche')
        }
      } else return redirect('/recherche')
    } else return redirect('/recherche')
  }
}
