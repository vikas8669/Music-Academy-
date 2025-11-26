"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export const projects = [
    {
        title: "Understanding Music Theory",
        description:
            "Dive deep into the fundamentals of music theory and enhance your musical skills.",
        slug: "understanding-music-theory",
        isFeatured: true,
    },
    {
        title: "The Art of Songwriting",
        description:
            "Learn the craft of songwriting from experienced musicians and songwriters.",
        slug: "the-art-of-songwriting",
        isFeatured: true,
    },
    {
        title: "Mastering Your Instrument",
        description:
            "Advanced techniques to master your musical instrument of choice.",
        slug: "mastering-your-instrument",
        isFeatured: true,
    },
    {
        title: "Music Production Essentials",
        description:
            "Get started with music production with this comprehensive overview.",
        slug: "music-production-essentials",
        isFeatured: true,
    },
    {
        title: "Live Performance Techniques",
        description:
            "Enhance your live performance skills with expert tips and strategies.",
        slug: "live-performance-techniques",
        isFeatured: true,
    },
    {
        title: "Digital Music Marketing",
        description:
            "Learn how to promote your music effectively in the digital age.",
        slug: "digital-music-marketing",
        isFeatured: true,
    },
];

const UpcomingsWebinars = () => {
    return (
        <section className="w-full bg-gray-900 py-12 px-4 sm:px-8 lg:px-16">
            {/* Section Title */}
            <div className="flex flex-col items-center justify-center space-y-2 mb-12">
                <h1 className="text-teal-500 font-bold text-2xl sm:text-3xl md:text-4xl text-center">
                    FEATURED WEBINARS
                </h1>
                <p className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl uppercase text-center">
                    Enhance your musical journey
                </p>
            </div>

            {/* Featured Webinars */}
            <div className="max-w-[1400px] mx-auto">
                <HoverEffect items={projects} />
            </div>

            {/* View All Button */}
            <div className="flex items-center justify-center mt-10">
                <Link
                    href="/"
                    className="bg-white text-black font-bold px-6 py-3 rounded-2xl text-lg hover:bg-gray-200 transition"
                >
                    View All Courses
                </Link>
            </div>
        </section>
    );
};

export default UpcomingsWebinars;
