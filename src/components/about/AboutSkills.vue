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
          title: "HTML",
          img: require("@/assets/images/skills/html.webp"),
        },
        {
          title: "CSS",
          img: require("@/assets/images/skills/css.webp"),
        },
        {
          title: "JavaScript",
          img: require("@/assets/images/skills/js.webp"),
        },
        {
          title: "TypeScript",
          img: require("@/assets/images/skills/ts.webp"),
        },
        {
          title: "SCSS",
          img: require("@/assets/images/skills/scss.webp"),
        },
        {
          title: "ReactJS",
          img: require("@/assets/images/skills/reactjs.webp"),
        },
        {
          title: "VueJS",
          img: require("@/assets/images/skills/vue.webp"),
        },
        {
          title: "NextJS",
          img: require("@/assets/images/skills/nextjs.webp"),
        },
        {
          title: "QwikJs",
          img: require("@/assets/images/skills/qwik.webp"),
        },
        {
          title: "Builder Io",
          img: require("@/assets/images/skills/builderIo.webp"),
        },
        {
          title: "NodeJS",
          img: require("@/assets/images/skills/nodejs.webp"),
        },
        {
          title: "NestJS",
          img: require("@/assets/images/skills/nest.webp"),
        },
        {
          title: "TypeORM",
          img: require("@/assets/images/skills/typeorm.svg"),
        },
        {
          title: "MongoDB",
          img: require("@/assets/images/skills/mongodb.webp"),
        },
        {
          title: "PostgreSQL",
          img: require("@/assets/images/skills/postgresql.webp"),
        },
        {
          title: "Postman",
          img: require("@/assets/images/skills/postman.webp"),
        },
        {
          title: "Insomnia",
          img: require("@/assets/images/skills/insomnia.webp"),
        },
        {
          title: "Kibana",
          img: require("@/assets/images/skills/kibana.webp"),
        },
        {
          title: "Metabase",
          img: require("@/assets/images/skills/metabase.webp"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p class="font-general-medium text-2xl text-primary-light sm:text-3xl">
      {{ skillsHeading }}
    </p>
    <div
      class="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-3 lg:grid-cols-4"
    >
      <AboutSkillSingle
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
      />
    </div>
  </div>
</template>
