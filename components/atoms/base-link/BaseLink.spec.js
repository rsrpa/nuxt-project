import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import BaseLink from './BaseLink.vue';

const wrapper = shallowMount(BaseLink, {
  stubs: {
    NuxtLink: RouterLinkStub,
  },
  propsData: {
    path: '/test',
  },
});

describe('BaseLink', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('BaseLink', () => {
  test('creates an a tag', () => {
    expect(wrapper.element.tagName).toBe('A');
  });
});

describe('BaseLink', () => {
  test('links to the page passed by path prop', async () => {
    await wrapper.trigger('click');
    await wrapper.vm.$nextTick();
    const links = wrapper.findAllComponents(RouterLinkStub);
    expect(links.at(0).props().to).toBe('/test');
  });
});
