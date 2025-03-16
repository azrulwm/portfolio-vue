<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {};
  },
  created() {},
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="mt-12 flex flex-col items-center sm:mt-10 sm:flex-row sm:justify-between"
  >
    <!-- Banner left contents -->
    <div class="w-full text-left md:mr-8 md:w-1/3">
      <h1
        class="font-general-semibold text-center text-3xl uppercase text-primary-light sm:text-left md:text-3xl xl:text-4xl"
      >
        Hi, I'm Azrul
      </h1>
      <p
        class="font-general-medium mt-2 text-center text-lg leading-none text-secondary-light sm:text-left sm:text-xl xl:text-2xl"
      >
        Full-Stack Developer crafting digital solutions
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="CV-Azrul-AZMI.pdf"
          href="https://drive.google.com/file/d/1-0Be_eC3lVf6bB7p4X6Hz2cxM0_wikUm/view?usp=sharing"
          class="mb-6 mt-12 flex w-36 items-center justify-center rounded-lg border border-ternary-dark bg-indigo-500 py-2.5 text-lg text-white shadow-lg duration-500 hover:bg-primary-highlight hover:text-white focus:ring-1 focus:ring-indigo-900 sm:mb-0 sm:w-48 sm:py-3"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 mr-2 w-5 duration-100 sm:ml-1 sm:mr-3 sm:w-6"
          ></i>
          <span class="font-general-medium text-sm duration-100 sm:text-lg"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="float-right w-full text-right md:w-2/3">
      <img src="@/assets/images/home.jpg" alt="Developer" class="rounded-2xl" />
    </div>
  </section>
</template>

<style scoped></style>
