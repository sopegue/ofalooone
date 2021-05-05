export default function ({ store, route, redirect }) {
  if (
    route.query.email === null ||
    route.query.email === undefined ||
    route.query.alinux === null ||
    route.query.alinux === undefined
  )
    return redirect('/')
  if (
    route.query.email !== null &&
    route.query.email !== undefined &&
    (route.query.email === '' ||
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        route.query.email
      ) === false)
  )
    return redirect('/')
}
