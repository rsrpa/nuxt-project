<template>
  <BaseLink :path="$props.link" :external="true" class="solution-card-major">
    <TwoToneTitle
      tag="h2"
      visual-style="typography-heading-3"
      :heading="$props.title"
      :subheading="$props.subtitle"
      class="solution-card-major__title"
    />
    <BaseImage
      :src="$props.icon"
      :alt="$props.title"
      class="solution-card-major__icon"
    />
  </BaseLink>
</template>

<script>
import BaseLink from '@/components/atoms/base-link/BaseLink.vue';
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';
import BaseImage from '@/components/atoms/base-image/BaseImage.vue';

export default {
  name: 'SolutionCardMajor',
  components: {
    TwoToneTitle,
    BaseImage,
    BaseLink,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.solution-card-major {
  background-color: $core-white;
  border-radius: $border-radius-sm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  text-decoration: none;

  @include breakpoint-min(sm) {
    border-radius: $border-radius-md;
  }

  @include breakpoint-min(lg) {
    border-radius: $border-radius-lg;
  }

  &__title {
    padding: $spacing-default * 6;

    @include breakpoint-min(sm) {
      padding: $spacing-default * 8;
    }

    @include breakpoint-min(lg) {
      padding: $spacing-default * 10;
    }
  }

  &__icon {
    width: 180px;
    height: 180px;
    align-self: flex-end;

    @include breakpoint-min(sm) {
      width: 248px;
      height: 248px;
    }

    @include breakpoint-min(lg) {
      width: 440px;
      height: 440px;
    }
  }
}
</style>
