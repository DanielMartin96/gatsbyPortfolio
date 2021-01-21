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
  subtitle: 'JS/React Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
