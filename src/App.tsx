import { PageWrapper, Section } from "./components/layout/PageWrapper";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage").then(module => ({ default: module.ProjectsPage })));

function App() {
  return (
    <PageWrapper>
      <Suspense fallback={<div className="min-h-screen w-full bg-[#0a0a0a]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
      
      <footer className="w-full flex justify-center py-6 relative z-10 bg-[#0a0a0a]">
        <div className="w-full max-w-3xl px-6 flex justify-center text-xs text-zinc-600 font-medium">
             2026 © Built with React & Tailwind.
        </div>
      </footer>
    </PageWrapper>
  );
}

export default App;
