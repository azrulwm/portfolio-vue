<script>
import AboutMe from "@/components/about/AboutMe.vue";
import AboutSkills from "@/components/about/AboutSkills.vue";
import AboutExperiences from "@/components/about/AboutExperiences.vue";
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutSkills,
    AboutExperiences,
  },
  data: () => {
    return {};
  },
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
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- skills -->
    <div class="container mx-auto">
      <AboutSkills />
    </div>

    <div class="container mx-auto">
      <AboutExperiences />
    </div>
  </div>
</template>

<style scoped></style>
