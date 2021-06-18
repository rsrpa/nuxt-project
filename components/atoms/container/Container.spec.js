import { shallowMount } from '@vue/test-utils';
import Container from '~/components/atoms/container/Container';

describe('Container.vue', () => {
  it('is styled as a section', () => {
    const wrapper = shallowMount(Container);
    expect(wrapper.classes()).toStrictEqual(['section']);
  });
  it(
    'allows for both, dynamic and static classes to be added by the ' +
      'parent',
    () => {
      const wrapper = shallowMount(Container, {
        context: {
          class: 'dynamic-class',
          staticClass: 'static-class',
        },
      });
      expect(wrapper.classes()).toStrictEqual([
        'section',
        'dynamic-class',
        'static-class',
      ]);
    }
  );
  it('should render background image, when the prop is passed', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        backgroundImage: 'test',
      },
    });
    expect(wrapper.attributes('style')).toBe('background-image: url(test);');
  });
  it('should be wrapped with a tag deterimined by sectionTag prop', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        sectionTag: 'div',
      },
    });
    expect(wrapper.element.tagName).toBe('DIV');
  });
  it('should default to section tag when no sectionTag prop is provided', () => {
    const wrapper = shallowMount(Container);
    expect(wrapper.element.tagName).toBe('SECTION');
  });
  it('should have pre-container slot', () => {
    const wrapper = shallowMount(Container, {
      slots: {
        'pre-container': `<div id='test'>Test</div>`,
      },
    });
    expect(wrapper.find('#test').exists()).toBe(true);
  });
  it('should render container', () => {
    const wrapper = shallowMount(Container);
    expect(wrapper.find('.container').exists()).toBe(true);
  });
  it('should render container tag as defined by containerTag prop', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        containerTag: 'article',
      },
    });
    expect(wrapper.find('.container').element.tagName).toBe('ARTICLE');
  });
  it('should pass classes to the container through containerClass prop', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        containerClass: 'test',
      },
    });
    expect(wrapper.find('.container').classes()).toStrictEqual([
      'container',
      'test',
    ]);
  });
  it('should render the content passed through default slot', () => {
    const wrapper = shallowMount(Container, {
      slots: {
        default: `<div id='test'>Test</div>`,
      },
    });
    expect(wrapper.find('#test').exists()).toBe(true);
  });
  it('should render the content passed through post-container slot', () => {
    const wrapper = shallowMount(Container, {
      slots: {
        'post-container': `<div id='test'>Test</div>`,
      },
    });
    expect(wrapper.find('#test').exists()).toBe(true);
  });
});
