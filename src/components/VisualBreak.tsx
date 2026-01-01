"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface VisualBreakProps {
  height?: "small" | "medium" | "large";
  gradientFrom?: string;
  gradientTo?: string;
}

const testimonials = [
  {
    quote: "Kerjasama yang profesional dan hasil yang memuaskan. Ridho sangat memahami kebutuhan kami dan memberikan solusi yang tepat.",
    name: "Ahmad Syarif",
    position: "CEO",
    company: "PT Digital Maju Bersama"
  },
  {
    quote: "Proses kerja yang rapi dan komunikasi yang sangat baik. Website kami selesai tepat waktu dengan kualitas yang melebihi ekspektasi.",
    name: "Siti Nurhaliza",
    position: "Marketing Director",
    company: "Toko Online Sejahtera"
  },
  {
    quote: "Sangat puas dengan hasilnya! Dashboard yang dibuat sangat membantu dalam mengelola bisnis kami sehari-hari.",
    name: "Budi Santoso",
    position: "Operations Manager",
    company: "UMKM Berkah Jaya"
  },
  {
    quote: "Ridho tidak hanya mengerjakan proyek, tapi juga memberikan saran dan insight yang valuable untuk bisnis kami.",
    name: "Linda Wijaya",
    position: "Founder",
    company: "Startup Inovasi Digital"
  },
  {
    quote: "Landing page yang dibuat sangat menarik dan efektif. Conversion rate kami meningkat signifikan setelah launch.",
    name: "Eko Prasetyo",
    position: "Business Development",
    company: "CV Mitra Sejahtera"
  }
];

export default function VisualBreak({}: VisualBreakProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#191726] via-deep-secondary to-[#191726]">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Dipercaya oleh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-warm to-[#ffb347]">
              Berbagai Bisnis
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Membantu bisnis lokal dan startup berkembang dengan solusi digital
            yang tepat
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              ⚡
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              24 Jam
            </div>
            <p className="text-xs md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
              Rata-rata waktu response & revisi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              100%
            </div>
            <p className="text-xs md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
              Proyek selesai tepat waktu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:bg-white/10 hover:border-accent-warm/30 transition-all duration-300 hover:scale-105 col-span-2 md:col-span-1"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              💼
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">
              5+
            </div>
            <p className="text-xs md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
              Tahun pengalaman di industri
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="relative inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 max-w-3xl w-full">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-accent-warm/30 mx-auto mb-4 md:mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base md:text-xl text-gray-300 italic leading-relaxed mb-4 md:mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-warm to-accent-hover flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm md:text-base">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {testimonials[currentIndex].position} - {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-accent-warm/50 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-accent-warm transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-accent-warm'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-accent-warm/50 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-accent-warm transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
