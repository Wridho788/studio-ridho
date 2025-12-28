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
      <div className="max-w-6xl mx-auto">
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
            className="text-3xl md:text-5xl font-bold text-[#191726] mb-4"
          >
            Yang Saya Bantu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda
          </motion.p>
        </div>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-accent-warm/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent-warm/0 to-accent-warm/0 group-hover:from-accent-warm/5 group-hover:to-accent-hover/5 rounded-2xl transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-[#191726] mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-warm/0 group-hover:border-accent-warm/30 rounded-tr-lg transition-all duration-300" />
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
          <p className="text-lg text-gray-600 italic">
            Setiap solusi saya rancang agar mudah digunakan, cepat online, dan
            relevan untuk kebutuhan bisnis.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
