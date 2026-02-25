import projectsData from "@/data/projects.json";
import { ArrowUpRight, Pin } from "lucide-react";
import { useState } from "react";

interface ProjectsSectionProps {
  limit?: number;
}

export const ProjectsSection = ({ limit }: ProjectsSectionProps) => {
  const displayProjects = limit ? projectsData.slice(0, limit) : projectsData;
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex flex-col p-4 rounded-xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-800 transition-colors"
          >
            {/* Media Area */}
            <div className="w-full h-40 bg-zinc-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden text-zinc-600 font-medium border border-zinc-800/50">
              {project.coverImage ? (
                 <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: hoveredId === project.id && project.video ? 0 : 1 }} />
              ) : (
                 <span className="text-xl font-bold uppercase tracking-wider text-zinc-50 opacity-20">No Image</span>
              )}
              
              {project.video && (
                <video 
                  src={project.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}
                />
              )}

              <div className="absolute top-3 left-3 text-[10px] bg-zinc-950/80 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 px-2 py-0.5 rounded uppercase font-semibold">
                Project
              </div>
              <div className="absolute top-3 right-3 text-zinc-300 bg-zinc-950/80 backdrop-blur-sm rounded-full p-1 border border-zinc-700/50">
                 <Pin className="h-3 w-3" />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Live
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
