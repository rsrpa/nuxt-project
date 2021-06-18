<template>
  <Container class="section--pt-0 contact-module">
    <div class="grid">
      <div id="pardotForm" ref="pardotForm" class="contact-module__form">
        <iframe
          id="pardot"
          ref="pardot"
          src="https://go.pardot.com/l/14972/2021-06-07/pmxzvl"
          width="100%"
          type="text/html"
          frameborder="0"
          allowTransparency="true"
          style="border: 0"
          scrolling="no"
        />
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      pardot: '',
    };
  },
  mounted() {
    this.pardot = this.$refs.pardot;
    window.addEventListener('message', this.handleMessage);
  },

  methods: {
    handleMessage(event) {
      const data = event.data;
      switch (event.data.cmd) {
        case 'setIFrameHeight': {
          const height = data.params.data;
          this.pardot.height = height;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-module {
  @include breakpoint-min(sm) {
    background-image: url('/images/mock/contact-form.jpg');
    background-repeat: no-repeat;
    background-position: right ($spacing-default * 24);
    background-size: cover;
  }

  @include breakpoint-min(md) {
    background-position: right ($spacing-default * 32);
  }

  @include breakpoint-min(lg) {
    background-position: right ($spacing-default * 40);
  }

  &__form {
    background-color: $core-white;
    border-radius: $border-radius-sm;
    padding: 46px;
    grid-column: 1 / span 12;

    @include breakpoint-min(sm) {
      grid-column: 1 / span 8;
    }

    @include breakpoint-min(md) {
      border-radius: $border-radius-lg;
    }
  }
}
</style>
