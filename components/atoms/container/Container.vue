<template functional>
  <component
    :is="props.sectionTag"
    :class="['section', data.class, data.staticClass]"
    :style="[
      props.backgroundImage
        ? {
            'background-image': 'url(' + props.backgroundImage + ')',
          }
        : '',
    ]"
  >
    <slot name="pre-container" />
    <component
      :is="props.containerTag"
      :class="['container', props.containerClass]"
    >
      <slot />
    </component>
    <slot name="post-container" />
  </component>
</template>
<script>
export default {
  name: 'Container',
  props: {
    sectionTag: {
      type: String,
      default: 'section',
      validator(tag) {
        return ['section', 'div'].includes(tag);
      },
    },
    backgroundImage: {
      type: String,
      default: '',
    },
    containerTag: {
      type: String,
      default: 'div',
      validator(tag) {
        return ['article', 'div'].includes(tag);
      },
    },
    containerClass: {
      type: String,
      default: '',
    },
  },
};
</script>
