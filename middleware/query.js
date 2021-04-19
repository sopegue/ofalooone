export default function ({ route, redirect }) {
  if (route.query.wyzes !== null && route.query.wyzes !== undefined) {
    if (!route.query.wyzes.includes(' ')) {
      if (!isNaN(route.query.wyzes) && !route.query.wyzes.includes('.')) {
        if (route.query.wyzes === '') {
          return redirect('/')
        }
      } else return redirect('/')
    } else return redirect('/')
  } else return redirect('/')
}
