"use client";
import React from "react";
import { Button, Container, FadeIn } from "../ui";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <FadeIn>
      <Container
        size="sm"
        className="pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col justify-center px-4 gap-8"
      >
        <FadeIn delay={0.2}>
          <Image
            className="w-24 h-24 rounded-full object-cover"
            src="/img.jpg"
            alt="Miraya Profile"
            width={96}
            height={96}
            priority
          />
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col gap-4 text-left">
          <h1 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1.15]">
            Hey, I&apos;m [Your Name]. <br />
            [Add Your Title Here].
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed">
            Add your compelling elevator pitch here. Describe what makes you
            unique and the value you bring to your clients or employers.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="flex gap-3">
          <Link
            href="mailto:your.email@example.com"
            target="_blank"
            className="w-full md:w-auto"
          >
            <Button variant="primary" className="w-full md:w-auto">
              Hire me
            </Button>
          </Link>
          <div className="rounded-full bg-green-100 text-lime-700 flex items-center gap-2 px-6 py-3.5 text-sm ">
            <div className="relative inline-flex">
              <div className="rounded-full bg-lime-700 h-[6px] w-[6px] inline-block"></div>
              <div className="absolute animate-ping rounded-full bg-lime-700 h-[6px] w-[6px] opacity-75"></div>
            </div>
            <span className="md:hidden">Available</span>
            <span className="hidden md:inline">Open to Opportunities</span>
          </div>
        </FadeIn>
      </Container>
    </FadeIn>
  );
};

export { Hero };
