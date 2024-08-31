import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { NavLink, Routes, Route } from "react-router-dom";

import ThemeToggler from "./components/ThemeToggler";
import Header from "./components/Header";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Projects from "./pages/projects";
import About from "./pages/about";

import Page404 from "./pages/404";

export default function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`bg-background font-[Inter] text-text theme-${theme}`}>
      <ThemeToggler theme={theme} setTheme={setTheme} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<About />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
