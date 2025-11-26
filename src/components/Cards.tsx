"use client";

import { BackgroundGradient } from "./ui/background-gradient";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import data from "../data/data.json";
import Link from "next/link";

const words = [
    { text: "Learn new" },
    { text: "awesome" },
    { text: "Courses" },
    { text: "with" },
    { text: "Us.", className: "text-green-500 dark:text-green-500" },
];

interface CourseData {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

const Cards = () => {
    const featuredData = data.courses.filter(
        (course: CourseData) => course.isFeatured
    );

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16">
            {/* Heading */}
            <div className="text-center flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-teal-600 font-bold tracking-wide uppercase">
                    <TypewriterEffectSmooth words={words} />
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
                    Learn With the Best
                </p>
            </div>

            {/* Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredData.map((course: CourseData) => (
                    <BackgroundGradient
                        key={course.id}
                        className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden max-w-sm mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-neutral-200 mb-2">
                                {course.title}
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 flex-grow mb-4">
                                {course.description}
                            </p>
                            <Link
                                href={`/courses/${course.slug}`}
                                className="inline-block px-4 py-2 rounded-full text-white bg-teal-600 hover:bg-teal-700 transition duration-200"
                            >
                                Learn More
                            </Link>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>

            {/* View All Courses */}
            <div className="mt-12 text-center">
                <Link
                    href="/courses"
                    className="px-6 py-3 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All Courses
                </Link>
            </div>
        </section>
    );
};

export default Cards;
