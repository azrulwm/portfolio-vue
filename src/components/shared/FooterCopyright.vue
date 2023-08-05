<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "AZRUL's Personal Portfolio",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="flex font-general-regular text-lg text-secondary-light">
      &copy; {{ copyrightDate }}.
      <p class="font-general-medium duration-500">
        {{ projectName }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
