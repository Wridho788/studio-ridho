"use client";

import MediaBlock from "./MediaBlock";

interface ProjectShowcaseProps {
  layoutVariant: "B" | "C";
  imageSrc: string;
  title: string;
  context: string;
  results?: string[];
}

export default function ProjectShowcase({
  layoutVariant,
  imageSrc,
  title,
  context,
  results,
}: ProjectShowcaseProps) {
  return (
    <MediaBlock
      layoutVariant={layoutVariant}
      imageSrc={imageSrc}
      imageAlt={title}
      title={title}
    >
      <p className="text-lg">{context}</p>
      
      {results && results.length > 0 && (
        <div className="mt-6 space-y-3">
          {results.map((result, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
              <p className="text-base text-text-secondary">{result}</p>
            </div>
          ))}
        </div>
      )}
    </MediaBlock>
  );
}
