"use client";

import { motion } from "framer-motion";

interface VisualBreakProps {
  height?: "small" | "medium" | "large";
  gradientFrom?: string;
  gradientTo?: string;
}

export default function VisualBreak({}: VisualBreakProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-br from-[#191726] via-deep-secondary to-[#191726]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-150 h-150 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #FF8800 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-125 h-125 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #6D7CFF 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Dipercaya oleh{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-warm to-[#ffb347]">
              Berbagai Bisnis
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Membantu bisnis lokal dan startup berkembang dengan solusi digital
            yang tepat
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              ⚡
            </div>
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              48 Jam
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Rata-rata waktu response & revisi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              100%
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Proyek selesai tepat waktu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💼
            </div>
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              5+
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Tahun pengalaman di industri
            </p>
          </motion.div>
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl">
            <svg
              className="w-12 h-12 text-accent-warm/30 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-6">
              "Kerjasama yang profesional dan hasil yang memuaskan. Ridho sangat
              memahami kebutuhan kami dan memberikan solusi yang tepat."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-warm to-accent-hover" />
              <div className="text-left">
                <p className="text-white font-semibold">Client Testimony</p>
                <p className="text-gray-400 text-sm">Business Owner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
