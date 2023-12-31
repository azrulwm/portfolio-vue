// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 22,
    title: "Qwik-Affirmations",
    description:
      "My first attempt to create a simple qwik application and hosting the qwik app on github!",
    img: require("@/assets/images/projects/project-22.png"),
    url: "https://azrulwm.github.io/qwik-affirmations/",
  },
  {
    id: 21,
    title: "Codeme-Pro Interview Task",
    description:
      "The task's main purpose was to test the logic of solving a real life problem. At the same time, it tests my ability to create API in the backend, calling API from frontend, and storing data in DB",
    img: require("@/assets/images/projects/project-21.png"),
    url: "https://codeme-pro.onrender.com",
  },
  {
    id: 20,
    title: "Horizons45 Assessment Task",
    description:
      "Created this website for as a task for an interview in Horizons45. This is also my attempt to refresh my skills in React.js and implement a proper state management using Redux and RTK",
    img: require("@/assets/images/projects/project-20.png"),
    url: "https://azrulwm.github.io/horizons45/",
  },
  {
    id: 19,
    title: "3D Advertisers Website Interview",
    description:
      "Created this website for as a task for an interview in 3D Advertisers. The website is live and functional however it is not complete",
    img: require("@/assets/images/projects/project-19.png"),
    url: "https://azrulwm.github.io/3d-website/",
  },
  {
    id: 18,
    title: "Technotes",
    description:
      "Fullstack app with made with ReactJS that is currently hosted on Render. It is complete with authentification and roles authorisation",
    img: require("@/assets/images/projects/project-18.png"),
    url: "https://technotes-react.onrender.com/",
  },
  {
    id: 17,
    title: "Azrul's Portfolio",
    description:
      "My latest personal portfolio that I created using VueJS and Tailwind. This latest one is definitely better than the first one I made. If you don't believe me, check it out!",
    img: require("@/assets/images/projects/project-17.png"),
  },
  {
    id: 16,
    title: "MySoalan X Snapped",
    description:
      "MySoalan collaboration with Snapped to allow students to answer questions within the platform",
    img: require("@/assets/images/projects/project-16.png"),
  },
  {
    id: 15,
    title: "Manglish",
    description:
      "Our first attempt to incorporate AI into our web application. It detects user's pronunciation and score them",
    img: require("@/assets/images/projects/project-15.png"),
    url: "https://www.manglish.co/",
  },
  {
    id: 14,
    title: "Tense",
    description:
      "This app tracks custom workouts and syncs the data with notion. This is when I learned how to integrate notion API into the app",
    img: require("@/assets/images/projects/project-14.png"),
    url: "https://tenseapp.com/",
  },
  {
    id: 13,
    title: "MySoalan",
    description:
      "This is the platform that I spend most of my time when I was working at MySoalan Technologies. I started with frontend and slowly being trusted to handle the backend",
    img: require("@/assets/images/projects/project-13.png"),
    url: "https://mysoalan.com/",
  },
  {
    id: 12,
    title: "Ravenbooks",
    description:
      "A simple fullstack website for book review that incorporates the use of HTML, CSS, JS, Node.js and SQL database. This app is currently hosted in Heroku",
    img: require("@/assets/images/projects/project-12.png"),
  },
  {
    id: 11,
    title: "Azrul's Portfolio",
    description:
      "My first static website published on GitHub. This is the webpage that you are currently viewing! It is a simple website that only uses HTML, CSS and JS",
    img: require("@/assets/images/projects/project-11.png"),
    url: "https://azrulwm.github.io/portfolio/",
  },
  {
    id: 10,
    title: "Ninja-Blog",
    description:
      "A tutorial project that runs on Node.js environment. My first MVC project that incorporates the use of MongoDB as the database.",
    img: require("@/assets/images/projects/project-default.png"),
  },
  {
    id: 9,
    title: "Smoothie-Login",
    description:
      "A react project that incorporate the use of JWT for user authentication. Only authenticated user can access the smoothie recipe in the home page!",
    img: require("@/assets/images/projects/project-default.png"),
  },
  {
    id: 8,
    title: "Workout Buddy",
    description:
      "My first fullstack MERN webapp that utilises JWT for user authentication. Each authenticated user will only be able to view their own workout without worrying other people reading their list! It is currently hosted on Render.com",
    img: require("@/assets/images/projects/project-8.png"),
    url: "https://workout-buddy-yay2.onrender.com/login",
  },
  {
    id: 7,
    title: "Bookstore-MongoDB",
    description:
      "A simple Node.js project that was created when I was learning to use MongoDB as my NoSQL database",
    img: require("@/assets/images/projects/project-default.png"),
  },
  {
    id: 6,
    title: "React-Blog",
    description:
      "This dummy blog was created when I was learning the workings of react including the components, props and hooks",
    img: require("@/assets/images/projects/project-6.png"),
  },
  {
    id: 5,
    title: "Reading-List-React",
    description:
      "This is another project created using react. My focus was to learn about react global state with the use of Context and Reducer. You can use it and all the information will be stored in your browser!",
    img: require("@/assets/images/projects/project-5.png"),
    url: "https://azrulwm.github.io/reading-list-react/",
  },
  {
    id: 4,
    title: "Country-Guide-App",
    description:
      "Need general information on certain countries? Just type it in! This project involves API calls and presenting the relevant data to users",
    img: require("@/assets/images/projects/project-4.png"),
    url: "https://azrulwm.github.io/country_guide_app/",
  },
  {
    id: 3,
    title: "Guess-My-Number",
    description:
      "My first mini web games! It highlights my ability to utilise DOM and JS on a simple webpage",
    img: require("@/assets/images/projects/project-3.png"),
    url: "https://azrulwm.github.io/guess-my-number/",
  },
  {
    id: 2,
    title: "Pig Game",
    description:
      "2 player game with the objective to reach the score of 100. A further improvement on my skill to utilise DOM and JS in a static website",
    img: require("@/assets/images/projects/project-2.png"),
    url: "https://azrulwm.github.io/pig-games/",
  },
  {
    id: 1,
    title: "Iphone Calculator",
    description:
      "A dummy iphone calculator with usable calculator funtion. Try it. It works!",
    img: require("@/assets/images/projects/project-1.png"),
    url: "https://azrulwm.github.io/iphone-calculator/",
  },
];

export default projects;
