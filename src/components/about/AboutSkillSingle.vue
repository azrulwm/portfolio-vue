<script>
export default {
  props: ["skill"],
};
</script>

<template>
  <div class="flex flex-col items-center border">
    <img
      :src="skill.img"
      :alt="skill.title"
      class="w-64 py-5 px-10 border border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer bg-secondary-light"
    />
    {{ skill.title }}
  </div>
</template>

<style lang="scss" scoped></style>
