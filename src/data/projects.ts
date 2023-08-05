// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
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
