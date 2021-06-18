<template>
  <div class="copyright-label">
    <small>&copy; {{ getCurrentYear() }} Mind Gym. All rights reserved.</small>
  </div>
</template>

<script>
export default {
  name: 'CopyrightLabel',
  methods: {
    getCurrentYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style lang="scss">
.copyright-label {
  & small {
    @include font-size(14px);
    line-height: 22px;

    @include breakpoint-min(lg) {
      @include font-size(16px);
      line-height: 24px;
    }
  }
}
</style>
