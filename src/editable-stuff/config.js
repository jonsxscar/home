// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#0d6efd, #484c67, #f72e75",
  firstName: "Jonnathan",
  middleName: "",
  lastName: "Scarpetta",
  message: " Passionate about programming and technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jonsxscar",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/jscarpetta2/",
    },
/*     {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    }, */
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jonnathan-scarpetta-burgos/",
    },
/*     {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    }, */
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jonnathan.png"),
  imageSize: 375,
  message:
    "My name is Jonnathan Scarpetta. Passionate about technology, science, and innovation. I am a highly adaptable and versatile individual who can perform effectively both in team settings and independently. I have received training as a full-stack developer. I am enthusiastic about contributing to and growing in the field of technology, and I am eager to take on new challenges that will enable me to continue my professional development.",
  resume: "https://drive.google.com/file/d/1NfdG4QjaDZSxemOLoRIYlKG0JCPxYZAS/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jonsxscar", 
  reposLength: 0,
  specificRepos: ["inmuebles360","Pokemon_PI","rick_and_mortyone" ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/jonnathan.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/jonnathan.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 85 },
    { name: "React.js", value: 85 },
    { name: "Redux", value: 75 },
    { name: "SQL", value: 70 },
    { name: "MongoDB", value: 70 },
    { name: "HTML/CSS", value: 95 },
    { name: "Node.js", value: 80 },
    { name: "Express", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time FullStack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jonsxscar@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Bootcamp-SoyHenry',
      companylogo: require('../assets/img/soyhenry.png'),
      date: 'February 2023 – november 2023',
    },
/*     {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    }, */
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };