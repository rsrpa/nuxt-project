<template>
  <nav>
    <ul class="nav-container">
      <BaseLink
        v-for="({ title, link }, index) in items"
        :key="index"
        :path="link"
        :external="link.includes('https://')"
        class="nav-item micro-body-medium"
      >
        <li class="nav-item-container">
          {{ title }}
        </li>
      </BaseLink>
    </ul>
  </nav>
</template>
<script>
import BaseLink from '~/components/atoms/base-link/BaseLink';

export default {
  name: 'MainNavigation',
  components: {
    BaseLink,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
}
.nav-item-container {
  margin-right: ($spacing-default * 6);
  list-style: none;
}
.nav-item {
  color: $core-white;
  @include font-size(14px);
  @include breakpoint-min('lg') {
    font-size: $font-size-base;
  }
}
</style>
