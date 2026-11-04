import React from "react";
import Animated from "../components/Animated";

const HeroSection = () => {
  return (
    <>
      <section className="flex min-h-[100vh] items-center overflow-hidden bg-bg px-4 pb-16 pt-24 sm:px-6 md:min-h-screen md:px-0 md:pb-0 md:pt-0">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Animated y={0} delay={0.2}>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Master Modern Web Development
            </h1>
          </Animated>
          <Animated y={0} delay={0.4}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:mt-6 sm:text-lg md:text-xl">
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
