"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MediaBlockProps {
  layoutVariant: "B" | "C"; // B = Media Left, C = Text Left
  imageSrc: string;
  imageAlt: string;
  title: string;
  children: ReactNode;
  imageWidth?: number;
  imageHeight?: number;
}

export default function MediaBlock({
  layoutVariant,
  imageSrc,
  imageAlt,
  title,
  children,
  imageWidth = 600,
  imageHeight = 450,
}: MediaBlockProps) {
  const isMediaLeft = layoutVariant === "B";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Image Block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${isMediaLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-neutral-bg/30">
          <div className="aspect-[4/3] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {/* Subtle overlay for consistency */}
            <div className="absolute inset-0 bg-deep-primary/[0.03] pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${isMediaLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-deep-primary mb-6 leading-tight">
          {title}
        </h3>
        <div className="text-base md:text-lg text-text-secondary leading-relaxed space-y-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
