<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Personal Portfolio",
      author: "Azrul",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="flex font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <p class="font-general-medium dark:hover:text-indigo-300 duration-500">
        {{ projectName }}
      </p>
      . Developed by
      <p
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase dark:hover:text-indigo-300 duration-500"
      >
        {{ author }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
