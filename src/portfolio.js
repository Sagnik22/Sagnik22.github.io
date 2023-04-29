/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sagnik Misra",
  title: "Hi all, I'm Sagnik",
  subTitle: emoji(
    "A passionate Automation Tester 🚀 Experienced Quality Assurance Engineer with 2+ years of experience and a demonstrated history of working in the banking industry as Automation and Manual Testing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hd740Zdh_QFXTV70Qk4mTbZi-HRtnyWT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sagnik22/",
  linkedin: "https://www.linkedin.com/in/sangy786/",
  gmail: "sagnikmisra@gmail.com",
  gitlab: "https://gitlab.com/sagnikmisra",
  facebook: "https://www.facebook.com/sagnik.misra2/",
  medium: "https://medium.com/@sagnikmisra",
  stackoverflow: "https://stackoverflow.com/users/11805165/sagnik-misra",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY AUTOMATION TESTER WHO LOVES TO EXPLORE SYSTEM VULNERABILITIES",
  skills: [
    emoji("⚡ Test End to End flow for your web applications"),
    emoji("⚡ Find Critical Bugs and Report it to Developer"),
    emoji("⚡ Create Automation Framework for ease in bug finding"),
    emoji(
      "⚡ Use the best practices in testing to make the process flawless and to make the system stable"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIIT University",
      logo: require("./assets/images/kiitLogo.jpg"),
      subHeader: "B.Tech in Computer Science and Communications Engineering",
      duration: "August 2017 - August 2021",
      descBullets: [
        "Was actively part of Kraya Society",
        "Was engaged in Techo Fests."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation Testing", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Selenium", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cucumber", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "BitBucket", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Jira", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SVN", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "QC",
      progressPercentage: "70%"
    },
    {
      Stack: "TestNG",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenosLogo.png"),
      date: "July 2021 – Present",
      desc: "Working as a Product Engineer - Testing in Wealth Domain",
      descBullets: [
        "Wrote Efficient Automation Scripts following best practices",
        "Responsible for handling in-detailed test plan, test cases and test evidence documents",
        "Responsible to handle the test coverage improvement by 20-35%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Highradius",
      companylogo: require("./assets/images/highradiusLogo.png"),
      date: "July 2020 – Feb 2021",
      desc: "Worked in Automation UI Team and maintained the efficient automation framework along with testing the complete UI Components."
    },
    {
      role: "Software Engineer Intern",
      company: "Over Coffee Solutions",
      companylogo: require("./assets/images/ocsImage.jpeg"),
      date: "Dec 2019 – Jan 2020",
      desc: "Worked closely with Java, JavaScript, HTML and CSS to make interactive web applications for clients."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const testProjects = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Test Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO TEST THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mirabaudLogo.png"),
      projectName: "Mirabaud",
      projectDesc:
        "Created Automated Regression Suite for ease in End to End Automation and improving the test coverage",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mirabaud.com/en/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rbcLogo.jpg"),
      projectName: "Royal Bank of Canada",
      projectDesc:
        "Worked on complete KD Testing for RBC and ensure the releases go well.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.rbc.com/about-rbc.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Temenos SPOT Award",
      subtitle:
        "Awarded the prestigious SPOT Award in TEMENOS for proactively scripting in OFG Initiative.",
      image: require("./assets/images/spotAwardTemenos.png"),
      imageAlt: "Temenos Spot Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1vNNLOgAYEwktdN_ibRJf8aZn3J6uVbts/view?usp=share_link"
        }
      ]
    },
    {
      title: "Temenos T Stars Award",
      subtitle:
        "Received the Temenos T-Stars Award for proactively working in End to End Automation.",
      image: require("./assets/images/temenosTStarsAward.png"),
      imageAlt: "Temenos T Stars Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/11mhWvqnCoh_yrQpsx_18B9fLaLGh6JZV/view?usp=share_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sometimes, i love to write on social issues.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@sagnikmisra",
      title: "Let's break the ice on some critical social issues, shall we?",
      description:
        "We are obsessed with attachments right from mail to life? Let's get dive into the unsent attachments."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE ON QUORA 😅"),

  talks: [
    {
      title: "I write fictional stories which motivates.",
      subtitle: "Let's read together.",
      slides_url: "https://qr.ae/py7x1r",
      event_url: "https://qr.ae/py7Dc3"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Leadership 🎙️"),
  subtitle:
    "I have been an active member of AIESEC and we aware people about the critical leadership skills that one should must have.",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.aiesec.de/podcast"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sagnikmisra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Sangy_Sagnik", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  testProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
