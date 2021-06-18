<template>
  <div class="awards-banner grid">
    <div v-if="$props.title" class="awards-banner__heading">
      <BaseHeading tag="h2" class="typography-heading-4">
        {{ $props.title }}
      </BaseHeading>
    </div>
    <div v-if="$props.awards" class="awards-banner__awards">
      <div
        v-for="(award, index) in $props.awards"
        :key="index"
        class="awards-banner__single-award"
      >
        <BaseImage :src="award.image" :alt="award.name" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/base-heading/BaseHeading.vue';
import BaseImage from '@/components/atoms/base-image/BaseImage.vue';

export default {
  name: 'AwardsBanner',
  components: {
    BaseHeading,
    BaseImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    awards: {
      type: Array,
      required: true,
      validator(awards) {
        return awards.every((award) => 'name' in award && 'image' in award);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.awards-banner {
  &__heading {
    grid-row: 1;
    grid-column: 1 / span 12;

    @include breakpoint-min(sm) {
      grid-column: 1 / span 5;
    }

    @include breakpoint-min(md) {
      grid-column: 2 / span 4;
    }
  }

  &__heading {
    display: flex;
    align-items: center;
  }

  &__awards {
    grid-row: 2;
    grid-column: 1 / span 12;
    display: flex;

    @include breakpoint-min(sm) {
      grid-row: 1;
      grid-column: 7 / span 6;
    }

    @include breakpoint-min(md) {
      grid-column: 6 / span 6;
    }
  }

  &__single-award {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: $border-width-normal solid $black-200;
    padding-right: ($spacing-default * 5);
    padding-left: ($spacing-default * 5);

    @include breakpoint-min(lg) {
      padding-right: ($spacing-default * 8);
      padding-left: ($spacing-default * 8);
    }

    &:last-of-type {
      border-right: 0;
      padding-right: 0;
    }

    &:first-of-type {
      padding-left: 0;
    }
  }
}
</style>
