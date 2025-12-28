"use client";

import { FadeUpSoft, StaggerContainer, StaggerItem } from "./MotionWrapper";

const projects = [
  {
    title: "SiapLuncur",
    description: "Membantu UMKM membuat landing page profesional agar bisa online dengan cepat dan rapi.",
  },
  {
    title: "LapakBenz",
    description: "Platform komunitas dan marketplace otomotif yang mendukung event serta penjualan produk UMKM.",
  },
  {
    title: "Internal Admin System",
    description: "Dashboard internal untuk mengelola produk, transaksi, dan operasional bisnis secara efisien.",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeUpSoft>
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-primary mb-12">
            Selected Work
          </h2>
        </FadeUpSoft>
        
        <StaggerContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <div className="group h-full p-8 bg-white border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="text-xl font-semibold text-deep-primary mb-4 group-hover:text-accent-warm transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
