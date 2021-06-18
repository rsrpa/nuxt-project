import { shallowMount } from '@vue/test-utils';
import BaseHeading from './BaseHeading.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BaseHeading, {
    propsData: {
      tag: 'h1',
    },
    slots: {
      default: ['Heading Text'],
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('BaseHeading', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('BaseHeading', () => {
  test('has tag corresponding to passed prop', async () => {
    await wrapper.setProps({ tag: 'h1' });
    expect(wrapper.find('h1').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'h2' });
    expect(wrapper.find('h2').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'h3' });
    expect(wrapper.find('h3').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'h4' });
    expect(wrapper.find('h4').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'h5' });
    expect(wrapper.find('h5').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'h6' });
    expect(wrapper.find('h6').exists()).toBeTruthy();
  });
});

describe('BaseHeading', () => {
  test('has content corresponding to passed slot', () => {
    expect(wrapper.find('h1').text()).toBe('Heading Text');
  });
});
