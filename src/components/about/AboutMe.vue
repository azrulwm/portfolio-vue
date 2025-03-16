<script>
export default {
  setup() {
    return {
      quote:
        'Man cannot discover new oceans unless he has the courage to lose sight of the shore."—Andre Gide',
      bios: [
        {
          id: 1,
          bio: "Transitioning from five years in agriculture to software development, I've embraced the tech world with determination and curiosity. Through self-directed learning and hands-on project work, I've built a solid foundation in modern development practices. My portfolio showcases practical solutions to real-world problems, demonstrating both technical skills and creative problem-solving abilities. With my unique background and passionate drive to learn, I'm ready to contribute fresh perspectives to innovative development teams.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 block sm:mt-20 sm:flex sm:gap-10">
    <div>
      <!-- About quotes -->
      <div
        class="font-general-regular mb-4 w-full text-2xl text-primary-highlight"
      >
        {{ quote }}
      </div>

      <div class="mt-10 block sm:flex sm:gap-10">
        <!-- About profile image -->
        <div class="mb-7 w-full sm:mb-0 sm:w-1/4">
          <img
            src="@/assets/images/home.jpg"
            class="mx-auto w-96 rounded-full"
            alt=""
          />
        </div>

        <!-- About details -->
        <div class="my-auto w-full sm:w-3/4">
          <p
            v-for="bio in bios"
            :key="bio.id"
            class="font-general-regular mb-4 text-xl text-secondary-light"
          >
            {{ bio.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
