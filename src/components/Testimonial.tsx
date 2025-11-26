"use client";

import { ContainerScroll } from "./ui/container-scroll-animation";

function WhyChooseUs() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-20 py-12 gap-10">
      {/* Left Side: Text + Scroll Image */}
      <div className="flex-1 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-2 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/linear.png"
            alt="hero"
            className="mx-auto rounded-2xl object-cover w-full h-72 sm:h-96 md:h-[28rem] lg:h-[40rem]"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Right Side: Placeholder for Globe or other content */}
      {/* <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-center text-base sm:text-lg max-w-md">
          We are building a global network with advanced 3D visualization. Scroll
          animations make the experience more interactive and engaging.
        </p>
      </div> */}
    </section>
  );
}

export default WhyChooseUs;
