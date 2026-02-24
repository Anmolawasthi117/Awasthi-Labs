import { PageWrapper, Section } from "./components/layout/PageWrapper";
import { HeroSection } from "./components/sections/HeroSection";
import { SocialProofSection } from "./components/sections/SocialProofSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { BeyondTechSection } from "./components/sections/BeyondTechSection";
import { ArticleFeedSection } from "./components/sections/ArticleFeedSection";

function App() {
  return (
    <PageWrapper>
      <Section delay={0.1}>
        <HeroSection />
      </Section>

      {/* Dashed Separator */}
      <hr className="border-t border-dashed border-zinc-800 w-full" />

      <Section delay={0.2}>
        <SocialProofSection />
      </Section>

      <hr className="border-t border-dashed border-zinc-800 w-full" />

      <Section delay={0.3}>
        <SkillsSection />
      </Section>

      <hr className="border-t border-dashed border-zinc-800 w-full" />

      <Section delay={0.4}>
        <ProjectsSection />
      </Section>

      <hr className="border-t border-dashed border-zinc-800 w-full" />

      <Section delay={0.5}>
        <BeyondTechSection />
      </Section>

      <hr className="border-t border-dashed border-zinc-800 w-full" />

      <Section delay={0.6}>
        <ArticleFeedSection />
      </Section>
      
      {/* Footer */}
      <footer className="mt-12 py-8 text-center text-sm text-zinc-500">
        <p>Built with React & Tailwind. Design inspired by the Builder philosophy.</p>
      </footer>
    </PageWrapper>
  );
}

export default App;
