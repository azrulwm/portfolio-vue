<script>
export default {
  methods: {
    handleEmailClick() {
      const email = "azrulazmi.wm@gmail.com";
      const subject = "💡 Project Inquiry";
      const body = `Hi Azrul,

I'm interested in working with you on a project.

About the project:
----------------
• What I need: 
• When I need it: 

Looking forward to hearing from you!

Best regards,`;

      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    },
  },
};
</script>

<template>
  <div class="flex">
    <div
      class="mx-auto my-4 w-full max-w-4xl rounded-xl bg-secondary-light px-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-secondary-dark md:my-8"
    >
      <div class="flex flex-col md:flex-row">
        <!-- Left Section -->
        <div class="flex flex-1 items-center p-6 md:p-8">
          <div class="max-w-md">
            <span
              class="mb-4 inline-block rounded-full bg-primary-dark bg-opacity-10 px-3 py-1.5 text-sm font-medium text-primary-dark dark:bg-primary-light dark:bg-opacity-10 dark:text-primary-light"
            >
              Let's Connect
            </span>
            <h1
              class="mb-4 text-3xl font-bold text-primary-dark dark:text-primary-light"
            >
              Ready to Transform Your Ideas Into Reality?
            </h1>
            <p
              class="text-base leading-relaxed text-ternary-dark dark:text-ternary-light"
            >
              From concept to creation, I'm here to help bring your vision to
              life. Whether it's a new project, collaboration, or just a
              friendly chat about tech - I'm excited to hear from you.
            </p>

            <!-- Feature Points -->
            <div class="mt-6 space-y-3">
              <div
                class="flex items-center space-x-3 text-ternary-dark dark:text-ternary-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-dark dark:text-primary-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm">Quick Response Time</span>
              </div>
              <div
                class="flex items-center space-x-3 text-ternary-dark dark:text-ternary-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-dark dark:text-primary-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm">Professional Collaboration</span>
              </div>
              <div
                class="flex items-center space-x-3 text-ternary-dark dark:text-ternary-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-dark dark:text-primary-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm">Creative Solutions</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div
          class="flex flex-1 items-center justify-center border-ternary-light p-6 dark:border-ternary-dark md:border-l md:p-8"
        >
          <div class="w-full max-w-xs text-center">
            <div class="mb-6">
              <svg
                class="mx-auto mb-3 h-12 w-12 text-primary-dark dark:text-primary-light"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
              <p
                class="text-base font-medium text-primary-dark dark:text-primary-light"
              >
                Start a Conversation
              </p>
            </div>

            <button
              @click="handleEmailClick"
              class="group relative w-full transform overflow-hidden rounded-lg bg-primary-dark px-6 py-4 font-medium text-white transition-all duration-300 hover:scale-105 dark:bg-primary-light dark:text-primary-dark"
            >
              <div
                class="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"
              ></div>
              <div class="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span class="text-base">Send a Message</span>
              </div>
            </button>

            <p class="mt-4 text-xs text-ternary-dark dark:text-ternary-light">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
