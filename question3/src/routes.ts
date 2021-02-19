import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
}

export const appRoutes: IRoute[] = [
  { name: "Home", path: "/", exact: true, component: Home },
  {
    name: "Home",
    path: "/book/:type/:key",
    exact: true,
    component: BookDetails,
  },
];
