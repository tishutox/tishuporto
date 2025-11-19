import React from "react";
import { FadeIn } from "../ui";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GalleryImage: React.FC<{
  src: string;
  rotation: string;
  position: string;
  className?: string;
  text?: string;
}> = ({ src, rotation, position, className, text }) => {
  return (
    <div
      className={cn(
        "w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden",
        position,
        rotation,
        className
      )}
    >
      <Image
        className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
        src={src}
        alt="Photography"
        width={183}
        height={182}
      />
      <div className="left-[55px] top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs font-normal]">
        {text}{" "}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="px-6">
      <FadeIn delay={0.8}>
        <h2 className="text-zinc-900 text-xl  md:text-2xl font-semibold leading-relaxed mb-4">
          About
        </h2>
        <div className="text-zinc-500 text-base font-normal leading-relaxed space-y-4">
          <p>I&apos;m Armand. I&apos;m currently living near Augsburg in Germany where I also
            study Business Information Systems at the University of Applied Sciences in Augsburg.
          </p>
          <p>
            <b className="text-zinc-600 font-semibold">
              {" "}
              Here&apos;s what I actually do:
            </b>{" "}
            I can code in various programming languages and frameworks, including
            HTML, CSS, JavaScript, Next.js, Java and Python. I create modern,
            responsive and user-friendly websites and web applications.
          </p>
          <p>
            I specialize in front-end development, ensuring that the user
            interface is visually appealing and intuitive.
          </p>
          <p>
            [Mention your achievements, community involvement, or notable
            projects. Include numbers or metrics if you have them.]
          </p>
          <p>
            [Describe the results you deliver for clients or the impact of your
            work.]
          </p>{" "}
          <p>
            [Add personal interests or hobbies that humanize you and make you
            more relatable.]
          </p>
          <p className="font-medium">
            <q>The function of good software is to make the complex appear to be simple.</q>
            – Grady Booch
          </p>
        </div>
      </FadeIn>

      {/* Polaroid Photos Gallery */}
      <div className="relative mt-20 min-h-[400px]">
        <FadeIn delay={0.8}>
          <GalleryImage
            src="/home.png"
            rotation="origin-top-left rotate-[-8deg]"
            position="left-[2%] top-[150px] md:left-[14%] md:top-[130px] lg:left-[10%] lg:top-[90px]"
            className="shadow-xl"
            text="Faculty office"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <GalleryImage
            src="/me.png"
            rotation="origin-top-left rotate-[15deg]"
            position="-right-2 top-[-50px] md:right-[20%] md:top-[-30px] lg:right-[20%] lg:top-[-10px]"
            className="shadow-lg"
            text="This is me :3"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export { About };
