import { PageWrapper, Section } from "./components/layout/PageWrapper";
import { GithubCard } from "./components/dynamic/GithubCard";
import { SpotifyCard } from "./components/dynamic/SpotifyCard";
import { MediumCard } from "./components/dynamic/MediumCard";
import { HeroSection } from "./components/sections/HeroSection";
import { SocialProofSection } from "./components/sections/SocialProofSection";
import { ExperiencesSection } from "./components/sections/ExperiencesSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ArticleFeedSection } from "./components/sections/ArticleFeedSection";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-12 md:gap-20">
        <Section>
          <HeroSection />
        </Section>
        
        <Section delay={0.1}>
          <SocialProofSection />
        </Section>

        <Section delay={0.2}>
          <ExperiencesSection />
        </Section>

        <Section delay={0.3}>
          <ProjectsSection />
        </Section>

        <Section delay={0.4}>
          <ArticleFeedSection />
        </Section>

        <Section delay={0.5}>
          <SkillsSection />
        </Section>

        <Section delay={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-zinc-900">
            <SpotifyCard />
            <GithubCard username="anmolawasthi117" />
            <MediumCard username="anmolawasthi117" />
          </div>
        </Section>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-500">
        <p>Built with React & Tailwind. Design inspired by minimalism.</p>
      </footer>
    </PageWrapper>
  );
}

export default App;
