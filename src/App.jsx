import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { NavLink, Routes, Route } from "react-router-dom";

import ThemeToggler from "./components/ThemeToggler";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";

export default function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`bg-background text-text font-[Inter] theme-${theme}`}>
      {/* <div className=""> */}
      {/* <div className="bg z-0 min-h-screen w-full">hello</div> */}
      <ThemeToggler theme={theme} setTheme={setTheme} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
