<template>
  <Container :class="['client-logos', $props.variant]">
    <div class="client-logos__wrapper">
      <BaseHeading
        v-if="$props.title"
        tag="h2"
        class="typography-heading-5 client-logos__heading"
      >
        {{ $props.title }}
      </BaseHeading>
      <div class="client-logos__logos">
        <div
          v-for="(logo, index) in $props.logos"
          :key="index"
          class="client-logos__logo"
        >
          <img :src="logo.path" :alt="logo.company" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';

export default {
  name: 'ClientLogos',
  components: {
    BaseHeading,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    logos: {
      type: Array,
      required: true,
      validator(logos) {
        return logos.every((logo) => 'company' in logo && 'path' in logo);
      },
    },
    variant: {
      type: String,
      default: 'light',
    },
  },
};
</script>

<style lang="scss" scoped>
.client-logos {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading {
    text-align: center;
  }

  &__logos {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  &__logo {
    padding: 0 12px;
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: center;

    // TODO: Move this to vue if there are other cases of changing dom based on width
    &:nth-of-type(1n + 7) {
      display: none;
    }

    @include breakpoint-min(sm) {
      width: auto;
    }

    @include breakpoint-min(md) {
      padding: 0 16px;

      &:nth-of-type(1n + 7) {
        display: block;
      }
    }

    img {
      filter: invert(56%) sepia(6%) saturate(448%) hue-rotate(201deg)
        brightness(91%) contrast(90%);
      width: 86px;

      @include breakpoint-min(md) {
        width: 70px;
      }

      @include breakpoint-min(lg) {
        width: 95px;
      }
    }
  }

  &.dark {
    background-color: $core-black;

    .client-logos__heading {
      color: $core-white;
    }

    img {
      filter: none;
    }
  }
}
</style>
