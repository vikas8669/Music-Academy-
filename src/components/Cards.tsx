"use client";

import { BackgroundGradient } from "./ui/background-gradient";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import data from "../data/data.json"
import Link from "next/link";
// import { div } from "motion/react-client";

 const words = [
    {
      text: "Lern new",
    },
    {
      text: "awesome",
    },
    {
      text: "Courses",
    },
    {
      text: "with",
    },
    {
      text: "Us.",
      className: "text-green-500 dark:text-green-500",
    },
  ];


interface courseData {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string

}

const Cards = () => {
    const featuredData = data.courses.filter((course: courseData) => course.isFeatured)
    // console.log(featuredData)
    return (
        <div className="py-12 ">
            <div>
                <div className="text-center flex flex-col items-center justify-center">
                    
                    <h2 className=" text-2xl text-teal-600 font-bold tracking-wide uppercase">
                        <TypewriterEffectSmooth words={words} />
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {
                        featuredData.map((course: courseData) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`/courses/${course.slug}`}>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"

                    href={"/"}>
                    View All Courses
                </Link>
            </div>
        </div>

    )
}

export default Cards
