import { shallowMount } from '@vue/test-utils';
import BaseSubheading from './BaseSubheading.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BaseSubheading, {
    propsData: {
      tag: 'h2',
    },
    slots: {
      default: ['Subheading Text'],
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('BaseSubheading', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('BaseSubheading', () => {
  test('has tag corresponding to passed prop', async () => {
    await wrapper.setProps({ tag: 'h2' });
    expect(wrapper.find('h2').exists()).toBe(true);

    await wrapper.setProps({ tag: 'h3' });
    expect(wrapper.find('h3').exists()).toBe(true);

    await wrapper.setProps({ tag: 'h4' });
    expect(wrapper.find('h4').exists()).toBe(true);

    await wrapper.setProps({ tag: 'h5' });
    expect(wrapper.find('h5').exists()).toBe(true);

    await wrapper.setProps({ tag: 'p' });
    expect(wrapper.find('p').exists()).toBe(true);

    await wrapper.setProps({ tag: 'span' });
    expect(wrapper.find('span').exists()).toBe(true);
  });
});

describe('BaseSubheading', () => {
  test('has content corresponding to passed slot', () => {
    expect(wrapper.find('h2').text()).toBe('Subheading Text');
  });
});
