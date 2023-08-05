<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  components: {
    ContactForm,
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
  <div
    class="container flex flex-col md:flex-row items-center mx-auto py-5 md:py-10 md:mt-10"
  >
    <div class="md:w-1/2">
      <p
        class="font-general-medium my-2 text-lg sm:text-xl xl:text-2xl text-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
      >
        Exciting opportunities are always welcome! If you've got a project that
        needs a creative and tech-savvy mind or are seeking a passionate
        collaborator for an innovative venture, don't hesitate to reach out!
        Let's make something amazing together!
      </p>

      <img
        src="@/assets/images/web-project-2.jpg"
        class="hidden md:block rounded-xl cursor-pointer shadow-lg sm:shadow-none mt-2"
        alt="web project"
      />
    </div>
    <!-- Contact form -->
    <ContactForm />
  </div>
</template>

<style lang="scss" scoped></style>
