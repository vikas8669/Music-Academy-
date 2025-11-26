"use client";
import React from "react";

const LastFooter = () => {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        {["Home", "About", "Courses", "Contact"].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-300 text-sm sm:text-base"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex flex-col space-y-2 text-sm sm:text-base">
                        {["Facebook", "Twitter", "Instagram"].map((platform) => (
                            <a
                                key={platform}
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <div className="text-sm sm:text-base space-y-1">
                        <p>New Delhi, India</p>
                        <p>Delhi 10001</p>
                        <p>Email: info@musicschool.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-xs sm:text-sm pt-8">
                © 2025 Music School. All rights reserved.
            </p>
        </footer>
    );
};

export default LastFooter;
