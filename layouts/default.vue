<template>
  <div id="app">
    <HeaderDefault />
    <div id="content-wrap">
      <transition name="fade-fast" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from '../components/organisms/header-default/HeaderDefault.vue';
import FooterDefault from '../components/organisms/footer-default/FooterDefault.vue';

export default {
  name: 'App',
  components: {
    HeaderDefault,
    FooterDefault,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main';
#app {
  position: relative;
  font-family: $font-family-primary;
  max-width: $screen-max-width;
  margin: 0 auto;
  overflow: hidden;
}
#content-wrap {
  position: relative;
  min-height: 50vh;
  padding-top: 60px;

  @include breakpoint-min(md) {
    padding-top: 80px;
  }
}
</style>
