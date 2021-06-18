<template>
  <div class="office-email">
    <BaseIcon
      v-if="$props.icon"
      :name="icon"
      width="28"
      height="23"
      class="office-email__icon"
    />
    <BaseLink
      :path="`mailto:${$props.text}`"
      external
      class="typography-heading-5 office-email__text"
    >
      {{ $props.text }}
    </BaseLink>
  </div>
</template>
<script>
export default {
  name: 'OfficeEmail',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.office-email {
  display: flex;

  &__icon {
    margin-right: ($spacing-default * 3);
    flex-shrink: 0;
  }

  &__text {
    margin-bottom: 0;

    &--light {
      font-weight: $font-weight-regular;
      color: $black-300;
    }
  }
}
</style>
