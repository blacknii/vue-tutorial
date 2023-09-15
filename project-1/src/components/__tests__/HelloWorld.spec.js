import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SingleNote from '../SingleNote.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(SingleNote, {
      props: { note: { id: 1, content: 'Write a haiku about the sunset over the ocean.' } }
    })
    expect(wrapper.text()).toContain('Write a haiku about the sunset over the ocean.')
    expect(wrapper.find('p').exists()).toBeTruthy()
  })
})
