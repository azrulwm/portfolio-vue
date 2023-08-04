<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    inputIdentifier: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
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
    <label class="block mb-2 text-lg text-primary-light" :for="label">{{
      label
    }}</label>
    <input
      class="w-full px-5 py-3 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md"
      :id="inputIdentifier"
      :name="inputIdentifier"
      :placeholder="label"
      :aria-label="inputIdentifier"
      :value="value"
      :type="inputType"
      v-bind="$attrs"
      v-model="inputValue"
      required
    />
  </div>
</template>

<style lang="scss" scoped></style>
