<template>
  <Container v-if="isVisible">
    <div :class="['notification-message', 'notification-message--' + type]">
      <div class="notification-message__icon-container">
        <BaseIcon
          :name="cIconType"
          stroke="#121212"
          class="notification-message__icon"
        />
      </div>
      <div>
        <span
          v-if="$props.title"
          class="typography-heading-5 notification-message__title"
        >
          {{ $props.title }}
        </span>
        <p v-if="$props.message" class="notification-message__paragraph">
          {{ $props.message }}
        </p>
      </div>
      <BaseIcon
        name="close"
        class="notification-message__close-icon"
        stroke="#121212"
        @click.stop="closeMessage"
      />
    </div>
  </Container>
</template>

<script>
import BaseIcon from '~/components/atoms/base-icon/BaseIcon';

export default {
  name: 'NotificationMessage',
  components: {
    BaseIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
      validator(type) {
        return ['success', 'error'].includes(type);
      },
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isVisible: this.$props.showMessage,
    };
  },
  computed: {
    cIconType() {
      let icon = '';

      switch (this.$props.type) {
        case 'success':
          icon = 'checked';
          break;
        case 'error':
          icon = 'close';
          break;
        default:
        // code block
      }

      return icon;
    },
  },
  methods: {
    closeMessage(event) {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.notification-message {
  position: relative;
  border-radius: $border-radius-sm;
  display: flex;
  align-items: flex-start;
  padding: ($spacing-default * 6) ($spacing-default * 13) ($spacing-default * 6)
    ($spacing-default * 6);

  @include breakpoint-min(sm) {
    border-radius: $border-radius-md;
    padding: ($spacing-default * 11) ($spacing-default * 15)
      ($spacing-default * 11) ($spacing-default * 11);
  }

  @include breakpoint-min(lg) {
    align-items: center;
    border-radius: $border-radius-lg;
    padding: ($spacing-default * 11) ($spacing-default * 20)
      ($spacing-default * 11) ($spacing-default * 11);
  }

  &--success {
    background-color: $core-green;
  }

  &__title {
    margin-bottom: ($spacing-default * 2);
  }

  &__paragraph {
    color: $black-600;
  }

  &__icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius-full;
    width: 24px;
    height: 24px;
    background: $core-white;
    margin-right: ($spacing-default * 4);

    @include breakpoint-min(sm) {
      width: 44px;
      height: 44px;
      margin-right: ($spacing-default * 6);
    }

    @include breakpoint-min(lg) {
      width: 64px;
      height: 64px;
      margin-right: ($spacing-default * 8);
    }
  }

  &__close-icon {
    position: absolute;
    cursor: pointer;
    top: ($spacing-default * 4);
    right: ($spacing-default * 4);

    @include breakpoint-min(sm) {
      top: ($spacing-default * 6);
      right: ($spacing-default * 6);
    }
  }
}
</style>
