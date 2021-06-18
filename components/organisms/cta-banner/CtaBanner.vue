<template>
  <Container>
    <div class="grid">
      <div class="cta-banner">
        <div v-if="$props.ctaBanner.heading">
          <BaseHeading
            :tag="$props.ctaBanner.heading.tag"
            class="cta-banner__heading"
          >
            {{ $props.ctaBanner.heading.text }}
          </BaseHeading>
        </div>
        <div v-if="$props.ctaBanner.paragraph">
          <p class="cta-banner__paragraph">
            {{ $props.ctaBanner.paragraph }}
          </p>
        </div>
        <div
          v-if="
            $props.ctaBanner.primaryButton || $props.ctaBanner.secondaryButton
          "
        >
          <BaseButton
            v-if="$props.ctaBanner.primaryButton"
            :path="$props.ctaBanner.primaryButton.path"
            class="button--small cta-banner__button"
          >
            {{ $props.ctaBanner.primaryButton.label }}
          </BaseButton>
          <BaseButton
            v-if="$props.ctaBanner.secondaryButton"
            :path="$props.ctaBanner.secondaryButton.path"
            class="button--small button--secondary cta-banner__button"
          >
            {{ $props.ctaBanner.secondaryButton.label }}
          </BaseButton>
        </div>
      </div>
    </div>
    <template #post-container>
      <div class="cta-banner__background" />
    </template>
  </Container>
</template>

<script>
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';
import BaseButton from '@/components/atoms/base-button/BaseButton.vue';

export default {
  name: 'CtaBanner',
  components: {
    BaseHeading,
    BaseButton,
  },
  props: {
    ctaBanner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cta-banner__background {
  background: url('/images/mock/cta.jpg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 204px;
  z-index: $z-index-1;

  @include breakpoint-min(sm) {
    height: 192px;
  }

  @include breakpoint-min(md) {
    height: 256px;
  }

  @include breakpoint-min(md) {
    height: 360px;
  }
}

.cta-banner {
  background-color: $core-white;
  border-radius: $border-radius-sm;
  grid-column: 1 / span 12;
  padding: 32px;
  z-index: $z-index-2;

  @include breakpoint-min(sm) {
    grid-column: 1 / span 8;
    padding: 48px;
  }

  @include breakpoint-min(md) {
    border-radius: $border-radius-lg;
    min-height: 380px;
  }

  @include breakpoint-min(lg) {
    padding: 64px;
  }

  &__heading {
    margin-bottom: 28px;

    @include breakpoint-min(sm) {
      margin-bottom: 32px;
    }
  }

  &__paragraph {
    opacity: 0.8;
    margin-bottom: 28px;

    @include breakpoint-min(sm) {
      margin-bottom: 32px;
    }
  }

  &__button {
    &:first-of-type {
      margin-right: 8px;
    }
  }
}
</style>
