<script>
import AboutExperienceItem from "./AboutExperienceItem.vue";

export default {
  components: {
    AboutExperienceItem,
  },
  data: () => {
    return {
      experiences: [
        {
          date: ["November 2022", "July 2023"],
          company: "Mysoalan Technologies",
          position: "Front-end Software Developer",
          details: [
            {
              description:
                "Utilized TypeScript for full-stack development, creating features for MySoalan and new web apps, and translating Figma designs to functional applications",
            },
            {
              description:
                "Proficient in Vue.js, Tailwind CSS, SCSS, Nest.js, PostgreSQL, TypeORM, and other tools like Docker, Insomnia, and Postico for seamless development and integration processes",
            },
            {
              description:
                "Built and managed API endpoints, enhancing data accessibility and accuracy",
            },
            {
              description:
                "Applied Mixpanel analytics for understanding user behavior and improving sales conversions",
            },
            {
              description:
                "Collaborated with SnappEd to integrate their application with MySoalan, extending the functionality of both platforms",
            },
            {
              description:
                "Demonstrated self-reliance in a remote, Agile start-up environment, consistently meeting deadlines",
            },
          ],
        },
        {
          date: ["June 2022", "October 2022"],
          company: "",
          position: "Self-educated software programmer",
          details: [
            {
              description:
                "Created a full-stack MERN web application (Workout Buddy) and incorporating the use of JWT for user authentication",
            },
            {
              description:
                "Created a simple full-stack web application (book review) using HTML, CSS, JS, Node.js, Express.js and SQL database and deployed it in Heroku",
            },
            {
              description:
                "Created multiple CRUD web applications using basic JS and React.js",
            },
            {
              description:
                "Deployed a static website (portfolio) hosted on GitHub",
            },
            {
              description:
                "Created simple web application and games for browser such as ‘Iphone Calculator’, ‘Pig Game’ and ‘Guess My Numbers’ to showcase an understanding of DOM and JS",
            },
          ],
        },
        {
          date: ["April 2019", "June 2022"],
          company: "Applied Agricultural Resource (AAR)",
          position: "Agronomist",
          details: [
            {
              description:
                "Started a new trial with a colleague on frond snapping incidences on oil palm plantation. Collaborated with GPS/GIS department to incorporate automated sensors (pH, moisture and field water table) for data collection",
            },
            {
              description:
                "Leading the Drainage Improvement Project under close supervision of Director of Research. Explored alternative hydrological data analysis using QGIS. Working closely with AAR’s principal to automate the piezometer data collection using LoRa Protocol",
            },
            {
              description:
                "Conducted desktop studies on several lands on the market for AAR’s principal company. Reported on the land suitability and potential for future projects. Analysed data using QGIS and presented the findings that impacted the decision made by the Board of Directors on the land purchase",
            },
          ],
        },
        {
          date: ["May 2018", "September 2018"],
          company: "CSBP Limited",
          position: "Data Gatherer",
          details: [
            {
              description:
                "Operated 3 different spectrophotometers (worth AUD100,000, 35,000 and 7,000 respectively) on several crops (i.e., wheat, canola, barley) in the wheatbelt region (WA). Frequent overnight travels. Owns WA driving license",
            },
            {
              description:
                "Gathered feedbacks from farmers on the beta apps and prototype device. Represented 6 other Data Gatherers in the project meeting with CSBP management to communicate the feedbacks",
            },
            {
              description:
                "One out of the only two Data Gatherers to work with Kalyx Australia for smaller trial plots in addition to the field",
            },
          ],
        },
        {
          date: ["March 2017", "July 2018"],
          company: "School of Biological Sciences UWA",
          position: "Research Assistant",
          details: [
            {
              description:
                "Initiated a research project on the p-acquisition method of Xylomelum genus. Operated hydroponic setup for several native species (Proteaceae family). Obtained research permits from DPaW/local councils. Co-author in a research paper published in July 2020",
            },
          ],
        },
        {
          date: ["Juner 2016", "September 2016"],
          company: "Institute of Agriculture UWA",
          position: "Internship",
          details: [
            {
              description:
                "Managed the watering program for over 100 chickpeas in glasshouse setting. Harvested the crops, scanned the roots using WinRHIZO",
            },
          ],
        },
        {
          date: ["June 2013", "August 2016"],
          company: "University of Western Australia",
          position: "Student",
          details: [
            {
              description:
                "Bachelor of Science. Majors (i) Agricultural Science (ii) Natural Resource Management. Coursework included agricultural system, effective scientific communication, soil science, environmental science and environmental economics",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <section class="py-16 lg:py-20 bg-gray-800 font-poppins">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl font-bold leading-tight text-white">
            Education and<span class="text-primary-light"> Experiences </span>
          </h1>
          <div class="flex w-24 mt-1 mb-6 overflow-hidden rounded">
            <div class="flex-1 h-2 bg-[#F5D4C5]"></div>
            <div class="flex-1 h-2 bg-primary-light"></div>
            <div class="flex-1 h-2 bg-[#F5A986]"></div>
          </div>
        </div>
        <p class="mb-16 text-base text-center text-gray-300">
          These are my past experiences that I have gathered. I hope this will
          give a you a better picture of what I have achieve in my career!
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="w-full px-4 mx-auto">
        <div class="relative">
          <div
            class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-gray-400 lg:block left-1/2"
          ></div>
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="space-y-2 lg:space-y-4"
          >
            <!-- Left section -->
            <div v-if="index % 2 === 0">
              <AboutExperienceItem :experience="experience" :align="'left'" />
            </div>
            <!-- Right section -->
            <div v-else>
              <AboutExperienceItem :experience="experience" :align="'right'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
