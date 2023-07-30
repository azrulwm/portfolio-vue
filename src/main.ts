import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";

const feather = require("feather-icons");
feather.replace();

createApp(App).use(router).mount("#app");

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
const body = document.querySelector("body");

if (body !== null) {
  if (appTheme === "dark" && body.classList.contains("app-theme")) {
    body.classList.add("bg-primary-dark");
  } else {
    body.classList.add("bg-secondary-light");
  }
}
