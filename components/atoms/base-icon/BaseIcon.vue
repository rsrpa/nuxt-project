<template>
  <component
    :is="iconSrc"
    :key="$props.name"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    iconSrc: null,
  }),

  watch: {
    name() {
      this.loadIcon();
    },
  },

  async created() {
    await this.loadIcon();
  },

  methods: {
    async loadIcon() {
      const module = await import(`../../../assets/icons/${this.name}.svg`);
      this.iconSrc = module.default;
    },
  },
};
</script>
