import { shallowMount } from '@vue/test-utils';
import CopyrightLabel from './CopyrightLabel.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(CopyrightLabel);
});

afterEach(() => {
  wrapper.destroy();
});

describe('CopyrightLabel', () => {
  test('is instanciated', () => {
    const CopyrightLabel = wrapper.findComponent({ name: 'CopyrightLabel' });
    expect(CopyrightLabel.exists()).toBe(true);
  });
});

describe('CopyrightLabel', () => {
  test('shows the correct date', () => {
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear);
  });
});
