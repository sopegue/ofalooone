export const state = () => ({
  // Status
  items: ['Renting', 'For Sale'],
  currentSearch: 'For Sale',
  scrollpos: 1500,
  size: 9999,
  minsearch: false,
  domloading: true,
  quicksign: false,
  component: -1,
  decomponent: -1,
  tosave: -1,
  precom: -1,
  hasscrolled: false,
  filter: null,
  reseting: false,
  from: '/',
  ip: null,
  report: false,
  prop: -1,

  delmod: false,
  del: false,

  regerror: false,
  regsuccess: false,
  accountdeleting: false,

  fromprop: false,

  relfav: false,

  url: '',
  type: 'article',
  title: '',
  description: '',
  image: '',
})

export const mutations = {
  // User info
  setRorS(state, value) {
    state.currentSearch = value
  },
  set_meta(state, value) {
    state.url = value.url
    state.type = 'article'
    state.title = value.title
    state.description = value.description
    state.image = value.image
  },
  set_HasScrolled(state, value) {
    state.hasscrolled = value
  },
  set_id(state, value) {
    state.prop = value
  },
  set_report(state, value) {
    state.report = value
  },
  set_Scroll(state, value) {
    state.scrollpos = value
  },
  set_ip(state, value) {
    state.ip = value
  },
  rel_fav(state, value) {
    state.relfav = value
  },
  set_Domload(state, value) {
    state.domloading = value
  },
  SET_DEL_MOD(state, value) {
    state.delmod = value
  },

  SET_DEL_ACC(state, value) {
    state.del = value
  },

  set_prop(state, value) {
    state.fromprop = value
  },
  set_tosave(state, value) {
    state.tosave = value
  },
  previous(state, value) {
    state.from = value
  },
  set_Size(state, value) {
    state.size = value
  },
  close_quick_sign(state, value) {
    state.quicksign = value
  },
  precom(state, value) {
    state.precom = value
  },
  component(state, value) {
    state.component = value
  },
  decomponent(state, value) {
    state.decomponent = value
  },
  set_Reseting(state, value) {
    state.reseting = value
  },
  set_Deleting(state, value) {
    state.accountdeleting = value
  },
  set_Filter(state, value) {
    state.filter = value
  },
  set_MinSearch(state, value) {
    state.minsearch = value
  },
}
