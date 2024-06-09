import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/portfolio/home" element={<Home />} />
        <Route exact path="/portfolio/about" element={<About />} />
        <Route exact path="/portfolio/projects" element={<Projects />} />
        <Route exact path="/portfolio/docs" element={<Docs />} />
        <Route exact path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
