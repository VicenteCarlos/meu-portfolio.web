import { ReactElement } from "react";
import { Home } from "../pages/Home";

interface IRoutesProps {
  path: string;
  element: ReactElement;
}

export const routes: IRoutesProps[] = [
  {
    path: "/",
    element: <Home />,
  },
];
