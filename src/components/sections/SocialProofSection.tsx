import { GitHubCalendar } from "react-github-calendar";
import { Github, Linkedin, Twitter, Code2, Link } from "lucide-react";
import profileData from "@/data/profile.json";

const socialLinks = [
  { icon: Github, href: profileData.socials?.github || "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: profileData.socials?.linkedin || "https://linkedin.com", label: "LinkedIn" },
  { icon: Link, href: "https://medium.com", label: "Medium" },
  { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
  { icon: Link, href: "#", label: "More" },
];

export const SocialProofSection = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-sm font-medium text-zinc-100">Here are my socials</h2>
      
      {/* Social Pills */}
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-[13px] font-medium text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
            >
              <Icon className="h-3.5 w-3.5" />
              {link.label}
            </a>
          );
        })}
      </div>

      {/* GitHub Graph */}
      <div className="w-full mt-2 overflow-hidden text-zinc-400 flex items-center">
        <div className="w-full overflow-x-auto pb-4 -mb-4 snap-x">
          <div className="min-w-fit pr-4">
            <GitHubCalendar
              username="anmolawasthi117" // Using user's GitHub username
              blockSize={11}
              blockMargin={4}
              colorScheme="dark"
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
