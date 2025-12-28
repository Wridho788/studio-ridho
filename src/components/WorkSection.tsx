"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SiapLuncur",
    description: "Membantu UMKM membuat landing page profesional agar bisa online dengan cepat dan rapi.",
    image: "/images/siapluncur.svg",
    tags: ["Landing Page", "UMKM", "Web Builder"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "LapakBenz",
    description: "Platform komunitas dan marketplace otomotif yang mendukung event serta penjualan produk UMKM.",
    image: "/images/lapakbenz.svg",
    tags: ["Marketplace", "Komunitas", "E-commerce"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Internal Admin System",
    description: "Dashboard internal untuk mengelola produk, transaksi, dan operasional bisnis secara efisien.",
    image: "/images/admin-system.svg",
    tags: ["Dashboard", "Admin Panel", "Management"],
    color: "from-orange-500 to-red-500",
  },
];

export default function WorkSection() {
  return (
    <Section id="work" bgColor="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#FF8800]/10 border border-[#FF8800]/20 rounded-full text-[#FF8800] text-sm font-medium mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#191726] mb-4"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Beberapa projek yang telah saya kerjakan untuk berbagai klien
          </motion.p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#FF8800]/30 hover:shadow-2xl transition-all duration-500">
                {/* Image Section */}
                <div className={`relative h-80 md:h-96 overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                    style={{
                      background: `linear-gradient(135deg, #FF8800 0%, #ff9933 100%)`
                    }}
                  />
                  <div className="relative h-full flex items-center justify-center p-8">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-[#FF8800]/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                  <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-[#FF8800]/10 to-[#ff9933]/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Content Section */}
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="inline-block px-3 py-1 bg-[#FF8800]/10 text-[#FF8800] text-xs font-semibold rounded-full mb-4">
                    Project #{index + 1}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#191726] mb-4 group-hover:text-[#FF8800] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg hover:border-[#FF8800]/50 hover:text-[#FF8800] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
