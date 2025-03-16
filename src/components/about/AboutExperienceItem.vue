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
        <div class="relative mb-10 flex-1 rounded bg-gray-900 shadow lg:mb-8">
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
              <div class="flex w-full justify-center p-4 md:w-1/5 md:flex-col">
                <span class="text-lg text-gray-300">{{
                  experience.date[0]
                }}</span>
                <p class="text-gray-300">&nbsp;-&nbsp;</p>
                <p class="text-lg text-gray-300">
                  {{ experience.date[1] }}
                </p>
              </div>
              <div class="flex-1 border-l border-gray-700 p-4 pr-4">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <p class="mb-2 text-xl font-bold text-primary-light">
                    {{ experience.company }}
                  </p>
                  <p class="mb-2 text-xl font-bold italic text-gray-400">
                    {{ experience.position }}
                  </p>
                </div>
                <div v-for="(detail, index) in experience.details" :key="index">
                  <p class="text-justify text-secondary-light">
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
      class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full bg-primary-light"
      :class="
        align === 'right' ? 'lg:translate-y-[3px]' : 'lg:translate-y-[4px]'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-building h-3 w-3"
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
