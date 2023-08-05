import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Azrul - Home",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "Azrul - About",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
    meta: {
      title: "Azrul - Projects",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Contact.vue"),
    meta: {
      title: "Azrul - Contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    const appElement = document.getElementById("app");
    if (appElement !== null) {
      appElement.scrollIntoView();
    }
  },
});

export default router;

/**
 * Below code will display the component/active page title
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => {
      if (el.parentNode !== null) {
        el.parentNode.removeChild(el);
      }
    }
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  if (
    nearestWithMeta &&
    "meta" in nearestWithMeta &&
    "metaTags" in (nearestWithMeta.meta as { metaTags: any })
  ) {
    (nearestWithMeta.meta as { metaTags: { [key: string]: string }[] }).metaTags
      .map((tagDef: { [key: string]: string }) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });

        tag.setAttribute("data-vue-router-controlled", "");

        return tag;
      })
      .forEach((tag: HTMLMetaElement) => document.head.appendChild(tag));
  }

  next();
});
