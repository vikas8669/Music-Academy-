"use client";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Bomx",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Vikas Kumar",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Remsi",
    designation: "MERN STACK Developer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Sofiya",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Ajit",
    designation: "SOAP Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3534&q=80",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <WavyBackground className="max-w-4xl mx-auto pb-20 sm:pb-32 lg:pb-40 px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase inter-var">
            Meet Our Instructors
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white font-normal inter-var">
            Leverage the power of canvas to create a beautiful hero section
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-6 gap-6">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </footer>
  );
};

export default Footer;
