"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Section id="about" bgColor="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-warm/10 text-accent-warm rounded-full text-sm font-semibold mb-4">
            Kenali Saya Lebih Dekat
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#191726] mb-4">
            Tentang Saya
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Membangun solusi digital yang bermakna untuk bisnis lokal
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Image & Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 w-full"
          >
            {/* Main Image */}
            <div className="relative mb-6 group w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-warm to-[#ff6600] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-[#191726] to-[#2d2840] w-full">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Ridho - Digital Product Builder"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mx-3 md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:border-accent-warm/40 transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-warm to-[#ff6600] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium group-hover:text-accent-warm transition-colors duration-300">Tahun Pengalaman</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:border-accent-warm/40 transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#191726] to-[#2d2840] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium group-hover:text-[#191726] transition-colors duration-300">Projek Selesai</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Introduction */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-accent-warm/30 transition-all duration-300 mx-3 md:mx-0">
              <div className="flex items-start gap-3 md:gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent-warm to-[#ff6600] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#191726] mb-2">Ridho</h3>
                  <p className="text-sm md:text-base text-accent-warm font-semibold">Digital Product Builder</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  Saya Ridho, digital product builder dengan fokus membantu bisnis dan
                  usaha lokal membangun kehadiran digital yang rapi dan profesional.
                </p>
                <p>
                  Saya terbiasa mengerjakan produk dari tahap awal—mulai dari struktur,
                  UI/UX, hingga implementasi—dengan pendekatan yang tenang, terukur, dan
                  berorientasi hasil.
                </p>
              </div>
            </div>

            {/* Skills/Approach */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mx-3 md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-accent-warm/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-warm/10 flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-bold text-[#191726] mb-2">Pendekatan Terstruktur</h4>
                <p className="text-xs md:text-sm text-gray-600">Dari konsep hingga implementasi dengan metodologi yang jelas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-accent-warm/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-warm/10 flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-bold text-[#191726] mb-2">Hasil Optimal</h4>
                <p className="text-xs md:text-sm text-gray-600">Fokus pada solusi yang efektif dan memberikan dampak nyata</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}