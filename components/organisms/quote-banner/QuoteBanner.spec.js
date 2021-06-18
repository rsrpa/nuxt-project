import { mount } from '@vue/test-utils';
import QuoteBanner from './QuoteBanner.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(QuoteBanner, {
    propsData: {
      logo: {
        image: '/logo.svg',
        alt: 'Company logo',
      },
      backgroundImage: '/background.jpg',
      quotation: 'Test quote',
      name: 'Firstname Surname',
      position: 'Test Position',
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('QuoteBanner', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('QuoteBanner', () => {
  test('creates elements from properties', () => {
    expect(wrapper.find('h4').exists()).toBe(true);
    expect(wrapper.find('h4').text()).toBe('Test quote');

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('/logo.svg');
  });
});
