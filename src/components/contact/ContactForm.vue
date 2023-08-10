<script>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      document.getElementById("submitForm").submit();

      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="w-full mx-auto md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p class="font-general-medium text-primary-light text-2xl mb-8">
        Contact Form
      </p>
      <form
        id="submitForm"
        action="https://formsubmit.co/azrulazmi.wm@gmail.com"
        method="post"
        target="_blank"
        class="font-general-regular space-y-7"
      >
        <FormInput
          :value="name"
          @update:value="name = $event"
          label="Full Name"
          inputIdentifier="name"
        />
        <FormInput
          :value="email"
          @update:value="email = $event"
          label="Email"
          inputIdentifier="email"
          inputType="email"
        />
        <FormInput
          :value="subject"
          @update:value="subject = $event"
          label="Subject"
          inputIdentifier="subject"
        />
        <FormTextarea
          :value="message"
          @update:value="message = $event"
          label="Message"
          textareaIdentifier="message"
        />

        <div class="flex justify-center">
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-400 hover:bg-primary-highlight focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
