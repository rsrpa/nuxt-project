<template>
  <div class="field">
    <input
      :id="$props.name"
      type="text"
      :name="$props.name"
      placeholder=":placeholder-shown"
    />
    <label :for="$props.name">{{ $props.label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}

label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  @include font-size(30px);
  line-height: 38px;
  border: 0;
  border-bottom: 1px solid $core-black;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
}

input:focus,
input:active {
  outline: 0;
  border-bottom: 3px solid $core-green;
}

label {
  @include font-size(16px);
  color: $black-500;
  line-height: 26px;
}

input:placeholder-shown {
  border-bottom: 1px solid $core-black;
}

input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 2.125rem) scale(1.5);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>
