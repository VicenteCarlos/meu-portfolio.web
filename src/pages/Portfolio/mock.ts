export interface IProject {
  image: string;
  url: string;
  github: string;
  background: string;
}

export const projects: IProject[] = [
  {
    image: "/assets/svg/dashgo.svg",
    url: "https://dashgo-web02.vercel.app/",
    github: "https://github.com/VicenteCarlos/dashgo.web",
    background: "/assets/img/dev.gif",
  },
  {
    image: "/assets/svg/githubapi.svg",
    url: "https://search-users-eight.vercel.app/",
    github: "https://github.com/VicenteCarlos/search-users",
    background: "/assets/img/git.gif",
  },
  {
    image: "/assets/svg/ricky.svg",
    url: "https://ricky-and-morty-web-nine.vercel.app/",
    github: "https://github.com/VicenteCarlos/ricky-and-morty.web",
    background: "/assets/img/ricky.gif",
  },
];
