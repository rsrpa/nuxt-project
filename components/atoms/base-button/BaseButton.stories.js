// TODO: Enable this story after fixing the storybook error
import BaseButton from './BaseButton.vue';

export default {
  title: 'Atoms/BaseButton',
  component: BaseButton,
};

export const Primary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<BaseButton>Primary</BaseButton>',
});
