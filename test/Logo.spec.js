import { mount } from '@vue/test-utils'
import Logo from '~/components/logo/Logo.vue'
import Home from '~/components/logo/Home.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home, {
      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
