<template>
  <BaseLink :path="$props.link" :external="true" class="solution-card-minor">
    <TwoToneTitle
      tag="h3"
      visual-style="typography-heading-4"
      :heading="$props.title"
      :subheading="$props.subtitle"
      class="solution-card-minor__headings"
    />
    <BaseImage
      :src="$props.icon"
      :alt="$props.title"
      class="solution-card-minor__icon"
    />
  </BaseLink>
</template>

<script>
import BaseLink from '@/components/atoms/base-link/BaseLink.vue';
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';
import BaseImage from '@/components/atoms/base-image/BaseImage.vue';

export default {
  name: 'SolutionCardMinor',
  components: {
    BaseLink,
    TwoToneTitle,
    BaseImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
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
.solution-card-minor {
  background-color: $core-white;
  border-radius: $border-radius-sm;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  padding: $spacing-default * 4;
  text-decoration: none;

  @include breakpoint-min(sm) {
    border-radius: $border-radius-md;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-default * 6;
  }

  @include breakpoint-min(lg) {
    border-radius: $border-radius-lg;
    padding: $spacing-default * 8;
  }

  &__headings {
    display: inline-block;
    margin-right: 16px;

    @include breakpoint-min(sm) {
      margin-right: 0;
      margin-bottom: $spacing-default * 8;
    }
  }

  &__icon {
    width: 80px;
    height: 80px;

    @include breakpoint-min(sm) {
      width: 100%;
      height: auto;
    }
  }
}
</style>
