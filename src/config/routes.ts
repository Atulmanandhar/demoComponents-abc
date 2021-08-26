import IRoute from "../interfaces/routes";
import { Home, Components, WebCamScreen } from "../pages";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    commponent: Home,
    exact: true,
  },
  {
    path: "/components",
    name: "Components Page",
    commponent: Components,
    exact: true,
  },
  {
    path: "/webcam",
    name: "Webcam Page",
    commponent: WebCamScreen,
    exact: true,
  },
];

export default routes;
