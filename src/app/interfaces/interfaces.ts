export interface IHeader {
  title: string;
  links: { link1: string; link2: string; link3: string; link4: string };
}

export interface IWelcomeText {
  title: string;
  content: string;
  buttons: { text1: string; text2: string };
}

export interface IWelcomeImages {
  name: string;
  type: string;
  image: string;
}

export interface IFeatures {
  title: string;
  request: string;
  details: { box1: string; box2: string; box3: string; box4: string };
  text: string;
  buttonText: string;
}

export interface IProjectsIntroduction {
  title: string;
  subtitle: string;
  features: { box1: string; box2: string; box3: string; box4: string };
  strapline: string;
  buttons: { text1: string; text2: string; text3: string; text4: string };
}

export interface IProject {
  name: string;
  type: string;
  image: string;
}

export interface IProfile {
  image: string;
  highlight: { text1: string; text2: string; text3: string; text4: string };
  professional: string;
  experiences: { text1: string; text2: string; text3: string; text4: string };
  leisure: string;
  buttonText: string;
}

export interface IContact {
  title: string;
  question: string;
  name: string;
  email: string;
  message: string;
  buttonText: string;
  placeholderText: { name: string; email: string; message: string };
}
