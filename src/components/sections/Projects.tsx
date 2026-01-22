"use client";
import React from "react";
import { FadeIn } from "../ui";
import Image from "next/image";
import ButterflyIcon from "../icons/ButterflyIcon";
import DiamondIcon from "../icons/DiamondIcon";
import FlowerIcon from "../icons/FlowerIcon";
import SparkleIcon from "../icons/SparkleIcon";
import StarIcon from "../icons/StarIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  delay = 0,
}) => (
  <FadeIn delay={delay} className="w-full max-w-lg mx-auto">
    <div className="space-y-6 border border-zinc-200/60 shadow-sm rounded-xl md:rounded-2xl p-4">
      <div className="border border-zinc-200/60 overflow-hidden rounded-lg md:rounded-xl bg-gray-100">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="space-y-2">
        <h3 className="text-zinc-900 text-base md:text-lg font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-zinc-600 text-base leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-zinc-100 border border-zinc-200/30 text-zinc-600 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Akai Senko",
      description:
        "University project: Foundation of an eSports team including branding, website and social media presence.",
      image: "/img.png",
      techStack: ["HTML", "CSS", "JavaScript", "Copilot"],
    },
  ];

  const DecorativeIcons: React.FC = () => {
    const icons = [
      ButterflyIcon,
      DiamondIcon,
      FlowerIcon,
      SparkleIcon,
      StarIcon,
    ];

    // Duplicate icons for seamless scroll
    const duplicatedIcons = [...icons, ...icons];

    return (
      <div className="mb-8 overflow-hidden relative max-w-[250px] mx-auto">
        <style jsx>{`
          @keyframes iconScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-icon-scroll {
            animation: iconScroll 8s linear infinite;
          }
          .animate-icon-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex items-center gap-4 animate-icon-scroll">
          <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
          {duplicatedIcons.map((IconComponent, index) => (
            <React.Fragment key={`icon-${index}`}>
              <div className="flex-shrink-0">
                <IconComponent />
              </div>
              {index < duplicatedIcons.length - 1 && (
                <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
          <div className="w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
        </div>
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    );
  };

  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-4 space-y-4">
          <FadeIn>
            <FadeIn delay={0.2}>
              <DecorativeIcons />
            </FadeIn>
            <FadeIn delay={0.4}>
              <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-8">
                Recent Projects & Work
              </h2>
            </FadeIn>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 mx-auto">
          {projects.map((project, index) => (
            <FadeIn delay={0.6 + index * 0.15} key={project.title}>
              <ProjectCard key={project.title} {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
