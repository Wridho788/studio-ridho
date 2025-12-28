"use client";

import { FadeUpSoft, StaggerContainer, StaggerItem } from "./MotionWrapper";

const services = [
  "Website bisnis & landing page",
  "Produk digital internal (admin panel, dashboard)",
  "Validasi & eksekusi MVP",
  "Perbaikan tampilan, UX, dan performa website",
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-8 bg-neutral-bg/50">
      <div className="max-w-4xl mx-auto">
        <FadeUpSoft>
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-primary mb-12">
            Yang Saya Bantu
          </h2>
        </FadeUpSoft>
        
        <StaggerContainer>
          <div className="grid gap-4 md:gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                    <p className="text-lg text-deep-primary">{service}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
        <FadeUpSoft delay={0.3}>
          <p className="mt-8 text-lg text-text-secondary text-center max-w-2xl mx-auto">
            Setiap solusi saya rancang agar mudah digunakan, cepat online, dan relevan untuk kebutuhan bisnis.
          </p>
        </FadeUpSoft>
      </div>
    </section>
  );
}
