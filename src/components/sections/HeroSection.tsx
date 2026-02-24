import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profileData from "@/data/profile.json";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profileData.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4" // Placeholder
            alt={profileData.name}
            className="h-full w-full object-cover grayscale opacity-90"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium tracking-tight text-zinc-50">
            {profileData.name}
          </h1>
          <div className="h-6 overflow-hidden relative w-64">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-zinc-400 absolute"
              >
                {profileData.rotatingTitles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="text-zinc-400 leading-relaxed max-w-2xl">
        {profileData.bio}
      </p>

      <div className="flex items-center gap-4 pt-4">
        <Button
          className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] font-medium"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book an intro call
        </Button>
        <Button
          variant="outline"
          className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50 transition-all font-medium"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send an email
        </Button>
      </div>
    </div>
  );
};
