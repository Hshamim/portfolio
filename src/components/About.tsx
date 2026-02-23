"use client";
import { Section } from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const About = () => {
    return (
        <Section id="about" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Side: Portrait and Ornaments */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-[#C4EF17] opacity-[0.05] rounded-full blur-[100px] -z-10" />
                        <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/5 relative z-10">
                            <Image
                                src="/images/about/1.png"
                                alt="About Me"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Floating elements matching Torkfolio */}
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 w-24 h-24 z-20">
                            <svg viewBox="0 0 63 64" fill="none" className="w-full h-full">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#C4EF17" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Right SideContent */}
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em]">
                        <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                            <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                        </svg>
                        About Me
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        UI/UX Design <br />
                        <span className="text-[#C4EF17]">Process</span>
                    </h2>
                    <p className="text-[#9FA0A6] text-lg leading-relaxed">
                        I am a UI/UX designer, and I’m very passionate and dedicated to my work. With 09 years experience as a professional.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C4EF17] text-2xl font-bold">
                                09
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Years</div>
                                <div className="text-[#9FA0A6]">Of Experience</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C4EF17] text-2xl font-bold">
                                98%
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Satisfied</div>
                                <div className="text-[#9FA0A6]">Clients Every Day</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Link href="#contact" className="trk-btn inline-flex font-bold !px-10 !py-[18px]">
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};
