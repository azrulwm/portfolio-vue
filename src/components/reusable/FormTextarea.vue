<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    textareaIdentifier: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(newVal) {
      this.$emit("update:value", newVal);
    },
  },
};
</script>

<template>
  <div>
    <label
      class="block text-lg text-secondary-light mb-2"
      :for="textareaIdentifier"
      >{{ label }}</label
    >
    <textarea
      class="w-full px-5 py-2 border border-primary-dark text-secondary-light bg-gray-800 rounded-md shadow-sm text-md"
      :id="textareaIdentifier"
      :name="textareaIdentifier"
      :aria-label="textareaIdentifier"
      :placeholder="label"
      v-bind="$attrs"
      v-model="inputValue"
      cols="14"
      rows="6"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped></style>
