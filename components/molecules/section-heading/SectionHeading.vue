<template>
  <div class="section-heading grid">
    <span
      v-if="$props.eyebrow"
      class="typography-micro-header section-heading__eyebrow"
    >
      {{ $props.eyebrow }}
    </span>
    <BaseHeading
      v-if="$props.title"
      tag="h2"
      class="typography-heading-2 section-heading__heading"
    >
      {{ $props.title }}
    </BaseHeading>
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';

export default {
  name: 'SectionHeading',
  components: {
    BaseHeading,
  },
  props: {
    eyebrow: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.section-heading {
  justify-items: center;
  text-align: center;

  &__eyebrow {
    grid-column: span 12;
    margin-bottom: $spacing-default;

    @include breakpoint-min(sm) {
      margin-bottom: ($spacing-default * 2);
    }

    @include breakpoint-min(md) {
      margin-bottom: ($spacing-default * 3);
    }

    @include breakpoint-min(lg) {
      margin-bottom: ($spacing-default * 4);
    }
  }

  &__heading {
    grid-column: span 12;

    @include breakpoint-min(sm) {
      grid-column: 2 / span 10;
    }
  }
}
</style>
