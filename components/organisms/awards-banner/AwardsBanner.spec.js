import { shallowMount } from '@vue/test-utils';
import AwardsBanner from './AwardsBanner.vue';

const wrapper = shallowMount(AwardsBanner, {
  propsData: {
    title: 'Test heading',
    awards: [
      {
        name: 'Award 1',
        image: '/award-1.png',
      },
      {
        name: 'Award 2',
        image: '/award-2.png',
      },
    ],
  },
  stubs: {
    BaseHeading: true,
    BaseImage: true,
  },
});

describe('AwardsBanner', () => {
  test('is a Vue instance', () => {
    const awardsBanner = wrapper.findComponent({ name: 'AwardsBanner' });
    expect(awardsBanner.exists()).toBe(true);
  });
});

describe('AwardsBanner', () => {
  test('renders correct heading tag', () => {
    const awardsBanner = wrapper.findComponent({ name: 'AwardsBanner' });
    expect(awardsBanner.find('baseheading-stub').exists()).toBe(true);
  });
});

describe('AwardsBanner', () => {
  test('renders an image for every object inside awards prop', () => {
    const awardsBanner = wrapper.findComponent({ name: 'AwardsBanner' });
    const images = awardsBanner.findAll('baseimage-stub');
    expect(images.exists()).toBe(true);
    expect(images.length).toBe(2);
    expect(images.at(0).attributes('src')).toBe('/award-1.png');
    expect(images.at(0).attributes('alt')).toBe('Award 1');
    expect(images.at(1).attributes('src')).toBe('/award-2.png');
    expect(images.at(1).attributes('alt')).toBe('Award 2');
  });
});

// TODO: Add additional tests for checking styles
