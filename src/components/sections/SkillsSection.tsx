export const SkillsSection = () => {
  const skills = [
    { name: "React" },
    { name: "Next" },
    { name: "Expo" },
    { name: "Django" },
    { name: "Express" },
    { name: "Node" },
    { name: "Bun" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "Prisma" },
    { name: "Zustand" },
    { name: "Tailwind" },
    { name: "TypeScript" },
    { name: "Python" }
  ];

  return (
    <div className="flex flex-col gap-6 border-t border-zinc-900 pt-10">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/30 text-[13px] font-medium text-zinc-300 shadow-sm"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};
