import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type NotebookPageProps = {
  id: string;
  children: ReactNode;
  /** Whether to play the page-fold animation when scrolled into view. */
  fold?: boolean;
  className?: string;
};

const NotebookPage = ({ id, children, fold = true, className = "" }: NotebookPageProps) => {
  const reduceMotion = useReducedMotion();
  const animate = fold && !reduceMotion;

  return (
    <motion.section
      id={id}
      className={`notebook-page ${className}`}
      initial={animate ? { opacity: 0, y: 70, rotateX: 9 } : false}
      whileInView={animate ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      style={{ transformPerspective: 1500, transformOrigin: "top center" }}
    >
      {/* Faint shared doodle layer to keep the notebook theme consistent */}
      <div className="notebook-doodles" aria-hidden="true" />
      <div className="notebook-content">{children}</div>
    </motion.section>
  );
};

export default NotebookPage;
