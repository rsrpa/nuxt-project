<template>
  <Container>
    <div class="solutions-list grid">
      <SolutionCardMajor
        v-for="(card, index) in $props.cards"
        :key="index"
        v-bind="card"
        class="solutions-list__card"
      />
    </div>
  </Container>
</template>

<script>
import SolutionCardMajor from '@/components/molecules/solution-card-major/SolutionCardMajor.vue';

export default {
  name: 'SolutionsList',
  components: {
    SolutionCardMajor,
  },
  props: {
    cards: {
      type: Array,
      required: true,
      validator(cards) {
        return cards.every(
          (card) => 'title' in card && 'subtitle' in card && 'link' in card
        );
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.solutions-list {
  row-gap: $spacing-default * 5;

  @include breakpoint-min(sm) {
    row-gap: $spacing-default * 8;
  }

  @include breakpoint-min(md) {
    row-gap: $spacing-default * 10;
  }

  @include breakpoint-min(lg) {
    row-gap: $spacing-default * 12;
  }

  &__card {
    grid-column: span 12;

    @include breakpoint-min(sm) {
      grid-column: span 6;
    }
  }
}
</style>
