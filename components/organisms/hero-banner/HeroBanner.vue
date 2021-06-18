<template>
  <Container class="section--pv-0">
    <div class="hero-banner grid">
      <div class="hero-banner__inner">
        <div v-if="$props.heroBanner.heading && $props.heroBanner.subheading">
          <TwoToneTitle
            tag="h1"
            visual-style="typography-heading-1"
            :heading="$props.heroBanner.heading"
            :subheading="$props.heroBanner.subheading"
          />
        </div>
        <div v-if="$props.heroBanner.bullets">
          <BaseList tag="ul" :list="$props.heroBanner.bullets" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';
import BaseList from '@/components/atoms/base-list/BaseList.vue';

export default {
  name: 'HeroBanner',
  components: {
    TwoToneTitle,
    BaseList,
  },
  props: {
    heroBanner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  background-color: inherit;
  padding: ($spacing-default * 10) 0;

  @include breakpoint-min(sm) {
    padding: ($spacing-default * 12) 0;
  }

  @include breakpoint-min(md) {
    padding: ($spacing-default * 16) 0;
  }

  @include breakpoint-min(lg) {
    padding: ($spacing-default * 20) 0;
  }

  &__inner {
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    @include breakpoint-min(sm) {
      grid-column: 1 / span 10;
    }

    @include breakpoint-min(md) {
      grid-column: 1 / span 8;
    }

    & .list {
      margin-top: 48px;

      ::v-deep .list__item {
        color: $black-500;
        @include font-size(20px);
        line-height: 26px;

        @include breakpoint-min(md) {
          @include font-size(24px);
          line-height: 30px;
        }

        @include breakpoint-min(lg) {
          @include font-size(30px);
          line-height: 38px;
        }
      }
    }
  }
}
</style>
