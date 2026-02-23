import { Github, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-20 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10">
                    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C14 0 14.5 9.5 24 10C14.5 10.5 14 20 14 20C14 20 13.5 10.5 4 10C13.5 9.5 14 0 14 0Z" fill="#6B7FFF" />
                        <path d="M10 4C10 4 10.5 11.5 18 12C10.5 12.5 10 20 10 20C10 20 9.5 12.5 2 12C9.5 11.5 10 4 10 4Z" fill="#C4EF17" />
                    </svg>
                    <span className="text-white text-3xl font-extrabold tracking-tight">Torkfolio</span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
                    {['Home', 'About Me', 'Services', 'Portfolio', 'Experience', 'Contact Us'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-white font-bold hover:text-[#C4EF17] transition-all"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex gap-6 mb-12">
                    {[Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="w-12 h-12 rounded-full border border-white/5 bg-[#121211] flex items-center justify-center text-white hover:bg-[#C4EF17] hover:text-[#0A0A09] hover:border-[#C4EF17] transition-all"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-white/5 mb-8" />

                <div className="text-[#9FA0A6] font-medium text-sm">
                    &copy; {new Date().getFullYear()} <span className="text-white font-bold">Torkfolio</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
