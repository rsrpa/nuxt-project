<template>
  <component :is="$props.tag" class="subheading">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseSubeading',
  props: {
    tag: {
      type: String,
      required: true,
      validator(value) {
        return ['h2', 'h3', 'h4', 'h5', 'p', 'span'].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.subheading {
  color: $black-400;
}
</style>
