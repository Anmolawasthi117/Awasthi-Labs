import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ArticleFeedSection = () => {
  // Placeholder data for Medium articles
  const articles = [
    {
      id: "1",
      title: "Building Offline-First Architectures in React",
      date: "Oct 12, 2023",
      link: "#",
    },
    {
      id: "2",
      title: "The Subtle Art of Micro-Interactions",
      date: "Nov 5, 2023",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium tracking-tight text-zinc-50">
        The Feed
      </h2>
      <div className="flex flex-col border border-dashed border-zinc-800 rounded-xl overflow-hidden">
        {articles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-zinc-900/20 hover:bg-zinc-800/40 transition-colors gap-2 
              ${index !== articles.length - 1 ? "border-b border-dashed border-zinc-800" : ""}
            `}
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                {article.title}
              </h3>
              <span className="text-sm text-zinc-500">{article.date}</span>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 shrink-0" />
          </motion.a>
        ))}
        {articles.length === 0 && (
          <div className="p-6 text-center text-zinc-500 text-sm">
            Fetching latest articles...
          </div>
        )}
      </div>
    </div>
  );
};
