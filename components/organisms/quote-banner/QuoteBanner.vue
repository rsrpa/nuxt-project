<template>
  <Container>
    <div class="quote-banner">
      <SectionHeading v-if="$props.title" :title="$props.title" />
      <div
        class="quote-banner__grid grid"
        :style="[
          $props.backgroundImage
            ? {
                'background-image': 'url(' + $props.backgroundImage + ')',
              }
            : '',
        ]"
      >
        <div class="quote-banner__inner">
          <img
            v-if="$props.logo.image"
            class="quote-banner__logo"
            :src="$props.logo.image"
            :alt="$props.logo.alt"
          />
          <BaseHeading
            v-if="$props.quotation"
            tag="h4"
            class="quote-banner__quotation"
          >
            <q>{{ $props.quotation }}</q>
          </BaseHeading>
          <span v-if="$props.name" class="quote-banner__name">
            {{ $props.name }}</span
          >
          <span v-if="$props.position" class="quote-banner__position">
            {{ $props.position }}
          </span>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import SectionHeading from '@/components/molecules/section-heading/SectionHeading.vue';
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';

export default {
  name: 'QuoteBanner',
  components: {
    SectionHeading,
    BaseHeading,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    logo: {
      type: Object,
      required: true,
      validator(logo) {
        return 'image' in logo && 'alt' in logo;
      },
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    quotation: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.quote-banner {
  &__grid {
    background-color: $black-600;
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover;
    border-radius: $border-radius-lg;
    min-height: 462px;

    @include breakpoint-min(sm) {
      justify-content: center;
    }

    @include breakpoint-min(md) {
      min-height: 490px;
    }

    @include breakpoint-min(lg) {
      min-height: 600px;
    }
  }

  &__inner {
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 24px 30px;

    @include breakpoint-min(sm) {
      grid-column: 2 / span 6;
      justify-content: center;
      padding: 0;
    }
  }

  &__logo {
    margin-bottom: 24px;

    @include breakpoint-min(sm) {
      margin-bottom: 40px;
    }

    @include breakpoint-min(lg) {
      margin-bottom: 32px;
    }
  }

  &__quotation {
    color: $core-white;
    position: relative;
    margin-bottom: 24px;

    @include breakpoint-min(lg) {
      margin-bottom: 32px;
    }

    & q:before {
      position: absolute;
      left: -16px;

      @include breakpoint-min(lg) {
        left: -24px;
      }
    }
  }

  &__name {
    color: $core-white;
    opacity: 0.8;
    line-height: 150%;
  }

  &__position {
    color: $core-white;
    opacity: 0.8;
    line-height: 150%;
  }
}
</style>
