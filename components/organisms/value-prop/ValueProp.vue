<template>
  <Container class="value-prop">
    <SectionHeading v-if="$props.title" :title="$props.title" />
    <div class="value-prop__inner grid">
      <div class="value-prop__text">
        <TwoToneTitle
          v-for="(block, index) in $props.blocks"
          :key="index"
          class="value-prop__block"
          tag="h3"
          visual-style="typography-heading-3"
          :heading="block.title"
          :subheading="block.subtitle"
        />
      </div>

      <BaseImage
        :src="$props.image.src"
        :alt="$props.image.alt"
        class="value-prop__image"
      />
    </div>
  </Container>
</template>

<script>
import SectionHeading from '@/components/molecules/section-heading/SectionHeading.vue';
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';
import BaseImage from '@/components/atoms/base-image/BaseImage.vue';

export default {
  name: 'ValueProp',
  components: {
    SectionHeading,
    TwoToneTitle,
    BaseImage,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      required: true,
      validator(image) {
        return 'src' in image && 'alt' in image;
      },
    },
    blocks: {
      type: Array,
      required: true,
      validator(blocks) {
        return blocks.every((block) => 'title' in block && 'subtitle' in block);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.value-prop {
  &__inner {
    align-items: center;
  }

  &__text {
    grid-row: 1;
    grid-column: 1 / span 12;

    @include breakpoint-min(sm) {
      grid-column: 1 / span 7;
    }
  }

  &__block {
    margin-bottom: ($spacing-default * 10);

    @include breakpoint-min(sm) {
      margin-bottom: ($spacing-default * 12);
    }

    @include breakpoint-min(md) {
      margin-bottom: ($spacing-default * 14);
    }

    @include breakpoint-min(lg) {
      margin-bottom: ($spacing-default * 18);
    }
  }

  &__block:last-of-type {
    @include breakpoint-min(sm) {
      margin-bottom: 0;
    }
  }

  &__image {
    grid-row: 2;
    grid-column: 1 / span 12;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    position: relative;
    right: 50%;
    width: 100vw;

    @include breakpoint-min(sm) {
      grid-row: 1;
      grid-column: 8 / span 5;
      left: 2%;
      margin-left: 0vw;
      margin-right: -40vw;
      right: 50%;
      max-width: 40vw;
      position: relative;
      width: 40vw;
    }
  }
}
</style>
