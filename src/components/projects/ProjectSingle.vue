<script>
export default {
  props: ["project"],
  methods: {
    redirectToUrl() {
      if (!this.project.url) return;

      window.open(this.project.url, "_blank");
    },
  },
};
</script>

<template>
  <div
    class="group rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-dark"
    @click="redirectToUrl"
  >
    <div class="relative overflow-hidden rounded-xl bg-secondary-dark">
      <p
        v-if="project.url"
        class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        See live
      </p>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none mx-auto max-h-80 object-fill"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-primary-light font-bold mb-2"
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
