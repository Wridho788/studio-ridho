"use client";

import Section from "./Section";
import TextBlock from "./TextBlock";

export default function AboutSection() {
  return (
    <Section id="about" bgColor="bg-white">
      <TextBlock title="Tentang Saya" maxWidth="md">
        <p>
          Saya Ridho, digital product builder dengan fokus membantu bisnis dan
          usaha lokal membangun kehadiran digital yang rapi dan profesional.
        </p>
        <p>
          Saya terbiasa mengerjakan produk dari tahap awal—mulai dari struktur,
          UI/UX, hingga implementasi—dengan pendekatan yang tenang, terukur, dan
          berorientasi hasil.
        </p>
      </TextBlock>
    </Section>
  );
}
