"use client";

import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Memahami kebutuhan dan konteks bisnis",
    description: "Diskusi mendalam untuk memahami tujuan bisnis, target audiens, dan tantangan yang dihadapi",
    icon: "🎯"
  },
  {
    title: "Menyusun solusi yang realistis dan tepat guna",
    description: "Merancang strategi dan solusi yang sesuai dengan budget, timeline, dan kebutuhan spesifik Anda",
    icon: "💡"
  },
  {
    title: "Eksekusi rapi dengan komunikasi yang jelas",
    description: "Implementasi bertahap dengan update rutin dan feedback loop yang transparan",
    icon: "⚡"
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" bgColor="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-warm/10 border border-accent-warm/20 rounded-full text-accent-warm text-sm font-medium mb-4">
            Proses Kerja
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#191726] mb-4">
            Cara Saya Bekerja
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pendekatan terstruktur untuk hasil maksimal
          </p>
        </motion.div>

        <StaggerContainer>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative flex items-start gap-6 p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-accent-warm/40 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-warm/0 to-accent-warm/0 group-hover:from-accent-warm/5 group-hover:to-transparent transition-all duration-300" />
                  
                  {/* Number Circle */}
                  <div className="relative shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-warm/10 to-accent-hover/10 flex items-center justify-center border-2 border-accent-warm/20 group-hover:border-accent-warm/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-2xl font-bold text-accent-warm">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                      <h3 className="text-xl font-bold text-[#191726] group-hover:text-accent-warm transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-accent-warm/30 group-hover:text-accent-warm group-hover:translate-y-1 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-warm/0 group-hover:border-accent-warm/30 rounded-tr-lg transition-all duration-300" />
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-[#191726] to-[#2d2840] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-warm/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Saya mengutamakan <span className="text-accent-warm font-semibold">kejelasan, transparansi, dan hasil yang bisa dipertanggungjawabkan</span>. Pendekatan ini saya gunakan agar setiap solusi tetap sederhana, jelas, dan mudah digunakan oleh tim non-teknis.
            </p>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg className="w-6 h-6 text-accent-warm" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Proses yang terbukti efektif</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
