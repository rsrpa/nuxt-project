<template>
  <component :is="$props.tag" v-if="$props.list.length" class="list">
    <li
      v-for="(item, index) in $props.list"
      :key="index"
      :class="[
        'list__item',
        {
          'list__item--with-icon': $props.listStyleIcon,
          'list__item--list-style-none':
            $props.listStyleIcon || !$props.nativeListStyle,
        },
      ]"
    >
      <slot name="icon">
        <BaseIcon
          v-if="$props.listStyleIcon"
          width="28"
          height="23"
          :name="$props.listStyleIcon"
          class="list__icon"
        />
      </slot>
      <slot
        v-if="$scopedSlots[`item-${index + 1}`]"
        :item="item"
        :name="`item-${index + 1}`"
      />
      <slot v-else :item="item">
        {{ item }}
      </slot>
    </li>
  </component>
</template>

<script>
export default {
  name: 'BaseList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'ul',
      validator(value) {
        return ['ul', 'ol'].includes(value);
      },
    },
    listStyleIcon: {
      type: String,
      default: '',
    },
    nativeListStyle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
  padding-left: 30px;

  &__item {
    margin-bottom: 16px;
    display: flex;

    &--list-style-none {
      list-style: none;
      // accessibility concerns
      // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
      &::before {
        content: '\200B';
      }
    }

    &--with-icon {
      display: flex;
    }
  }

  &__icon {
    margin-right: ($spacing-default * 3);
    flex-shrink: 0;
  }
}
</style>
