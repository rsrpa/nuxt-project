import { mount } from '@vue/test-utils';
import BrandLogo from './BrandLogo.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(BrandLogo, {
    stubs: {
      NuxtLink: true,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('BrandLogo', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('BrandLogo', () => {
  test('has an image', () => {
    const logoImage = wrapper.find('img');
    expect(logoImage).toBeDefined();
    expect(logoImage.attributes('title')).toBe('MindGym Logo');
  });
});
