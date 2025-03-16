<script>
import feather from "feather-icons";

export default {
  name: "Home",
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <section class="relative min-h-[85vh] w-full overflow-hidden">
    <!-- Background Pattern (optional) -->
    <div class="absolute inset-0 opacity-10 dark:opacity-5">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary-dark to-transparent"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4">
      <div
        class="relative flex min-h-[85vh] flex-col items-center justify-center md:flex-row md:justify-between md:gap-8"
      >
        <!-- Left Content -->
        <div class="z-10 max-w-2xl text-center md:text-left">
          <div
            class="mb-6 inline-block rounded-full bg-primary-dark bg-opacity-10 px-4 py-2 text-sm font-medium text-primary-dark dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light"
          >
            👋 Welcome to my portfolio
          </div>

          <h1
            class="mb-6 text-4xl font-bold text-primary-dark dark:text-primary-light md:text-5xl lg:text-6xl"
          >
            Hi, I'm
            <span class="relative">
              Azrul
              <span
                class="absolute -bottom-2 left-0 h-1 w-full bg-primary-dark opacity-50 dark:bg-primary-light"
              ></span>
            </span>
          </h1>

          <p
            class="mb-8 text-xl text-ternary-dark dark:text-ternary-light md:text-2xl"
          >
            A Full-Stack Developer passionate about crafting
            <span class="relative inline-block"> digital solutions </span>
            that make a difference.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col items-center gap-4 sm:flex-row md:items-start"
          >
            <a
              download="CV-Azrul-AZMI.pdf"
              href="https://drive.google.com/file/d/1-0Be_eC3lVf6bB7p4X6Hz2cxM0_wikUm/view?usp=sharing"
              class="group flex w-48 items-center justify-center gap-2 rounded-lg bg-primary-dark px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-primary-light dark:text-primary-dark"
            >
              <i
                data-feather="arrow-down-circle"
                class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
              ></i>
              <span class="font-medium">Download CV</span>
            </a>

            <router-link
              to="/projects"
              class="flex w-48 items-center justify-center gap-2 rounded-lg border-2 border-primary-dark px-6 py-3 font-medium text-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-primary-light dark:text-primary-light"
            >
              <i data-feather="eye" class="h-5 w-5"></i>
              <span>View Work</span>
            </router-link>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative mt-12 w-full max-w-lg md:mt-0">
          <div class="relative">
            <div
              class="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary-dark to-secondary-dark opacity-30 blur dark:from-primary-light dark:to-secondary-light"
            ></div>
            <img
              src="@/assets/images/home.jpg"
              alt="Developer"
              class="relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover i {
  transform: translateY(2px) rotate(12deg);
}
</style>
