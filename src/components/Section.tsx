import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  paddingTop?: "normal" | "large" | "small";
  paddingBottom?: "normal" | "large" | "small";
  bgColor?: string;
}

export default function Section({
  children,
  id,
  className = "",
  paddingTop = "normal",
  paddingBottom = "normal",
  bgColor = "bg-white",
}: SectionProps) {
  const ptClasses = {
    small: "pt-16 md:pt-20",
    normal: "pt-20 md:pt-24",
    large: "pt-28 md:pt-32",
  };

  const pbClasses = {
    small: "pb-16 md:pb-20",
    normal: "pb-20 md:pb-24",
    large: "pb-28 md:pb-32",
  };

  return (
    <section
      id={id}
      className={`${ptClasses[paddingTop]} ${pbClasses[paddingBottom]} px-6 md:px-12 ${bgColor} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
