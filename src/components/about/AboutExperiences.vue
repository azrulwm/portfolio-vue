<script>
import AboutExperienceLeft from "./AboutExperienceLeft.vue";
import AboutExperienceRight from "./AboutExperienceRight.vue";

export default {
  components: {
    AboutExperienceLeft,
    AboutExperienceRight,
  },
  data: () => {
    return {
      experiences: [
        {
          date: "1 January 2023",
          company: "Mysoalan",
          position: "developer",
          details: [
            { description: "lorem ipsum bla bla" },
            {
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit",
            },
          ],
        },
        {
          date: "1 January 2023",
          company: "AAR",
          position: "agronomist",
          details: [
            { description: "lorem ipsum bla bla" },
            { description: "testing" },
          ],
        },
        {
          date: "1 January 2023",
          company: "UWA",
          position: "scientiest",
          details: [{ description: "lorem ipsum bla bla" }],
        },
        {
          date: "1 February 2019",
          company: "Self taught",
          position: "self taught",
          details: [{ description: "lorem ipsum bla bla" }],
        },
        {
          date: "1 January 2023",
          company: "AAR",
          position: "scientiest",
          details: [{ description: "lorem ipsum bla bla" }],
        },
      ],
    };
  },
};
</script>

<template>
  <section class="py-16 bg-[#EFF0F4] lg:py-20 dark:bg-gray-800 font-poppins">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl font-bold leading-tight dark:text-white">
            Education and<span class="text-purple-500"> Experiences </span>
          </h1>
          <div class="flex w-24 mt-1 mb-6 overflow-hidden rounded">
            <div class="flex-1 h-2 bg-purple-200"></div>
            <div class="flex-1 h-2 bg-purple-400"></div>
            <div class="flex-1 h-2 bg-purple-600"></div>
          </div>
        </div>
        <p class="mb-16 text-base text-center text-gray-500">
          These are my past experiences that I have gathered. I hope this will
          give a you a better picture of what I have achieve in my career!
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="w-full px-4 mx-auto lg:max-w-5xl">
        <div class="relative">
          <div
            class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] dark:bg-gray-700 lg:block left-1/2"
          ></div>
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="space-y-2 lg:space-y-4"
          >
            <div v-if="index % 2 === 0">
              <AboutExperienceLeft :experience="experience" />
            </div>
            <!-- Right section -->
            <div v-else>
              <AboutExperienceRight :experience="experience" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
