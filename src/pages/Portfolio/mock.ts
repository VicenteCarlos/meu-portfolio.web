export interface IProject {
  image: string;
  url: string;
  github: string;
  background: string;
}

export const projects: IProject[] = [
  {
    image: "../../../public/assets/svg/dashgo.svg",
    url: "https://dashgo-web02.vercel.app/",
    github: "https://github.com/VicenteCarlos/dashgo.web",
    background: "../../../public/assets/img/dev.gif",
  },
  {
    image: "../../../public/assets/svg/githubapi.svg",
    url: "https://search-users-eight.vercel.app/",
    github: "https://github.com/VicenteCarlos/search-users",
    background: "../../../public/assets/img/git.gif",
  },
  {
    image: "../../../public/assets/svg/ricky.svg",
    url: "https://ricky-and-morty-web-nine.vercel.app/",
    github: "https://github.com/VicenteCarlos/ricky-and-morty.web",
    background: "../../../public/assets/img/ricky.gif",
  },
];
