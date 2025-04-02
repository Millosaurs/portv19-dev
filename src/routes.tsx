import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
