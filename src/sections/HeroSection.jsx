import React from "react";
import Animated from "../components/Animated";

const HeroSection = () => {
  return (
    <>
      <section className="flex md:min-h-screen min-h- items-center overflow-hidden bg-bg">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Animated y={0} delay={0.2}>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Master Modern Web Development
            </h1>
          </Animated>
          <Animated y={0} delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Discover the best tools, frameworks, and resources to build
              professional web applications.
            </p>
          </Animated>
        </div>
      </section>
      <hr className="border-border w-full" />
    </>
  );
};

export default HeroSection;
