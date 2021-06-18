<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__links">
        <BaseLink path="https://themindgym.com/terms/" :external="true">
          Terms and conditions
        </BaseLink>
        <BaseLink
          path="https://themindgym.com/privacy-policy/"
          :external="true"
        >
          Privacy policy
        </BaseLink>
        <BaseLink
          path="https://themindgym.com/modern-slavery-act/"
          :external="true"
        >
          Modern slavery
        </BaseLink>
      </div>
      <div class="footer__copyright">
        <CopyrightLabel />
      </div>
    </div>
    <client-only>
      <transition name="slide-up">
        <CookieBanner v-if="!hasConsented" />
      </transition>
    </client-only>
  </footer>
</template>

<script>
import BaseLink from '@/components/atoms/base-link/BaseLink.vue';
import CopyrightLabel from '@/components/atoms/copyright-label/CopyrightLabel.vue';
import { mapGetters } from 'vuex';
import CookieBanner from '~/components/molecules/cookie-banner/CookieBanner';

export default {
  name: 'FooterDefault',
  components: {
    BaseLink,
    CopyrightLabel,
    CookieBanner,
  },
  computed: {
    ...mapGetters('cookies', ['hasConsented']),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $core-black;
  color: $black-300;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: $grid-max-width;
    padding: 32px 20px;

    @include breakpoint-min(sm) {
      flex-direction: row;
      align-items: center;
      padding: 16px 38px;
    }

    @include breakpoint-min(md) {
      padding: 24px 60px;
    }

    @include breakpoint-min(lg) {
      padding: 24px 80px;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    @include breakpoint-min(sm) {
      flex-direction: row;
      margin-bottom: 0;
    }

    & > a {
      @include font-size(14px);
      line-height: 22px;
      padding-bottom: 6px;
      color: $black-300;
      text-decoration: underline 1px rgba($black-300, 0);
      text-underline-offset: 0.3em;
      transition: text-decoration-color 400ms;

      @include breakpoint-min(sm) {
        padding-bottom: 0;
        padding-right: 24px;
      }

      @include breakpoint-min(lg) {
        @include font-size(16px);
        line-height: 24px;
      }

      &:last-of-type {
        padding-bottom: 0;
      }

      &:hover {
        text-decoration: underline 1px rgba($black-300, 1);
        transition: text-decoration-color 200ms;
      }
    }
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all ease-out 0.2s;
}

.slide-up-enter,
.slide-up-leave-to {
  bottom: -100px;
}

.slide-up-leave,
.slide-up-enter-to {
  bottom: 0;
}
</style>
