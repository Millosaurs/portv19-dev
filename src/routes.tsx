import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import StoreItemDetail from "./pages/StoreItemDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
      { path: "/store/:itemId", element: <StoreItemDetail /> },
      { path: "/store", element: <Store /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
