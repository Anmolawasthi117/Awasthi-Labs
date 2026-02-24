import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";
import profileData from "@/data/profile.json";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 rounded-xl bg-zinc-800 overflow-hidden border border-zinc-700 shadow-sm">
          <img
            src="https://avatars.githubusercontent.com/u/101416301?v=4" // GitHub Avatar
            alt={profileData.name}
            className="h-full w-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
            {profileData.name}
          </h1>
          <p className="text-zinc-500 text-sm">
            Software Engineer
          </p>
        </div>
      </div>

      <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
        Hey, I'm {profileData.name.split(" ")[0]}, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.
        <br/><br/>
        Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and tools. I'm always open for new opportunities to learn and grow.
      </p>

      <div className="flex items-center gap-3 pt-2">
        <Button
          className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all font-medium text-sm h-9 px-4 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book an intro call
        </Button>
        <Button
          variant="outline"
          className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50 transition-all font-medium text-sm h-9 px-4 rounded-md"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send an email
        </Button>
      </div>
    </div>
  );
};
