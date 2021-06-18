import { shallowMount } from '@vue/test-utils';
import SolutionsList from './SolutionsList.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(SolutionsList, {
    propsData: {
      cards: [
        {
          title: 'Card 1 title',
          subtitle: 'Card 1 subtitle',
          icon: '/card-1-img',
          link: '/card-1',
        },
        {
          title: 'Card 2 title',
          subtitle: 'Card 2 subtitle',
          icon: '/card-2-img',
          link: '/card-2',
        },
      ],
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SolutionsList', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('SolutionsList', () => {
  test('should render 2 instances of the SolutionsCardMajor component', () => {
    const div = wrapper.find('.solutions-list');
    const cards = div.findAll('solutioncardmajor-stub');
    expect(cards.exists()).toBe(true);
    expect(cards.length).toBe(2);
  });
});
