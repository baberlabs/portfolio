import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/docs" element={<Docs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
