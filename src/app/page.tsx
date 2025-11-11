import React from "react";
import {
  Header,
  Hero,
  About,
  WorkExperience,
  Footer,
  Contact,
  Projects,
  Newsletter,
} from "../components/sections";
import { Container } from "@/components/ui";

export default function Home() {
  return (
    <div className="bg-zinc-50/10">
      <Header />

      <Container
        size="sm"
        className="mx-auto mt-10 flex flex-col justify-center items-center space-y-20 lg:space-y-24"
      >
        {" "}
        <Hero />
        <About />{" "}
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Newsletter />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <WorkExperience />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Projects />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Contact />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Footer />
      </Container>
    </div>
  );
}
