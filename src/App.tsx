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
      <div className="flex flex-col">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotifyCard />
            <GithubCard username="anmolawasthi117" />
            <MediumCard username="anmolawasthi117" />
          </div>
        </Section>
      </div>
      
      {/* Footer */}
      <footer className="w-full border-b border-dashed border-zinc-800/40 flex justify-center pb-8 pt-20">
        <div className="w-full max-w-3xl px-6 flex flex-col items-center gap-16 text-center text-zinc-500">
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-zinc-800">
               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
             </svg>
             <p className="text-zinc-200 font-medium italic text-xl leading-relaxed">
               "Do so much work that it would be unreasonable for you to not be successful."
             </p>
             <p className="text-zinc-500 text-xs tracking-[0.2em] font-medium uppercase">— ALEX HORMOZI</p>
          </div>
          
          <div className="w-full text-xs text-zinc-600 font-medium">
             2026 © Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </PageWrapper>
  );
}

export default App;
