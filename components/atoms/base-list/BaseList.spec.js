import { shallowMount } from '@vue/test-utils';
import BaseList from './BaseList.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BaseList, {
    propsData: {
      tag: 'ul',
      list: ['List item 1', 'List item 2'],
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('BaseList', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('BaseList', () => {
  test('has tag corresponding to passed prop', async () => {
    await wrapper.setProps({ tag: 'ol' });
    expect(wrapper.find('ol').exists()).toBeTruthy();

    await wrapper.setProps({ tag: 'ul' });
    expect(wrapper.find('ul').exists()).toBeTruthy();
  });
});

describe('BaseList', () => {
  test('contains list item ', () => {
    expect(wrapper.find('ul').find('li').exists()).toBeTruthy();
    expect(wrapper.findAll('li').length).toBe(2);
    expect(wrapper.findAll('li').at(0).text()).toBe('List item 1');
    expect(wrapper.findAll('li').at(1).text()).toBe('List item 2');
  });
});
