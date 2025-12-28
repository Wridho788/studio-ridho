"use client";

import { FadeUpSoft } from "./MotionWrapper";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-deep-primary">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUpSoft>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Diskusi Awal
          </h2>
        </FadeUpSoft>
        
        <FadeUpSoft delay={0.06}>
          <p className="text-lg md:text-xl text-neutral-bg/90 mb-10 max-w-2xl mx-auto">
            Jika Anda ingin memastikan bisnis Anda tampil lebih profesional secara online, 
            kita bisa mulai dari diskusi singkat.
          </p>
        </FadeUpSoft>
        
        <FadeUpSoft delay={0.12}>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-accent-warm rounded-lg hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg hover:shadow-xl"
          >
            Hubungi via WhatsApp
          </a>
        </FadeUpSoft>
      </div>
    </section>
  );
}
