<script>
export default {
  setup() {
    return {
      quote:
        'Man cannot discover new oceans unless he has the courage to lose sight of the shore."—Andre Gide',
      bios: [
        {
          id: 1,
          bio: "I am excited to explore a new career path to become a software developer after having worked in the agriculture industry for more than 5 years. I am self-educated and actively learning to equip myself with the skills to become an exceptional software developer. To showcase my learning journey, I have listed them in the project section. Feel free to go through it!",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div>
      <!-- About quotes -->
      <div
        class="w-full font-general-regular mb-4 text-primary-highlight text-2xl"
      >
        {{ quote }}
      </div>

      <div class="block sm:flex sm:gap-10 mt-10">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img
            src="@/assets/images/home.jpg"
            class="rounded-full w-96 mx-auto"
            alt=""
          />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 my-auto">
          <p
            v-for="bio in bios"
            :key="bio.id"
            class="font-general-regular mb-4 text-secondary-light text-xl"
          >
            {{ bio.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
