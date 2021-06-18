<template>
  <Container>
    <BaseHeading v-if="title" tag="h2" class="typography-heading-2">
      {{ $props.title }}
    </BaseHeading>
    <div class="offices-container">
      <OfficeArticle
        v-for="(ofifce, index) in $props.offices"
        :key="index"
        v-bind="ofifce"
        class="office"
      />
    </div>
  </Container>
</template>
<script>
export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: '',
    },
    offices: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.offices-container {
  @include breakpoint-min(sm) {
    display: flex;
    flex-wrap: wrap;
  }
}
.office {
  @include breakpoint-min(sm) {
    max-width: 50%;
    padding-right: ($spacing-default * 7);
  }

  @include breakpoint-min(md) {
    max-width: 33%;
    padding-right: ($spacing-default * 9);
  }

  @include breakpoint-min(lg) {
    padding-right: ($spacing-default * 11);
  }
}
</style>
