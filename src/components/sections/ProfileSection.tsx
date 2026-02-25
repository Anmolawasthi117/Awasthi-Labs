import { useState, useEffect } from "react";
import profileData from "@/data/profile.json";
import {  Mail, Eye, Github, Linkedin, Twitter, Code2, Link } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { RotatingTitle } from "@/components/ui/RotatingTitle";

const socialLinks = [
  { icon: Github, href: profileData.socials?.github || "https://github.com", label: "GitHub" },
  { icon: Twitter, href: profileData.socials?.x || "https://twitter.com", label: "X (Twitter)" },
  { icon: Linkedin, href: profileData.socials?.linkedin || "https://linkedin.com", label: "LinkedIn" },
  { icon: Link, href: profileData.socials?.medium || "https://medium.com", label: "Medium" },
  { icon: Code2, href: profileData.socials?.leetcode || "https://leetcode.com", label: "LeetCode" }
];

export const ProfileSection = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/view")
      .then(res => res.json())
      .then(data => setViews(data.count ?? data.views))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-10 p-6 md:p-10">
      {/* Top Header info */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4 items-center">
           <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-sm">
              <img src="/assets/anmol.jpeg" alt={profileData.name} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all" />
              <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full border border-zinc-900 bg-zinc-500"></div>
           </div>
           <div className="flex flex-col gap-0.5">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full border border-zinc-400 bg-transparent"></div>
               <h1 className="text-xl md:text-2xl font-semibold text-zinc-100">{profileData.name}</h1>
             </div>
             <div className="text-sm text-zinc-500 min-h-[20px]">
               <RotatingTitle titles={profileData.rotatingTitles} />
             </div>
           </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
           <Eye className="w-3.5 h-3.5" /> {typeof views === "number" ? views.toLocaleString() : "..."}
        </div>
      </div>

      {/* Bio */}
      <div className="text-[15px] leading-relaxed text-zinc-300 space-y-5">
        <p>Hey, I'm {profileData.name.split(" ")[0]}, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.</p>
        <p>Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and tools. I'm always open for new opportunities to learn and grow.</p>
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <motion.a 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="https://drive.google.com/file/d/1pQlA-My484vv36pXBBQ4eY7sNm4g-BMu/view" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-200 text-zinc-900 font-medium text-[13px] shadow-sm cursor-pointer whitespace-nowrap"
        >
           <Link className="w-4 h-4" /> View Resume
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${profileData.socials?.email || "anmolawasthi117@gmail.com"}`}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-medium text-[13px] hover:bg-zinc-800 transition-colors cursor-pointer whitespace-nowrap"
        >
           <Mail className="w-4 h-4" /> Send an email
        </motion.a>
      </div>

      {/* Socials & GitHub */}
      <div className="flex flex-col gap-4 mt-2">
         <h2 className="text-sm font-medium text-zinc-100">Here are my socials</h2>
         <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-[13px] font-medium text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </motion.a>
              );
            })}
         </div>

         {/* GitHub Graph */}
         <div className="w-full mt-4 overflow-x-auto custom-scrollbar pb-2">
           <div className="min-w-max pr-4 text-zinc-400">
             <GitHubCalendar
               username="anmolawasthi117"
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
