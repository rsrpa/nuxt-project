<template>
  <!-- TODO: Decide whether to keep section + container in component or template based on upcoming designs -->
  <Container
    class="hero-home-section section--pt-0"
    :background-image="$props.image.url"
  >
    <div class="hero-home grid">
      <div class="hero-home__inner">
        <TwoToneTitle
          tag="h1"
          visual-style="typography-heading-1"
          :heading="$props.title"
          :subheading="$props.subtitle"
        />
        <BaseButton
          v-if="$props.button"
          :path="$props.button.path"
          class="hero-home__button"
        >
          {{ $props.button.label }}
        </BaseButton>
      </div>
    </div>
  </Container>
</template>

<script>
import TwoToneTitle from '@/components/molecules/two-tone-title/TwoToneTitle.vue';
import BaseButton from '@/components/atoms/base-button/BaseButton.vue';

export default {
  name: 'HeroHome',
  components: {
    TwoToneTitle,
    BaseButton,
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
    button: {
      type: Object,
      default: () => {},
    },
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-home-section {
  background-color: $core-black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  margin-top: -60px;

  @include breakpoint-min(md) {
    margin-top: -80px;
  }
}
.hero-home {
  padding-top: 66.6vw;

  @include breakpoint-min(md) {
    padding-top: 25vw;
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

    @include breakpoint-min(lg) {
      grid-column: 1 / span 12;
    }

    ::v-deep .two-tone-title__heading {
      color: $core-white;
    }

    ::v-deep .two-tone-title__subheading {
      color: $core-white;
      opacity: 0.6;
    }
  }

  &__button {
    margin-top: 20px;

    @include breakpoint-min(sm) {
      margin-top: 32px;
    }

    @include breakpoint-min(sm) {
      margin-top: 48px;
    }
  }
}
</style>
