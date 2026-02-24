import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-24 flex flex-col gap-16 md:gap-24">
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
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`flex flex-col gap-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};
