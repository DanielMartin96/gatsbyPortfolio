import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Martin | Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Daniel Martin',
  subtitle: 'Junior Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Daniel Martin is a self-taught developer, with lots of experience building personal projects and graded projects for his JavaScript tech degree. Daniel is fueled by his massive passion for technology and websites, and loves the idea that you will never know everything in web development - liking the idea of being a "forever student". Daniel always finds himself on youtube researching new ways to write applications, and more efficient ways to write code.',
  paragraphTwo:
    'Daniel is currently unemployed due to losing his job to COVID. But he thinks this was actually a good thing, as it allowed for him to specialise in an industry perfect for him. He is looking for an opportunity as a junior developer. The most important thing for Daniel is mentorship, he wants to be taught by amazing developers who will show him all the best practices.',
  paragraphThree:
    'Daniel expecially loves React and the MERN stack, so would love any opportunity in that area.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQkl803F4gcW-rgWySaScnzPx9wnN-7ystR1JYr9eMegKzdkekG-S61xHygOXbueuIBJ2kyJucMHubu/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'ClubsMan',
    info:
      'ClubsMan is an application built using the MERN stack and lifecycle methods. It allows users to sign up, log in, change their settings and delete their account. Im a massive fan of football, and this application allows you to track your favourite premiership team with use of a API from rapid-api. Everytime a component is rendered or the information in redux is changed, a new request using axios is made to the relavant endpoints. You can see the technologies used in the client package.json and the server package.json. ',
    info2: '',
    url: 'https://pacific-ocean-23430.herokuapp.com/',
    repo: 'https://github.com/DanielMartin96/ClubsMan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'recruitme',
    info:
      'recruitme is a recruitment website built using the MERN stack and react hooks. It allows users to sign up, create, edit and delete job postings. Only the user that has created the posting are able to edit and delete that posting, meaning no other user has access to these functions.',
    info2: '',
    url: 'https://still-hollows-20508.herokuapp.com/',
    repo: 'https://github.com/DanielMartin96/recruitme', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'Bristol Fencing and Decking',
    info:
      'This is actually the first website I had ever built using plain HTML, CSS and a tiny amount of JS for the burger bar (10 lines!). Its not finished yet as the client did not need it finished at the time, but I believe it shows all the things needed to building a mobile responsive website. I also added google analytics to this website and hosted it myself.',
    info2: '',
    url: 'https://www.bristolfencinganddecking.co.uk/index.html',
    repo: 'https://github.com/DanielMartin96/Bristol-Fencing-and-Decking-Responsive', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'danielmartin1996@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-martin-025756137/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DanielMartin96/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
