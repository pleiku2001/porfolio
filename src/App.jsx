import React, { useRef } from "react";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (

      <div className="relative z-0  bg-mix-color overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </div>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
