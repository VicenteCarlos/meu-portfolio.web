import { ReactElement } from "react";
import { Home } from "../pages/Home";
import { Portfolio } from "@/pages/Portfolio";

interface IRoutesProps {
  path: string;
  element: ReactElement;
}

export const routes: IRoutesProps[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
];
