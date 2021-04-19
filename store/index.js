export const state = () => ({
  // Status
  items: ['Renting', 'For Sale'],
  currentSearch: 'For Sale',
  scrollpos: 1500,
  size: 9999,
  minsearch: false,
  domloading: true,
  hasscrolled: false,
  filter: null,
  reseting: false,

  regerror: false,
  regsuccess: false,
  accountdeleting: false,
})

export const mutations = {
  // User info
  setRorS(state, value) {
    state.currentSearch = value
  },
  set_HasScrolled(state, value) {
    state.hasscrolled = value
  },
  set_Scroll(state, value) {
    state.scrollpos = value
  },
  set_Domload(state, value) {
    state.domloading = value
  },
  set_Size(state, value) {
    state.size = value
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
