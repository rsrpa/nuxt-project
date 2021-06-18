<script>
export default {
  name: 'BaseLink',
  props: {
    path: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      default: false,
    },
    noFollow: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  methods: {
    getComponentType() {
      return this.$props.external ? 'a' : 'nuxt-link';
    },
  },
  render(createElement) {
    const attrs = {};
    const props = {};
    const defaultClasses = 'link';

    if (this.getComponentType() === 'nuxt-link') {
      props.to = this.$props.path;
    } else {
      attrs.href = this.$props.path;
      attrs.target = this.$props.target;
      attrs.rel = this.$props.noFollow ? 'nofollow noreferrer noopener' : null;
    }

    return createElement(
      this.getComponentType(),
      { attrs, props, class: defaultClasses },
      this.$slots.default
    );
  },
};
</script>
<style lang="scss" scoped>
.link {
  font-size: $font-size-base;
  text-decoration: none;
}
</style>
