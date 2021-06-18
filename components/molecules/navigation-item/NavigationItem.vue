<template>
  <BaseLink
    :path="link"
    class="navigation-item"
    :external="link.includes('https://')"
  >
    <span class="navigation-item__text typography-heading-4">{{ title }}</span>
    <BaseIcon name="arrow-right" />
  </BaseLink>
</template>
<script>
import BaseIcon from '~/components/atoms/base-icon/BaseIcon';
import BaseLink from '~/components/atoms/base-link/BaseLink';
export default {
  name: 'NavigationItem',
  components: {
    BaseIcon,
    BaseLink,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: $border-width-normal solid $black-700;

  &__text {
    color: $core-white;
    padding: ($spacing-default * 2) 0;
    @include font-size(22px);
    font-weight: $font-weight-regular;
    margin-bottom: 0;
  }
}
</style>
