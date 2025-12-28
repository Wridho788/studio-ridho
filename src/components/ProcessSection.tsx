"use client";

import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import { motion } from "framer-motion";

const steps = [
  "Memahami kebutuhan dan konteks bisnis",
  "Menyusun solusi yang realistis dan tepat guna",
  "Eksekusi rapi dengan komunikasi yang jelas",
];

export default function ProcessSection() {
  return (
    <Section id="process" bgColor="bg-neutral-bg/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-semibold text-deep-primary mb-12"
        >
          Cara Saya Bekerja
        </motion.h2>

        <StaggerContainer>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-6 p-6 bg-white rounded-lg border border-gray-200 hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent-warm/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent-warm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-deep-primary pt-1.5">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-lg text-text-secondary leading-relaxed"
        >
          Saya mengutamakan kejelasan, transparansi, dan hasil yang bisa
          dipertanggungjawabkan. Pendekatan ini saya gunakan agar setiap solusi
          tetap sederhana, jelas, dan mudah digunakan oleh tim non-teknis.
        </motion.p>
      </div>
    </Section>
  );
}
