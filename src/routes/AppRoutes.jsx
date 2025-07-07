import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../Layout";
import ProjectsPage from "../pages/ProjectsPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage/";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/cv" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
