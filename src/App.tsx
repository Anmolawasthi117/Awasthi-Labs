import { PageWrapper, Section } from "./components/layout/PageWrapper";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      
      <footer className="w-full flex justify-center py-6 relative z-10 bg-[#0a0a0a]">
        <div className="w-full max-w-3xl px-6 flex justify-center text-xs text-zinc-600 font-medium">
             2026 © Built with React & Tailwind.
        </div>
      </footer>
    </PageWrapper>
  );
}

export default App;
