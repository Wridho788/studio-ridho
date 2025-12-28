"use client";

import { FadeUpSoft, StaggerContainer, StaggerItem } from "./MotionWrapper";

const steps = [
  "Memahami kebutuhan dan konteks bisnis",
  "Menyusun solusi yang realistis dan tepat guna",
  "Eksekusi rapi dengan komunikasi yang jelas",
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 md:px-8 bg-neutral-bg/50">
      <div className="max-w-3xl mx-auto">
        <FadeUpSoft>
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-primary mb-12">
            Cara Saya Bekerja
          </h2>
        </FadeUpSoft>
        
        <StaggerContainer>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-6 p-6 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-warm/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent-warm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-deep-primary pt-1.5">
                    {step}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
        <FadeUpSoft delay={0.3}>
          <p className="mt-10 text-lg text-text-secondary leading-relaxed">
            Saya mengutamakan kejelasan, transparansi, dan hasil yang bisa dipertanggungjawabkan. 
            Pendekatan ini saya gunakan agar setiap solusi tetap sederhana, jelas, dan mudah digunakan 
            oleh tim non-teknis.
          </p>
        </FadeUpSoft>
      </div>
    </section>
  );
}
