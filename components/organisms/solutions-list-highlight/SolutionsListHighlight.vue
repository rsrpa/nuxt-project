<template>
  <div class="solutions-list-highlight">
    <SectionHeading
      v-if="$props.eyebrow || $props.title"
      :eyebrow="$props.eyebrow"
      :title="$props.title"
    />
    <div class="solutions-list-highlight__grid grid">
      <div
        v-for="(card, index) in $props.cards"
        :key="index"
        class="solutions-list-highlight__card"
      >
        <SolutionCardMinor v-bind="card" />
      </div>
      <div v-if="$props.button" class="solutions-list-highlight__button">
        <BaseButton :path="$props.button.path" class="button--secondary">
          {{ $props.button.label }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from '@/components/molecules/section-heading/SectionHeading.vue';
import BaseButton from '@/components/atoms/base-button/BaseButton.vue';
import SolutionCardMinor from '@/components/molecules/solution-card-minor/SolutionCardMinor.vue';

export default {
  name: 'SolutionsListHighlight',
  components: {
    SectionHeading,
    BaseButton,
    SolutionCardMinor,
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
    cards: {
      type: Array,
      required: true,
      validator(cards) {
        return cards.every(
          (card) => 'title' in card && 'subtitle' in card && 'link' in card
        );
      },
    },
    button: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.solutions-list-highlight {
  &__grid {
    row-gap: 20px;
  }

  &__card {
    grid-column: span 12;

    @include breakpoint-min(sm) {
      grid-column: span 4;
    }
  }

  &__button {
    grid-column: span 12;
    justify-self: center;
    margin-top: ($spacing-default * 8);
    // TODO: Create a rule for margin around buttons
  }
}
</style>
