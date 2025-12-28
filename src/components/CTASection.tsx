"use client";

import Section from "./Section";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <Section id="contact" bgColor="bg-deep-primary" paddingTop="large" paddingBottom="large">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-semibold text-white mb-6"
        >
          Diskusi Awal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-neutral-bg/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Jika Anda ingin memastikan bisnis Anda tampil lebih profesional
          secara online, kita bisa mulai dari diskusi singkat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-accent-warm rounded-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg hover:shadow-xl focus-visible:outline-accent-warm"
          >
            Hubungi via WhatsApp
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
