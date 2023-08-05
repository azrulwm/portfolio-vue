<script>
export default {
  props: ["skill"],
};
</script>

<template>
  <div
    class="flex flex-col items-center font-general-regular text-secondary-light text-xl mb-8"
  >
    <img
      :src="skill.img"
      :alt="skill.title"
      class="py-5 px-10 shadow-sm object-contain h-44"
    />
    {{ skill.title }}
  </div>
</template>

<style lang="scss" scoped></style>
