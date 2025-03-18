<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<template>
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="mt-0 w-full items-center justify-between p-5 sm:mx-5 sm:mt-3 sm:flex sm:p-0"
  >
    <router-link
      v-for="(link, index) in [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/about', label: 'About Me' },
        { to: '/contact', label: 'Contact' },
      ]"
      :key="index"
      :to="link.to"
      :aria-label="link.label"
      class="font-general-medium block rounded-full px-4 py-2 text-lg font-medium text-primary-light transition-all duration-300 hover:bg-primary-light/20 sm:mx-2 md:text-xl"
      :class="{
        'bg-primary-highlight/40 text-white': $route.path === link.to,
      }"
    >
      {{ link.label }}
    </router-link>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;
}
</style>
