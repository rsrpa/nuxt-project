import BaseLink from './BaseLink.vue';

export default {
  component: BaseLink,
  title: 'Atoms/BaseLink',
};

const Template = (args, { argTypes }) => ({
  components: { BaseLink },
  props: Object.keys(argTypes),
  template: '<BaseLink v-bind="$props">MindGym</BaseLink>',
});

export const InternalLink = Template.bind({});
InternalLink.args = {
  path: 'www.google.com',
  external: true,
  noFollow: true,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  path: '/get-in-touch/',
  external: false,
};
