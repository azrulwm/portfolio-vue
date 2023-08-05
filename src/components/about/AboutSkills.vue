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
          title: "TypeScript",
          img: require("@/assets/images/skills/ts.png"),
        },
        {
          id: 5,
          title: "SCSS",
          img: require("@/assets/images/skills/scss.png"),
        },
        {
          id: 6,
          title: "ReactJS",
          img: require("@/assets/images/skills/reactjs.png"),
        },
        {
          id: 7,
          title: "VueJS",
          img: require("@/assets/images/skills/vue.png"),
        },
        {
          id: 8,
          title: "NodeJS",
          img: require("@/assets/images/skills/nodejs.png"),
        },
        {
          id: 9,
          title: "NestJS",
          img: require("@/assets/images/skills/nest.png"),
        },
        {
          id: 10,
          title: "TypeORM",
          img: require("@/assets/images/skills/typeorm.svg"),
        },
        {
          id: 11,
          title: "MongoDB",
          img: require("@/assets/images/skills/mongodb.png"),
        },
        {
          id: 12,
          title: "PostgreSQL",
          img: require("@/assets/images/skills/postgresql.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p class="font-general-medium text-2xl sm:text-3xl text-primary-light">
      {{ skillsHeading }}
    </p>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 sm:mt-14 gap-2"
    >
      <AboutSkillSingle
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </div>
</template>
