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
          date: ["February 2024", "Current"],
          company: "Prenetics (Malaysia) Sdn. Bhd.",
          position: "Full Stack Engineer",
          details: [
            {
              description:
                "Submitted PR changes within my first three days, quickly adapting to existing codebases. Later, modified 20+ microservice repositories to support new web features with production-ready updates",
            },
            {
              description:
                "In one month, became the go-to engineer for campaign-related technical issues, creating reusable components that reduced repetitive tasks and eliminated legacy or redundant code",
            },
            {
              description:
                "Boosted Meta Sales conversion reporting accuracy from 5.3 to 8.7 out of 10, enhancing insights into ad performance and increasing the average ROAS for Prenetics' core market",
            },
            {
              description:
                "Implemented TikTok’s advertising integration after Meta’s policy changes threatened sales. Reworked event tracking and set up TikTok’s conversion API—ensuring accurate reporting and preserving a key revenue stream",
            },
            {
              description:
                "Integrated AWIN’s commission-based program by customizing it for Prenetics' services and conducting end-to-end testing, resulting in a successful launch. This funnel now drives an average of USD 5,500 in monthly sales",
            },
            {
              description:
                "Improved Klaviyo’s endpoint services by upgrading APIs and retiring obsolete code, reducing duplicate customers and enabling more effective newsletter campaigns",
            },
            {
              description:
                "Authored comprehensive documentation for mobile application releases to fill the knowledge gap left by a departing engineer, serving as a key reference for the team and streamlining future releases",
            },
            {
              description:
                "Optimized the campaign release process by decoupling text and media assets from the application build, enabling independent CDN updates without full rebuilds",
            },
            {
              description:
                "Replaced CloudFront booking system with an in-house application, saving at least USD 3,000 annually",
            },
            {
              description:
                "Restored Crazy Egg’s analytics, proving its value to marketing and unlocking data-driven improvements in campaigns and UI/UX",
            },
          ],
        },
        {
          date: ["September 2023", "February 2024"],
          company: "SOLS Energy Sdn. Bhd.",
          position: "Web Application Developer",
          details: [
            {
              description:
                "Created multiple web applications for internal use, utilizing EdenAI for text extraction from images, Firebase Cloud Functions for a serverless backend, and Firestore for real-time data display",
            },
            {
              description:
                "Updated and maintained Firebase Cloud Functions packages to ensure optimal functionality and usability",
            },
            {
              description:
                "Tested new frameworks and CMS tools (e.g., Qwik, Builder.io) for client-facing websites to enhance performance and user experience",
            },
            {
              description:
                "Integrated third-party CRM solutions (e.g., HubSpot) into the company’s website to improve client database management and facilitate purchase follow-ups",
            },
            {
              description:
                "Built a detailed subscription calculator for solar energy plans by breaking down TNB’s bill structure and the Net Energy Metering (NEM) Scheme giving clients clear cost estimates for solar subscriptions",
            },
            {
              description:
                "Transformed the manual, error-prone NEM application workflow by integrating PandaDoc, reducing human errors and cutting application time from 30 minutes to just 10 minutes per applicant",
            },
          ],
        },
        {
          date: ["November 2022", "September 2023"],
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
  <section class="font-poppins bg-gray-800 py-16 lg:py-20">
    <div class="mx-auto max-w-xl">
      <div class="text-center">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl font-bold leading-tight text-white">
            Education and<span class="text-primary-light"> Experiences </span>
          </h1>
          <div class="mb-6 mt-1 flex w-24 overflow-hidden rounded">
            <div class="h-2 flex-1 bg-[#F5D4C5]"></div>
            <div class="h-2 flex-1 bg-primary-light"></div>
            <div class="h-2 flex-1 bg-[#F5A986]"></div>
          </div>
        </div>
        <p class="mb-16 text-center text-base text-gray-300">
          These are my past experiences that I have gathered. I hope this will
          give a you a better picture of what I have achieve in my career!
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="mx-auto w-full px-4">
        <div class="relative">
          <div
            class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gray-400 lg:block"
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
