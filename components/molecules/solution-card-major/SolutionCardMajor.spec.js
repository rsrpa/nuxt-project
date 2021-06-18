import { shallowMount } from '@vue/test-utils';
import SolutionCardMajor from './SolutionCardMajor.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(SolutionCardMajor, {
    propsData: {
      title: 'Test title',
      subtitle: 'Test subtitle',
      link: '/test',
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SolutionCardMajor', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('SolutionCardMajor', () => {
  test('should render TwoToneTitle component and apply the correct class', () => {
    const twoToneTitle = wrapper.findComponent({ name: 'TwoToneTitle' });
    expect(twoToneTitle.classes()).toStrictEqual([
      'solution-card-major__title',
    ]);
  });
});

describe('SolutionCardMajor', () => {
  test('should render BaseImage component and apply the correct class', () => {
    const baseImage = wrapper.findComponent({ name: 'BaseImage' });
    expect(baseImage.classes()).toStrictEqual(['solution-card-major__icon']);
  });
});

describe('SolutionCardMajor', () => {
  test('should render BaseLink component and apply the correct class', () => {
    const baseLink = wrapper.findComponent({ name: 'BaseLink' });
    expect(baseLink.classes()).toStrictEqual(['solution-card-major']);
  });
});
