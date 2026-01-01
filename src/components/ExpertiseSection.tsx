"use client";

import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website bisnis & landing page",
    icon: "🌐",
    description: "Website profesional yang menarik dan convert",
  },
  {
    title: "Produk digital internal (admin panel, dashboard)",
    icon: "⚙️",
    description: "Dashboard untuk mengelola bisnis dengan efisien",
  },
  {
    title: "Validasi & eksekusi MVP",
    icon: "🚀",
    description: "Dari ide menjadi produk digital yang nyata",
  },
  {
    title: "Perbaikan tampilan, UX, dan performa website",
    icon: "✨",
    description: "Tingkatkan kualitas website yang sudah ada",
  },
];

export default function ExpertiseSection() {
  return (
    <Section id="expertise" bgColor="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-accent-warm/10 border border-accent-warm/20 rounded-full text-accent-warm text-sm font-medium mb-4"
          >
            Layanan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#191726] mb-4"
          >
            Yang Saya Bantu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda
          </motion.p>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className="group relative bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-accent-warm/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/0 to-accent-warm/0 group-hover:from-accent-warm/5 group-hover:to-accent-hover/10 rounded-xl md:rounded-2xl transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="text-3xl md:text-5xl mb-3 md:mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{service.icon}</div>
                    <h3 className="text-sm md:text-xl font-bold text-[#191726] mb-2 md:mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600 leading-relaxed mb-2 md:mb-4">
                      {service.description}
                    </p>
                    
                    {/* Additional Info - Shows on Hover */}
                    <div className="hidden md:flex items-center gap-2 text-accent-warm font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Pelajari lebih lanjut</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-10 md:h-10 border-t-2 border-r-2 border-accent-warm/0 group-hover:border-accent-warm/50 rounded-tr-lg transition-all duration-300 group-hover:scale-110" />
                  
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-warm to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-600 italic">
            Setiap solusi saya rancang agar mudah digunakan, cepat online, dan
            relevan untuk kebutuhan bisnis.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
