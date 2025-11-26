import React from 'react'

import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';


export const projects = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
]
const UpcomingsWebinnars = () => {
    return (
        <div className="w-full bg-gray-900 p-4  ">
            <div className='flex flex-col item-center justify-center  space-y-2'>
                <div>
                    <h1 className='text-center mt-15 font-bold text-2xl text-teal-600'>FEATURED WEBINARS</h1>
                </div>
                <div>
                    <p className='text-3xl font-extrabold text-center uppercase'>inchance your musicals journey</p>
                </div>
            </div>
            <div className="max-w-8xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
            <div className='flex items-center justify-center'>
                <Link
                className='text-[19px] bg-white text-black p-3 rounded-2xl font-bold '
                href={"/"}>View All Course</Link>
            </div>
        </div>
    )
}

export default UpcomingsWebinnars
