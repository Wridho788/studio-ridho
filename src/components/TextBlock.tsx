"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextBlockProps {
  title?: string;
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  centered?: boolean;
}

export default function TextBlock({
  title,
  children,
  maxWidth = "lg",
  centered = false,
}: TextBlockProps) {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} ${centered ? "mx-auto text-center" : ""}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-semibold text-deep-primary mb-8 leading-tight"
        >
          {title}
        </motion.h2>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-base md:text-lg text-text-secondary leading-relaxed space-y-6"
      >
        {children}
      </motion.div>
    </div>
  );
}
