"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SiapLuncur",
    description: "Membantu UMKM membuat landing page profesional agar bisa online dengan cepat dan rapi.",
    image: "/images/siapluncur.png",
    tags: ["Landing Page", "UMKM", "Web Builder"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "LapakBenz",
    description: "Platform komunitas dan marketplace otomotif yang mendukung event serta penjualan produk UMKM.",
    image: "/images/lapakbenz.png",
    tags: ["Marketplace", "Komunitas", "E-commerce"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Internal Admin System",
    description: "Dashboard internal untuk mengelola produk, transaksi, dan operasional bisnis secara efisien.",
    image: "/images/adminpanel-lapakbenz.png",
    tags: ["Dashboard", "Admin Panel", "Management"],
    color: "from-orange-500 to-red-500",
  },
];

export default function WorkSection() {
  return (
    <Section id="work" bgColor="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-accent-warm/10 border border-accent-warm/20 rounded-full text-accent-warm text-sm font-medium mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#191726] mb-4"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Beberapa projek yang telah saya kerjakan untuk berbagai klien
          </motion.p>
        </div>

        {/* Mobile: Grid layout, Desktop: Original layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-accent-warm/40 hover:shadow-xl transition-all duration-500">
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full flex items-center justify-center p-4 bg-white">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <div className="inline-block px-2 py-0.5 bg-accent-warm/10 text-accent-warm text-[10px] font-semibold rounded-full mb-2 group-hover:bg-accent-warm group-hover:text-white transition-all duration-300">
                      #{index + 1}
                    </div>
                    
                    <h3 className="text-sm font-bold text-[#191726] mb-2 group-hover:text-accent-warm transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 bg-white border border-gray-200 text-gray-700 text-[9px] rounded transition-all duration-200"
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

        {/* Desktop: Original layout */}
        <div className="hidden md:block space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-accent-warm/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                {/* Image Section */}
                <div className={`relative h-80 md:h-96 overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full flex items-center justify-center p-8 bg-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-accent-warm/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                  <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-accent-warm/10 to-accent-hover/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Content Section */}
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="inline-block px-3 py-1 bg-accent-warm/10 text-accent-warm text-xs font-semibold rounded-full mb-4 group-hover:bg-accent-warm group-hover:text-white transition-all duration-300">
                    Project #{index + 1}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#191726] mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-lg hover:border-accent-warm/50 hover:text-accent-warm hover:scale-105 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-accent-warm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Lihat Detail</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
