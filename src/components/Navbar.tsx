"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null)
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                {/* <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 nav-links">
                        
                        <HoveredLink href="/our-course">Our Courses</HoveredLink>
                        <HoveredLink href="/contact-us">Contact us</HoveredLink>
                        <HoveredLink href="/">Home</HoveredLink>
                    </div>
                    <HoveredLink className="/" href="/"></HoveredLink>
                    </MenuItem> */}
                    <Link href={"/"}>Home</Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 nav-links">
                        <HoveredLink className="/" href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/our-course">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/contact-us">Song Writing</HoveredLink>
                        <HoveredLink href="/">Music Prodution</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contac Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
