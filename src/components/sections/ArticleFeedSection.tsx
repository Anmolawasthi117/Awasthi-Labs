import { ArrowUpRight, CalendarDays, Eye } from "lucide-react";

export const ArticleFeedSection = () => {
  const articles = [
    {
      id: "1",
      title: "My GSOC Journey: The 2-Month Sprint from Doubt to Done",
      date: "Jun 2025",
      views: "340",
      tags: ["GSOC", "Open Source"],
      link: "#",
    },
    {
      id: "2",
      title: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
      date: "Feb 2025",
      views: "52",
      tags: ["Authentication", "TypeScript", "MongoDB"],
      link: "#",
    },
    {
      id: "3",
      title: "Docker with Node.js & Express.js — Basics.",
      date: "Feb 2025",
      views: "20",
      tags: ["Docker", "Node.js", "Express.js"],
      link: "#",
    }
  ];

  return (
    <div className="flex flex-col gap-6 border-t border-zinc-900 pt-10">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
        Blogs
      </h2>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/50 transition-all gap-2 relative"
          >
            <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-zinc-400 transition-colors">
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <h3 className="font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors pr-8">
              {article.title}
            </h3>
            
            <div className="flex items-center gap-1 text-xs text-zinc-500 mb-2 mt-1">
              <CalendarDays className="h-3 w-3" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                 <Eye className="h-3.5 w-3.5" />
                 {article.views}
              </div>
              <div className="flex gap-2 flex-wrap">
                 {article.tags.map(tag => (
                   <span key={tag} className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="flex justify-center mt-2">
         <button className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 border border-zinc-800">
            View All <ArrowUpRight className="h-4 w-4" />
         </button>
      </div>
    </div>
  );
};
