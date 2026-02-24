import projectsData from "@/data/projects.json";
import { ArrowUpRight, Pin } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-6 border-t border-zinc-900 pt-10">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 rounded-xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-800 transition-colors"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-zinc-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden text-zinc-600 font-medium">
              <span className="text-xl font-bold uppercase tracking-wider text-zinc-50">Coming Soon</span>
              <div className="absolute top-3 left-3 text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-sm">
                Preview
              </div>
              <div className="absolute top-3 right-3 text-zinc-500">
                 <Pin className="h-4 w-4" />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  Building
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 flex items-center text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                View Project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
