"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/data";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A09] shadow-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Unique Torkfolio Logo */}
                    <div className="flex-shrink-0 flex items-center gap-1">
                        <div className="relative flex items-center justify-center w-8 h-8">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 34C16.467 24.6227 9.09241 17.0315 0 17.0315C9.11269 17.0315 16.5 9.40615 16.5 0C16.5329 9.37729 23.9076 16.9685 33 16.9685C23.8872 16.9685 16.5 24.5939 16.5 34Z" fill="#C4EF17" />
                            </svg>
                        </div>
                        <Link href="/" className="font-bold text-[24px] tracking-tight text-white ml-2">
                            Torkfolio
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-1 hover:text-primary text-white text-[16px] font-medium transition-colors"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link href="#contact" className="trk-btn-outline !py-2.5 !px-6 text-[16px] border-[#C4EF17] text-[#C4EF17] hover:bg-[#C4EF17] hover:text-[#0A0A09] transition-all duration-300 ease-out">
                            Hire Me
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0A0A09] border-b border-gray-800 pb-4">
                    <div className="px-4 pt-2 pb-3 space-y-2 text-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-1 px-3 py-3 rounded-md text-base font-bold text-white hover:text-primary">
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="trk-btn-outline inline-flex px-8 py-3">
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
