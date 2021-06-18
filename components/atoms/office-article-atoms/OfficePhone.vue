<template>
  <div class="office-phone">
    <BaseIcon
      v-if="$props.icon"
      :name="icon"
      width="28"
      height="23"
      class="office-phone__icon"
    />
    <BaseLink
      :path="`tel:${$props.text}`"
      external
      class="typography-heading-5 office-phone__text"
    >
      {{ $props.text }}
    </BaseLink>
  </div>
</template>
<script>
export default {
  name: 'OfficePhone',
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
.office-phone {
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
