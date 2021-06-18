<template>
  <header
    :class="[
      'header',
      {
        'header--overlay': $route.path === '/' && !drawerOpen,
        'header--sticky': isSticky,
      },
    ]"
  >
    <div class="header__container">
      <BrandLogo />
      <div class="header__links-container">
        <MainNavigation :items="content" class="header__links" />
        <BaseButton path="/get-in-touch/" class="button--small">
          Talk to us
        </BaseButton>
        <BaseIcon
          :name="drawerOpen ? 'close' : 'burger'"
          class="mobile-nav-icon"
          @click="openDrawer"
        />
      </div>
    </div>
    <NavigationDrawer :open="drawerOpen" :items="content" />
    <div :class="['overlay', { 'overlay--visible': drawerOpen }]" />
  </header>
</template>

<script>
import throttle from 'lodash.throttle';
import BaseButton from '@/components/atoms/base-button/BaseButton.vue';
import BrandLogo from '@/components/atoms/brand-logo/BrandLogo.vue';
import BaseIcon from '@/components/atoms/base-icon/BaseIcon';
import { mapState } from 'vuex';
import NavigationDrawer from '~/components/molecules/drawer/NavigationDrawer';
import MainNavigation from '~/components/molecules/main-navigation/MainNavigation';

export default {
  name: 'Header',
  components: {
    MainNavigation,
    BaseIcon,
    NavigationDrawer,
    BaseButton,
    BrandLogo,
  },
  data() {
    return {
      isSticky: false,
      scrollPosition: 0,
      content: [
        {
          title: 'Solutions',
          link: '/solutions',
        },
        {
          title: 'Resources',
          link: 'https://themindgym.com/resources/',
        },
        {
          title: 'Case studies',
          link: 'https://themindgym.com/our-results/',
        },
        {
          title: 'About us',
          link: '/about-us',
        },
        {
          title: 'Investors',
          link: 'https://themindgym.com/investors/',
        },
        {
          title: 'Join us',
          link: 'https://themindgym.com/careers/',
        },
        {
          title: 'ParentGym',
          link: 'https://themindgym.com/about-us/partnership-with-parent-gym/',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      drawerOpen: (state) => state.navigation.drawerOpen,
    }),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll());
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll());
  },
  methods: {
    openDrawer(event) {
      if (!this.drawerOpen && !event.handledByTheDrawer) {
        event.stopPropagation();
        this.$store.commit('navigation/toggleDrawer');
      }
    },
    handleScroll() {
      return throttle(() => {
        this.scrollPosition = window.scrollY;
        this.isSticky = this.scrollPosition >= 10;
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  transition: all ease-out 0.2s;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: $core-black;
  opacity: 0.8;
  right: -100vw;

  @include breakpoint-min(md) {
    display: none;
  }

  &--visible {
    right: 0;
  }
}
.header {
  width: 100%;
  max-width: $screen-max-width;
  z-index: $z-index-max;
  background-color: $core-black;
  position: fixed;

  &--overlay {
    @include breakpoint-min(sm) {
      background-color: transparent;
    }
  }
  &--sticky {
    background-color: $core-black;
  }

  &__container {
    transition: all ease-out 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    min-height: 60px;
    padding-right: 20px;
    padding-left: 20px;
    max-width: $grid-max-width;

    @include breakpoint-min(sm) {
      padding-right: 38px;
      padding-left: 38px;
    }

    @include breakpoint-min(md) {
      padding-right: 60px;
      padding-left: 60px;
      min-height: 80px;
    }

    @include breakpoint-min(lg) {
      padding-right: 80px;
      padding-left: 80px;
    }

    ::v-deep .button {
      line-height: 15px;
      padding: 8px 12px;
      @include font-size(12px);
      @include breakpoint-min(md) {
        line-height: 18px;
        padding: 12px 16px;
      }
      @include breakpoint-min(lg) {
        @include font-size($font-size-base);
      }
    }
  }

  &__links-container {
    display: flex;
    align-items: center;
  }

  &__links {
    display: none;
    @include breakpoint-min(md) {
      display: block;
    }
  }

  .mobile-nav-icon {
    margin-left: ($spacing-default * 4);
    @include breakpoint-min(md) {
      display: none;
    }
  }
}
</style>
