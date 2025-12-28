"use client";

import { motion } from "framer-motion";

// Pattern A: Text + Ambient Visual
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative overflow-hidden">
      {/* Ambient Visual Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-bg/30 to-white">
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #FF8800 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, #2D2945 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full text-center py-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-primary mb-6 leading-tight"
        >
          Membantu bisnis tampil profesional dan siap bertumbuh secara digital.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Website, landing page, dan produk digital yang rapi, cepat, dan mudah
          dipercaya pelanggan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent-warm rounded-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm hover:shadow-md w-full sm:w-auto focus-visible:outline-accent-warm"
          >
            Diskusi Singkat via WhatsApp
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-deep-primary bg-white border-2 border-deep-primary rounded-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] w-full sm:w-auto focus-visible:outline-deep-primary"
          >
            Lihat Contoh Pekerjaan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
