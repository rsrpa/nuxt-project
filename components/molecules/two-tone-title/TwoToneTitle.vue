<template>
  <div class="two-tone-title">
    <BaseHeading
      :tag="$props.tag"
      :class="['two-tone-title__heading', $props.visualStyle]"
    >
      {{ $props.heading }}

      {{ $props.style }}
    </BaseHeading>
    <BaseSubheading
      tag="span"
      :class="['two-tone-title__subheading', $props.visualStyle]"
    >
      {{ $props.subheading }}
    </BaseSubheading>
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';
import BaseSubheading from '@/components/atoms/base-subheading/BaseSubheading.vue';

export default {
  name: 'TwoToneTitle',
  component: {
    BaseHeading,
    BaseSubheading,
  },
  props: {
    tag: {
      type: String,
      required: true,
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
      },
    },
    visualStyle: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.two-tone-title {
  display: flex;
  flex-direction: column;

  &__heading {
    margin-bottom: 0;
  }

  &__subheading {
    margin-bottom: 0;
  }
}
</style>
