"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <section className="relative w-full h-auto md:h-[40rem] flex items-center justify-center overflow-hidden py-10 md:py-0 mx-auto rounded-md">
            {/* Spotlight Background */}
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />

            {/* Hero Content */}
            <div className="relative z-10 w-full px-4 text-center flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight sm:leading-snug md:leading-tight">
                    Master the art of music
                </h1>

                <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, laboriosam! Et assumenda suscipit omnis ullam, porro ea veritatis dolores reprehenderit.
                </p>

                <div className="mt-6 sm:mt-8">
                    <Link href="/course">
                        <Button
                            borderRadius="1.75rem"
                            className="px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm sm:text-base md:text-lg"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
