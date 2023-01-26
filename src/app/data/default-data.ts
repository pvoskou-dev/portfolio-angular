import {
  IContact,
  IFeatures,
  IHeader,
  IProfile,
  IProject,
  IProjectsIntroduction,
  IWelcomeImages,
  IWelcomeText,
} from "../interfaces/interfaces";

export const headerData: IHeader = {
  title: "Portfolio",
  links: {
    link1: "home",
    link2: "Projects",
    link3: "Profile",
    link4: "Contact",
  },
};

export const welcomeText: IWelcomeText = {
  title: "Take your team to the next level.",
  content:
    "Take your team to the next level by employing this great front-end developer. The perfect practice is to copy others websites and learn from them. Why not take a look at my projects?",
  buttons: { text1: "View Projects", text2: "Learn More" },
};

export const welcomeImages: IWelcomeImages[] = [
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee And Food Site",
    type: "angular",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Food Site",
    type: "react",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee Component",
    type: "component",
  },
];

export const featuresData: IFeatures = {
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  request: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  details: {
    box1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cupiditate excepturi enim nemo ipsum, eligendi vero veniam!",
  buttonText: "Contact Me",
};

export const projectsIntroductionData: IProjectsIntroduction = {
  title: "Projects",
  subtitle: "Copies and Original designs",
  features: {
    box1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    box4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  strapline: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  buttons: {
    text1: "View All",
    text2: "Angular",
    text3: "React",
    text4: "Components",
  },
};
export const projectsData: IProject[] = [
  {
    name: "ableton",
    type: "Angular",
    image: "./assets/images/ableton/ableton.png",
  },
  { image: "./assets/images/coffee.jpg", name: "Coffee Site", type: "angular" },
  {
    image: "./assets/images/coffee.jpg",
    name: "React Coffee Site",
    type: "react",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee And Food Site",
    type: "angular",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee Component",
    type: "component",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee Cup Component",
    type: "component",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "React Coffee Cup Site",
    type: "react",
  },
  { image: "./assets/images/coffee.jpg", name: "Coffee Site", type: "angular" },
  {
    image: "./assets/images/coffee.jpg",
    name: "React Coffee Site",
    type: "react",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee And Food Site",
    type: "angular",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee Component",
    type: "component",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "Coffee Cup Component",
    type: "component",
  },
  {
    image: "./assets/images/coffee.jpg",
    name: "React Coffee Cup Site",
    type: "react",
  },
];

export const profileData: IProfile = {
  image: "./assets/images/coffee.jpg",
  highlight: {
    text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  professional:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cupiditate excepturi enim nemo ipsum, eligendi vero veniam!",
  experiences: {
    text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  leisure:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cupiditate excepturi enim nemo ipsum, eligendi vero veniam!",
  buttonText: "Contact Me",
};

export const contactData: IContact = {
  title: "Contact Me",
  question: "Are you interested in working together?",
  name: "Name",
  email: "Email",
  message: "Message",
  buttonText: "Submit",
  placeholderText: {
    name: "Name",
    email: "email@website.com",
    message: "What would you like to say?",
  },
};
