import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import ProjectsPage from "../pages/ProjectsPage";
import BlogPage from "../pages/BlogPage";
import CVPage from "../pages/CVPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CVPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
