import projectsData from "@/data/projects.json";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium tracking-tight text-zinc-50">
        The Build Log
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            className="group flex flex-col justify-between p-6 h-48 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-zinc-100">{project.title}</h3>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
