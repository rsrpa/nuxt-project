<template>
  <img :src="$props.src" :alt="$props.alt" />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
