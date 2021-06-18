<template>
  <div class="office-opening-times">
    <BaseIcon
      v-if="$props.icon"
      :name="icon"
      width="28"
      height="23"
      class="office-opening-times__icon"
    />
    <div>
      <span class="typography-heading-5 office-opening-times__text">
        {{ $props.text }}
      </span>
      <span
        class="typography-heading-5 office-opening-times__text office-opening-times__text--light"
      >
        Local time {{ localTime }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OfficeOpeningTimes',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    timezone: {
      type: String,
      required: true,
    },
  },
  computed: {
    localTime() {
      return this.$moment.tz(this.timezone).format('HH:mm');
    },
  },
};
</script>
<style lang="scss" scoped>
.office-opening-times {
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
