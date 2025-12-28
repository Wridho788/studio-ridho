"use client";

import { FadeUpSoft } from "./MotionWrapper";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 bg-gradient-to-b from-white to-neutral-bg/30">
      <div className="max-w-4xl w-full text-center py-20">
        <FadeUpSoft>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-primary mb-6 leading-tight">
            Membantu bisnis tampil profesional dan siap bertumbuh secara digital.
          </h1>
        </FadeUpSoft>
        
        <FadeUpSoft delay={0.06}>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Website, landing page, dan produk digital yang rapi, cepat, dan mudah dipercaya pelanggan.
          </p>
        </FadeUpSoft>
        
        <FadeUpSoft delay={0.12}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent-warm rounded-lg hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Diskusi Singkat via WhatsApp
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-deep-primary bg-white border-2 border-deep-primary rounded-lg hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] w-full sm:w-auto"
            >
              Lihat Contoh Pekerjaan
            </a>
          </div>
        </FadeUpSoft>
      </div>
    </section>
  );
}
