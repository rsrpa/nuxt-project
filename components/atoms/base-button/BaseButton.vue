<template>
  <component
    :is="cType"
    :path="$props.path || null"
    :external="$props.external"
    :no-follow="$props.noFollow"
    :disabled="$props.disabled"
    class="button"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import BaseLink from '@/components/atoms/base-link/BaseLink.vue';

export default {
  name: 'BaseButton',
  components: {
    BaseLink,
  },
  props: {
    path: {
      type: String,
      required: false,
      default: '',
    },
    external: {
      type: Boolean,
      required: false,
      default: false,
    },
    noFollow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cType() {
      return this.$props.path ? 'BaseLink' : 'button';
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  color: $core-black;
  background: linear-gradient(270deg, $core-green 0%, $green-400 100%);
  font-weight: $font-weight-medium;
  @include font-size(16px);
  line-height: 26px;
  border: 0;
  border-radius: $border-radius-full;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  @include breakpoint-min(md) {
    padding: 10px 33px;
    @include font-size(20px);
    line-height: 32px;
  }

  &--secondary {
    background: transparent;
    border: 1px solid $black-300;
    margin: 1px;

    &.button--dark {
      color: $core-white;
    }

    &:hover {
      border: 2px solid $core-green;
      margin: 0;
    }
  }

  &--small {
    padding: 10px 20px;

    @include breakpoint-min(md) {
      // TODO: Add padding
      @include font-size(18px);
    }

    @include breakpoint-min(lg) {
      // TODO: Add padding
      @include font-size(20px);
    }
  }
}
</style>
