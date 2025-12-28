"use client";

import Section from "./Section";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Section id="about" bgColor="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-linier-to-br from-[#191726] to-deep-secondary p-12 h-100 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(45deg, #FF8800 25%, transparent 25%),
                                 linear-gradient(-45deg, #FF8800 25%, transparent 25%),
                                 linear-gradient(45deg, transparent 75%, #FF8800 75%),
                                 linear-gradient(-45deg, transparent 75%, #FF8800 75%)`,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
              }} />
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linier-to-br from-accent-warm to-accent-hover flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  R
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ridho</h3>
                <p className="text-gray-300">Digital Product Builder</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 border-2 border-accent-warm/30 rounded-lg rotate-12" />
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent-warm/10 rounded-full" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#191726] mb-6">
              Tentang Saya
            </h2>
            <div className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed">
              <p className="relative pl-6 border-l-4 border-accent-warm">
                Saya Ridho, digital product builder dengan fokus membantu bisnis dan
                usaha lokal membangun kehadiran digital yang rapi dan profesional.
              </p>
              <p>
                Saya terbiasa mengerjakan produk dari tahap awal—mulai dari struktur,
                UI/UX, hingga implementasi—dengan pendekatan yang tenang, terukur, dan
                berorientasi hasil.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-linier-to-br from-accent-warm/5 to-accent-warm/10 p-4 rounded-xl border border-accent-warm/20">
                <div className="text-2xl font-bold text-accent-warm mb-1">5+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="bg-linier-to-br from-deep-secondary/5 to-deep-secondary/10 p-4 rounded-xl border border-deep-secondary/20">
                <div className="text-2xl font-bold text-deep-secondary mb-1">10+</div>
                <div className="text-sm text-gray-600">Projek Selesai</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
