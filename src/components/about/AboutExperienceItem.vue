<script>
export default {
  props: {
    experience: Object,
    align: {
      type: String,
      default: "left",
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      :class="
        align === 'right'
          ? 'flex items-center justify-end w-full mx-auto'
          : 'flex items-center justify-start w-full mx-auto'
      "
    >
      <div
        :class="
          align === 'right'
            ? 'w-full lg:w-1/2 lg:pl-8'
            : 'w-full lg:w-1/2 lg:pr-8'
        "
      >
        <div class="relative flex-1 mb-10 rounded shadow lg:mb-8 bg-gray-900">
          <div
            :class="
              align === 'right'
                ? 'absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4'
                : 'absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'
            "
          >
            <div
              :class="
                align === 'right'
                  ? 'hidden h-10 origin-top-right transform -rotate-45 shadow lg:block bg-gray-900'
                  : 'hidden h-10 origin-bottom-left transform -rotate-45 shadow lg:block bg-gray-900'
              "
            ></div>
          </div>
          <div class="relative z-20">
            <div class="flex flex-wrap items-center">
              <div class="flex md:flex-col p-4 w-full md:w-1/5 justify-center">
                <span class="text-lg text-gray-300">{{
                  experience.date[0]
                }}</span>
                <p class="text-gray-300">&nbsp;-&nbsp;</p>
                <p class="text-lg text-gray-300">
                  {{ experience.date[1] }}
                </p>
              </div>
              <div class="flex-1 p-4 pr-4 border-l border-gray-700">
                <div class="flex flex-wrap gap-2 justify-between items-center">
                  <p class="mb-2 text-xl font-bold text-primary-light">
                    {{ experience.company }}
                  </p>
                  <p class="mb-2 text-xl font-bold italic text-gray-400">
                    {{ experience.position }}
                  </p>
                </div>
                <div v-for="(detail, index) in experience.details" :key="index">
                  <p class="text-secondary-light text-justify">
                    ● {{ detail.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-primary-light rounded-full bg-gray-700 left-1/2"
      :class="
        align === 'right' ? 'lg:translate-y-[3px]' : 'lg:translate-y-[4px]'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="w-3 h-3 bi bi-building"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
        ></path>
        <path
          d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
