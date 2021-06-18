import { RouterLinkStub, mount } from '@vue/test-utils';
import CtaBanner from './CtaBanner.vue';

const wrapper = mount(CtaBanner, {
  stubs: {
    NuxtLink: RouterLinkStub,
  },
  propsData: {
    ctaBanner: {
      heading: {
        tag: 'h4',
        text: 'Primary title',
      },
      paragraph: 'Paragraph describing the CTA',
      primaryButton: {
        path: '/primary-button-link',
        label: 'Primary button ',
      },
      secondaryButton: {
        path: '/secondary-button-link',
        label: 'Secondary button',
      },
    },
  },
});

describe('CtaBanner', () => {
  test('is a Vue instance', () => {
    const CtaBanner = wrapper.findComponent({ name: 'CtaBanner' });
    expect(CtaBanner.exists()).toBe(true);
  });
});

describe('CtaBanner', () => {
  test('has html tags corresponding to passed props', () => {
    const CtaBanner = wrapper.findComponent({ name: 'CtaBanner' });
    expect(CtaBanner.find('h4').exists()).toBe(true);
    expect(CtaBanner.find('p').exists()).toBe(true);
    const links = CtaBanner.findAll('a');
    expect(links.exists()).toBe(true);
    expect(links.length).toBe(2);
  });
});

describe('CtaBanner', () => {
  test('creates links through passed props', () => {
    const links = wrapper.findAllComponents(RouterLinkStub);
    expect(links.at(0).props().to).toBe('/primary-button-link');
    expect(links.at(1).props().to).toBe('/secondary-button-link');
  });
});
