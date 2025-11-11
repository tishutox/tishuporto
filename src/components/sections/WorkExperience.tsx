"use client";
import React from "react";
import { 
  Braces, 
  Instagram, 
  PencilLine,
  Drill,
  Code, 
  GraduationCap, 
  Building, 
  Star, 
  Zap, 
  Heart, 
  Sparkles,
  Diamond,
  Coffee
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "../ui";

interface ExperienceItemProps {
  period: string;
  role: string;
  company?: string;
  companyColor: "blue" | "pink" | "black";
  link?: string;
  tooltip?: string;
  icon?: React.ComponentType<any>;
  customColor?: string; // Hexcode für individuelle Farben
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  role,
  company,
  companyColor,
  link,
  tooltip,
  icon,
  customColor,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Funktion zum Generieren der Farben basierend auf Hexcode
  const generateColorsFromHex = (hexColor: string) => {
    // Entferne # falls vorhanden
    const hex = hexColor.replace('#', '');
    
    return {
      bg: { backgroundColor: `${hexColor}15` }, // 15 = ~8% Opazität
      text: { color: hexColor },
      icon: { backgroundColor: hexColor },
      border: { borderColor: `${hexColor}30` }, // 30 = ~19% Opazität
      iconColor: { color: hexColor }, // Icons haben die gleiche Farbe wie der Text
    };
  };

  const companyStyles = {
    blue: {
      bg: "bg-sky-100",
      text: "text-sky-700",
      icon: "bg-sky-700",
      border: "border-sky-100",
    },
    black: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      icon: "bg-amber-800",
      border: "border-amber-200",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-700",
      icon: "bg-pink-700",
      border: "border-pink-100",
    },
  };

  // Verwende benutzerdefinierte Farben wenn vorhanden, sonst Standardfarben
  const style = customColor ? null : companyStyles[companyColor];
  const customStyle = customColor ? generateColorsFromHex(customColor) : null;
  const isEducator = role === "Educator";
  
  // Use custom icon if provided, otherwise fall back to default logic
  const IconComponent = icon || (isEducator ? Instagram : Braces);
  
  // Icon-Farben basierend auf benutzerdefinierten oder Standard-Farben
  const iconColor = customColor 
    ? "" // Wird durch inline-style gesetzt
    : isEducator
    ? "text-pink-500"
    : companyColor === "blue"
    ? "text-sky-600"
    : companyColor === "pink"
    ? "text-pink-600"
    : "text-amber-700";
  const iconSize = isEducator ? "size-[18px]" : "size-5";

  const companyBadge = (
    <div
      className={`p-1.5 border rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center gap-1.5 ${
        link
          ? "hover:opacity-80 transition-opacity cursor-pointer"
          : tooltip
          ? "cursor-help"
          : ""
      } relative group ${customColor ? "" : `${style!.bg} ${style!.border}`}`}
      style={customColor ? { ...customStyle!.bg, ...customStyle!.border } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent 
        className={`${iconSize} ${customColor ? "" : iconColor}`} 
        style={customColor ? customStyle!.iconColor : {}}
      />
      <div 
        className={`text-[15px] font-medium leading-relaxed ${customColor ? "" : style!.text}`}
        style={customColor ? customStyle!.text : {}}
      >
        {company}
      </div>

      {/* Cute Animated Tooltip */}
      <AnimatePresence>
        {tooltip && isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -10,
              rotateX: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -5,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              mass: 0.8,
              delay: 0.1,
            }}
            className="absolute top-full -left-6 transform -translate-x-1/2 mt-3 pointer-events-none z-20"
          >
            {/* Triangle Arrow at Top */}
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-zinc-800"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
            />

            <div className="px-3 py-2 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white text-sm font-medium rounded-xl shadow-lg border border-zinc-700/50 whitespace-nowrap backdrop-blur-sm">
              <span className="flex items-center gap-1.5">⏳ {tooltip}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-start sm:items-center justify-between w-full">
      <div className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed">
        {period}
      </div>
      <div className="flex justify-start gap-2.5 w-full sm:max-w-[245px] items-center">
        <div className="text-zinc-600 text-base font-medium leading-relaxed">
          {role} {company && "at"}
        </div>
        {company &&
          (link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {companyBadge}
            </Link>
          ) : (
            companyBadge
          ))}
      </div>
    </div>
  );
};

const WorkExperience: React.FC = () => {
    const experiences = [

    {
      period: "Oct 2025 - Present",
      role: "Designer",
      company: "Void",
      companyColor: "pink" as const,
      link: "https://void.tha.de/",
      icon: Braces,
      customColor: "#ff0350", // Lila für Tech
    },

    {
      period: "Sep 2025 - Present",
      role: "Tutor",
      company: "Schülerhilfe",
      companyColor: "black" as const,
      link: "https://www.schuelerhilfe.de/nachhilfe/friedberg-2/",
      icon: PencilLine,
      customColor: "#005baa", // Orange für Bildung
    },
  ];

  return (
    <FadeIn delay={1.1} className="w-full">
      <section className="px-4 w-full mx-auto ">
        <h2 className="text-zinc-900 text-xl  md:text-2xl font-semibold leading-relaxed mb-8">
          Work Experience
        </h2>
        <div className="space-y-8 sm:space-y-6 w-full mx-auto">
          {experiences.map((exp, index) => (
            <FadeIn delay={1.2 + index * 0.08} key={index}>
              <ExperienceItem key={index} {...exp} />
            </FadeIn>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export { WorkExperience };
