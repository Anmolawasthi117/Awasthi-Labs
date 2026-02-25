import { Section } from "@/components/layout/PageWrapper";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArticleFeedSection } from "@/components/sections/ArticleFeedSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SpotifyCard } from "@/components/dynamic/SpotifyCard";
import { GithubCard } from "@/components/dynamic/GithubCard";
import { MediumCard } from "@/components/dynamic/MediumCard";
import { ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  return (
    <>
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

      <Section delay={0.3} bottomLabel="View All" onBottomLabelClick={() => navigate("/projects")}>
        <div className="p-6 md:p-10">
          <ProjectsSection limit={4} />
        </div>
      </Section>

      <Section delay={0.4} bottomLabel="View All" onBottomLabelClick={() => window.open(import.meta.env.VITE_MEDIUM_URL || "https://medium.com/@anmolawasthi117", "_blank")}>
        <div className="p-6 md:p-10">
          <ArticleFeedSection limit={4} />
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
        <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotifyCard />
          <GithubCard username="anmolawasthi117" />
          <MediumCard username="anmolawasthi117" />
        </div>
      </Section>

      <Section delay={0.8}>
        <QuoteSection />
      </Section>

      <Section crosshair className="h-40 md:h-72" delay={0.9}>
        <div className="absolute bottom-8 right-6 md:-right-20 z-20">
          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </Section>
    </>
  );
};
