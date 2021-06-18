import { shallowMount } from '@vue/test-utils';
import BaseImage from './BaseImage.vue';

const wrapper = shallowMount(BaseImage, {
  propsData: {
    src: '/image.jpg',
    alt: 'Test alt',
  },
});

describe('BaseImage', () => {
  test('is a Vue instance', () => {
    const baseImage = wrapper.findComponent({ name: 'BaseImage' });
    expect(baseImage.exists()).toBe(true);
  });
});

describe('BaseImage', () => {
  test('renders correct img tag', () => {
    const baseImage = wrapper.findComponent({ name: 'BaseImage' });
    expect(baseImage.find('img').exists()).toBe(true);
    expect(baseImage.attributes('src')).toBe('/image.jpg');
    expect(baseImage.attributes('alt')).toBe('Test alt');
  });
});
