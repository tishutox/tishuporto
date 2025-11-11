"use client";
import React from "react";
import { Button, FadeIn } from "../ui";
import Cal from "./Cal";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section className="space-y-8 px-6">
      {/* Header */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-zinc-900 text-2xl font-semibold leading-relaxed">
            Get in touch
          </h2>
          <p className="text-zinc-600 text-base font-normal">
            Add your contact description here. Describe what type of projects
            you&apos;re looking for, your availability, and what makes working
            with you valuable.
          </p>
        </div>
      </FadeIn>

      {/* Submit Button */}
      <FadeIn delay={0.4}>
        <div className="flex md:flex-row flex-col  justify-center md:justify-start   items-center gap-4">
          <Link
            href="mailto:your.email@example.com"
            target="_blank"
            className="w-full md:w-auto"
          >
            <Button
              type="submit"
              variant="primary"
              className="text-sm rounded-xl lg:text-base w-full md:w-[155px]"
            >
              Send Message
            </Button>{" "}
          </Link>
          <span className="text-zinc-600 text-sm lg:text-base flex items-center gap-4 max-md:w-full">
            <div className="h-px flex-1 bg-zinc-200 md:hidden" />
            or
            <div className="h-px flex-1 bg-zinc-200 md:hidden" />
          </span>
          <Cal variant="secondary" />
        </div>
      </FadeIn>
    </section>
  );
};

export { Contact };
