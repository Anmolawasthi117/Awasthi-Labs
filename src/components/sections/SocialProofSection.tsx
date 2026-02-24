import { GitHubCalendar } from "react-github-calendar";
import { Github, Linkedin, Twitter, Code2 } from "lucide-react";
import profileData from "@/data/profile.json";

const socialLinks = [
  { icon: Github, href: profileData.socials?.github || "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: profileData.socials?.linkedin || "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
];

export const SocialProofSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Social Pills */}
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </a>
          );
        })}
      </div>

      {/* GitHub Graph */}
      <div className="w-full border border-dashed border-zinc-800 rounded-xl p-6 bg-zinc-900/20 overflow-x-auto">
        <GitHubCalendar
          username="yourusername" // Placeholder until real one is provided
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          fontSize={12}
        />
      </div>
    </div>
  );
};
