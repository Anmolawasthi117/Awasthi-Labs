import { PageWrapper, Section } from "./components/layout/PageWrapper";
import { ProfileSection } from "./components/sections/ProfileSection";
import { ExperiencesSection } from "./components/sections/ExperiencesSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ArticleFeedSection } from "./components/sections/ArticleFeedSection";
import { NewsletterSection } from "./components/sections/NewsletterSection";
import { QuoteSection } from "./components/sections/QuoteSection";
import { ArrowUp } from "lucide-react";

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <PageWrapper>
      <Section crosshair className="h-32 md:h-56" delay={0}>
        {null}
      </Section>
      
      <Section delay={0.1}>
        <ProfileSection />
      </Section>

      <Section delay={0.2}>
        <div className="p-6 md:p-10">
          <ExperiencesSection />
        </div>
      </Section>

      <Section delay={0.3} bottomLabel="View All">
        <div className="p-6 md:p-10">
          <ProjectsSection />
        </div>
      </Section>

      <Section delay={0.4} bottomLabel="View All">
        <div className="p-6 md:p-10">
          <ArticleFeedSection />
        </div>
      </Section>

      <Section delay={0.5}>
        <div className="p-6 md:p-10">
          <SkillsSection />
        </div>
      </Section>

      <Section delay={0.6}>
        <NewsletterSection />
      </Section>

      <Section delay={0.7}>
        <QuoteSection />
      </Section>

      <Section crosshair className="h-40 md:h-72" delay={0.8}>
        <div className="absolute bottom-8 right-6 md:-right-20">
          <button 
            onClick={scrollToTop} 
            className="p-3 bg-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors shadow-sm"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </Section>
      
      <footer className="w-full flex justify-center py-6 relative z-10 bg-[#0a0a0a]">
        <div className="w-full max-w-3xl px-6 flex justify-center text-xs text-zinc-600 font-medium">
             2026 © Built with React & Tailwind.
        </div>
      </footer>
    </PageWrapper>
  );
}

export default App;
