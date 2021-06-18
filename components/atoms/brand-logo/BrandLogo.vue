<template>
  <BaseLink class="brand-logo" path="/">
    <img
      ref="logo"
      src="/images/brand/logo.svg"
      alt="MindGym Logo"
      title="MindGym Logo"
    />
  </BaseLink>
</template>

<script>
import BaseLink from '@/components/atoms/base-link/BaseLink.vue';

export default {
  name: 'BrandLogo',
  components: {
    BaseLink,
  },
};
</script>

<style lang="scss" scoped>
.brand-logo {
  display: flex;
  cursor: pointer;
  max-width: 140px;

  @include breakpoint-min(lg) {
    max-width: 203px;
  }
}
</style>
