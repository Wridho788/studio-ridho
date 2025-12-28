"use client";

import Section from "./Section";
import ProjectShowcase from "./ProjectShowcase";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <>
      {/* Section Title */}
      <Section id="work" bgColor="bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-semibold text-deep-primary mb-16"
        >
          Selected Work
        </motion.h2>

        {/* Project 1 - Pattern B (Media Left) */}
        <div className="mb-24">
          <ProjectShowcase
            layoutVariant="B"
            imageSrc="/images/siapluncur.svg"
            title="SiapLuncur"
            context="Membantu UMKM membuat landing page profesional agar bisa online dengan cepat dan rapi."
            results={[
              "Landing page builder yang mudah digunakan",
              "Template profesional dan mobile-friendly",
              "Integrasi payment gateway untuk UMKM",
            ]}
          />
        </div>

        {/* Project 2 - Pattern C (Text Left) */}
        <div className="mb-24">
          <ProjectShowcase
            layoutVariant="C"
            imageSrc="/images/lapakbenz.svg"
            title="LapakBenz"
            context="Platform komunitas dan marketplace otomotif yang mendukung event serta penjualan produk UMKM."
            results={[
              "Sistem event management terintegrasi",
              "Marketplace dengan katalog produk otomotif",
              "Fitur komunitas dan forum diskusi",
            ]}
          />
        </div>

        {/* Project 3 - Pattern B (Media Left) */}
        <div>
          <ProjectShowcase
            layoutVariant="B"
            imageSrc="/images/admin-system.svg"
            title="Internal Admin System"
            context="Dashboard internal untuk mengelola produk, transaksi, dan operasional bisnis secara efisien."
            results={[
              "Real-time analytics dan reporting",
              "Multi-role access management",
              "Otomasi workflow operasional",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
