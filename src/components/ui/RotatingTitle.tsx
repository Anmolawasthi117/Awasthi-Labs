import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTitleProps {
  titles: string[];
}

export const RotatingTitle = ({ titles }: RotatingTitleProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!titles || titles.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles]);

  if (!titles || titles.length === 0) return null;

  return (
    <span className="inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
