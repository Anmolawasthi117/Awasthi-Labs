import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-zinc-50 font-sans selection:bg-zinc-800 relative">
      <div className="fixed inset-0 flex justify-center pointer-events-none z-0">
        <div className="w-full max-w-3xl border-x border-dashed border-zinc-800/40 h-full"></div>
      </div>
      <div className="relative z-10 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const Section = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div className="w-full border-b border-dashed border-zinc-800/40 flex justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={`w-full max-w-3xl px-6 py-12 flex flex-col gap-6 ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
};
