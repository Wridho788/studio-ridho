"use client";

import { motion } from "framer-motion";

interface VisualBreakProps {
  height?: "small" | "medium" | "large";
  gradientFrom?: string;
  gradientTo?: string;
}

export default function VisualBreak({
  height = "medium",
  gradientFrom = "#191726",
  gradientTo = "#2D2945",
}: VisualBreakProps) {
  const heightClasses = {
    small: "h-[30vh]",
    medium: "h-[50vh]",
    large: "h-[60vh]",
  };

  return (
    <div className={`w-full ${heightClasses[height]} relative overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        }}
      >
        {/* Ambient shapes */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #FF8800 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #6D7CFF 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}
