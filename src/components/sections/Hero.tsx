"use client";
import React from "react";
import { Button, Container, FadeIn } from "../ui";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  // Hier können Sie Status und Farbe anpassen
  const opportunityStatus = {
    isOpen: false, // true = "Open to Opportunities", false = "Not Available"  
    color: "#ff006aff", // Hexcode für die Farbe - z.B. #ff0000 für rot wenn nicht verfügbar
  };

  // Generiere Farben basierend auf Hexcode - nur für den Status-Button
  const generateStatusColors = (hexColor: string) => {
    // Konvertiere Hex zu RGB
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return {
      bg: { backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }, // Badge-Hintergrund mit 10% Opazität
      text: { color: hexColor }, // Text in der Hauptfarbe
      dot: { backgroundColor: hexColor }, // Punkt in der Hauptfarbe
    };
  };

  const statusColors = generateStatusColors(opportunityStatus.color);
  const statusText = opportunityStatus.isOpen ? "Open to Opportunities" : "Not Available";

  return (
    <FadeIn>
      <Container
        size="sm"
        className="pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col justify-center px-4 gap-8"
      >
        <FadeIn delay={0.2}>
          <Image
            className="w-24 h-24 rounded-full object-cover"
            src="/pfp.png"
            alt="Armand Profile"
            width={96}
            height={96}
            priority
          />
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col gap-4 text-left">
          <h1 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1.15]">
            Hey, I&apos;m Armand. <br />
            Part-time Weeb.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed">
            Also known as my online persona Tishu or Tishutox on various
            social media and video games platforms.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="flex gap-3">
          <div 
            className="rounded-full flex items-center gap-2 px-6 py-3.5 text-sm"
            style={{ 
              backgroundColor: statusColors.bg.backgroundColor
            }}
          >
            <div className="relative inline-flex">
              <div 
                className="rounded-full h-[6px] w-[6px] inline-block"
                style={{ backgroundColor: statusColors.dot.backgroundColor }}
              ></div>
              {opportunityStatus.isOpen && (
                <div 
                  className="absolute animate-ping rounded-full h-[6px] w-[6px] opacity-75"
                  style={{ backgroundColor: statusColors.dot.backgroundColor }}
                ></div>
              )}
            </div>
            <span 
              className="md:hidden font-medium"
              style={{ color: statusColors.text.color }}
            >
              {statusText}
            </span>
            <span 
              className="hidden md:inline font-medium"
              style={{ color: statusColors.text.color }}
            >
              {statusText}
            </span>
          </div>
        </FadeIn>
      </Container>
    </FadeIn>
  );
};

export { Hero };
