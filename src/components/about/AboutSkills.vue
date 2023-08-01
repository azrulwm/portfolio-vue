<script>
import AboutSkillSingle from "./AboutSkillSingle.vue";

export default {
  components: {
    AboutSkillSingle,
  },
  data: () => {
    return {
      skillsHeading: "Some of the skills I have gained during my journey",
      skills: [
        {
          id: 1,
          title: "HTML",
          img: require("@/assets/images/skills/html.png"),
        },
        {
          id: 2,
          title: "CSS",
          img: require("@/assets/images/skills/css.png"),
        },
        {
          id: 3,
          title: "JavaScript",
          img: require("@/assets/images/skills/js.png"),
        },
        {
          id: 4,
          title: "ReactJS",
          img: require("@/assets/images/skills/reactjs.png"),
        },
        {
          id: 5,
          title: "NodeJS",
          img: require("@/assets/images/skills/nodejs.png"),
        },
        {
          id: 6,
          title: "MongoDB",
          img: require("@/assets/images/skills/mongodb.png"),
        },
        {
          id: 7,
          title: "CANON",
          img: require("@/assets/images/skills/mongodb.png"),
        },
        {
          id: 7,
          title: "PUMA",
          img: require("@/assets/images/skills/mongodb.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ skillsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutSkillSingle
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </div>
</template>
