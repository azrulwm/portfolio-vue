<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="w-full mx-5 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
  >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg md:text-2xl font-medium text-primary-light hover:text-primary-highlight sm:mx-4 mb-2 sm:py-2"
      aria-label="Home"
      >Home</router-link
    >
    <router-link
      to="/projects"
      class="font-general-medium block text-left text-lg md:text-2xl font-medium text-primary-light :hover:text-primary-highlight sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark"
      aria-label="Projects"
      >Projects</router-link
    >
    <router-link
      to="/about"
      class="font-general-medium block text-left text-lg md:text-2xl font-medium text-primary-light hover:text-primary-highlight sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark"
      aria-label="About Me"
      >About Me</router-link
    >
    <router-link
      to="/contact"
      class="font-general-medium block text-left text-lg md:text-2xl font-medium text-primary-light hover:text-primary-highlight sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark"
      aria-label="Contact"
      >Contact</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
