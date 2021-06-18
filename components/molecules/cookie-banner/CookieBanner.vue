<template>
  <div :class="['cookie-banner-container']">
    <div
      :class="[
        'cookie-banner',
        {
          'cookie-banner--light-background': $route.path === '/',
        },
      ]"
    >
      <span class="typography-micro-header cookie-banner__text">
        We use cookies to optimise site functionality and enhance your
        experience.
      </span>
      <div class="cookie-banner__buttons-container">
        <BaseButton class="cookie-banner__accept-all-button" @click="acceptAll">
          <span class="micro-body-medium">Accept All cookies</span>
        </BaseButton>
        <BaseButton class="cookie-banner__hollow-button">
          <span class="micro-body-medium" @click="dismiss">Dismiss</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { COOKIE_TYPES } from '~/data/cookies';

export default {
  name: 'CookieBanner',
  methods: {
    acceptAll() {
      this.$store.dispatch('cookies/acceptAllCookies');
      this.$gtm.init('GTM-TDWP3X');
    },
    dismiss() {
      this.$store.commit('cookies/setConsent');
      this.$store.commit('cookies/setCookiePolicy', {
        [COOKIE_TYPES.NECESSARY]: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.cookie-banner-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0 ($spacing-default * 5);
}

.cookie-banner {
  color: $core-white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $core-black;
  border-radius: $border-radius-lg $border-radius-lg 0 0;
  padding: ($spacing-default * 4) ($spacing-default * 5) ($spacing-default * 6);

  @include breakpoint-min(sm) {
    flex-direction: row;
    align-items: center;
    padding: ($spacing-default * 6);
  }

  @include breakpoint-min(md) {
    padding: ($spacing-default * 6) ($spacing-default * 8);
  }

  &--light-background {
    background: $black-700;
  }

  &__text {
    margin-bottom: ($spacing-default * 4);
    @include breakpoint-min(sm) {
      margin-bottom: 0;
      margin-right: ($spacing-default * 6);
      flex-shrink: 100;
    }
  }

  &__buttons-container {
    display: flex;

    @include breakpoint-min(md) {
      flex-direction: row-reverse;
    }
  }

  &__accept-all-button {
    margin-right: ($spacing-default * 3);

    @include breakpoint-min(md) {
      margin-right: 0;
    }
  }

  &__hollow-button {
    background: transparent;
    border: solid $core-white $border-width-normal;

    @include breakpoint-min(md) {
      margin-right: ($spacing-default * 3);
    }

    .micro-body-medium {
      color: $core-white;
    }
  }
}
</style>
