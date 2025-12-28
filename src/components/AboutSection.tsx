"use client";

import { FadeUpSoft } from "./MotionWrapper";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeUpSoft>
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-primary mb-8">
            Tentang Saya
          </h2>
        </FadeUpSoft>
        
        <FadeUpSoft delay={0.06}>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Saya Ridho, digital product builder dengan fokus membantu bisnis dan usaha lokal 
              membangun kehadiran digital yang rapi dan profesional.
            </p>
            <p>
              Saya terbiasa mengerjakan produk dari tahap awal—mulai dari struktur, UI/UX, 
              hingga implementasi—dengan pendekatan yang tenang, terukur, dan berorientasi hasil.
            </p>
          </div>
        </FadeUpSoft>
      </div>
    </section>
  );
}
