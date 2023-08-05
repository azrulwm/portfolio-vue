<script>
export default {
  setup() {
    return {
      quote:
        'Man cannot discover new oceans unless he has the courage to lose sight of the shore."—Andre Gide',
      bios: [
        {
          id: 1,
          bio: "From a five-year stint in agriculture, I've shifted gears to the dynamic world of software development. Over the past year, I've refined my self-taught coding skills and tackled real-world challenges. I invite you to explore my projects—they stand as proof of my dedication and passion. Eager and ready for new opportunities, I bring a unique perspective to any development team.",
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
