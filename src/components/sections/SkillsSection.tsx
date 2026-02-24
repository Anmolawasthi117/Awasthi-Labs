export const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "C++",
    "Tailwind CSS",
    "Framer Motion",
    "Docker",
    "LangChain",
    "PostgreSQL",
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium tracking-tight text-zinc-50">
        The Arsenal
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-300 shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
