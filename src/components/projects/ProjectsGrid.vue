<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: {
    ProjectSingle,
  },
  data: () => {
    return {
      projects,
      projectsHeading: "Projects Portfolio",
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold mb-2 text-2xl font-semibold text-primary-light sm:text-5xl"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular text-md mb-4 text-center font-normal text-secondary-light sm:text-xl"
      >
        Search projects by title
      </h3>
      <div
        class="flex justify-between gap-2 border-b border-secondary-dark pb-3"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden cursor-pointer rounded-xl bg-ternary-dark p-2.5 shadow-sm sm:block"
          >
            <i data-feather="search" class="text-ternary-light"></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium border-1 sm:text-md rounded-lg border-secondary-dark bg-ternary-dark py-2 pl-3 pr-1 text-sm text-ternary-light sm:px-4"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
      <ProjectSingle
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
