<script>
export default {
  props: ["project"],
  methods: {
    redirectToUrl() {
      if (!this.project.url) return;

      window.open(this.project.url, "_blank");
    },
  },
  computed: {
    projectImage() {
      return (
        this.project.img ||
        require("@/assets/images/projects/project-default.webp")
      );
    },
  },
};
</script>

<template>
  <div
    class="group mb-10 rounded-xl bg-secondary-dark shadow-lg hover:shadow-xl sm:mb-0"
    :class="project.url ? 'cursor-pointer' : ''"
    @click="redirectToUrl"
  >
    <div class="relative overflow-hidden rounded-xl bg-secondary-dark">
      <p
        v-if="project.url"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-blue-500 px-4 py-2 text-white opacity-0 hover:bg-blue-600 group-hover:opacity-100"
      >
        See live
      </p>
      <img
        :src="projectImage"
        :alt="project.title"
        class="mx-auto max-h-80 rounded-t-xl border-none object-fill"
      />
    </div>
    <div class="px-4 py-6 text-center">
      <p
        class="font-general-semibold mb-2 text-xl font-bold text-primary-light"
      >
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-secondary-light">{{
        project.description
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
