<template>
  <div class="blended-learning">
    <SectionHeading
      v-if="$props.eyebrow || $props.title"
      :eyebrow="$props.eyebrow"
      :title="$props.title"
    />
    <div class="grid">
      <BaseImage
        :src="image.src"
        :alt="image.alt"
        class="blended-learning__image"
      />

      <TwoToneTitle
        tag="h3"
        visual-style="typography-heading-4"
        :heading="$props.liveMode.title"
        :subheading="$props.liveMode.subtitle"
        class="blended-learning__mode"
      />

      <TwoToneTitle
        tag="h3"
        visual-style="typography-heading-4"
        :heading="$props.digitalMode.title"
        :subheading="$props.digitalMode.subtitle"
        class="blended-learning__mode"
      />
    </div>
  </div>
</template>

<script>
import SectionHeading from '@/components/molecules/section-heading/SectionHeading.vue';
import BaseImage from '@/components/atoms/base-image/BaseImage.vue';
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';

export default {
  name: 'BlendedLearning',
  components: {
    SectionHeading,
    BaseImage,
    TwoToneTitle,
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
    image: {
      type: Object,
      required: true,
      validator(image) {
        return 'src' in image && 'alt' in image;
      },
    },
    liveMode: {
      type: Object,
      required: true,
      validator(live) {
        return 'title' in live && 'subtitle' in live;
      },
    },
    digitalMode: {
      type: Object,
      required: true,
      validator(digital) {
        return 'title' in digital && 'subtitle' in digital;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.blended-learning {
  &__image {
    grid-row: 2;
    grid-column: span 12;
    justify-self: center;
    margin-bottom: ($spacing-default * 4);

    @include breakpoint-min(sm) {
      grid-column: 3 / span 8;
      margin-bottom: ($spacing-default * 8);
    }
  }

  &__mode {
    grid-row: 3;
    grid-column: span 6;

    @include breakpoint-min(sm) {
      grid-column: 3 / span 4;
    }

    &:last-of-type {
      @include breakpoint-min(sm) {
        grid-column: 7 / span 4;
      }
    }
  }
}
</style>
