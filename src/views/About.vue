<script>
import AboutMe from "@/components/about/AboutMe.vue";
import AboutSkills from "@/components/about/AboutSkills.vue";
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutSkills,
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
  </div>
</template>

<style scoped></style>
