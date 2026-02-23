"use client";
import { Play, Download } from "lucide-react";
import Image from "next/image";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { Button } from "./ui/Button";

export const Hero = () => {
    return (
        <Section className="min-h-[100vh] flex items-center pt-32 pb-24 relative overflow-hidden text-white">
            {/* Background glows matching Torkfolio */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#C4EF17] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#C4EF17] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10 px-4 md:px-0">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left z-10 lg:pl-4 relative flex flex-col items-center lg:items-start"
                >
                    <div className="inline-flex items-center gap-2 text-[#6B7FFF] font-medium text-[16px]">
                        Hey Hi! ðŸ‘‹
                    </div>

                    <h1 className="text-[44px] md:text-[70px] font-extrabold tracking-tighter text-white leading-[1] mt-4">
                        I&apos;m Oliver Noah <br />
                        <span className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                            <svg width="44" height="44" viewBox="0 0 63 64" fill="none">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                            <span className="text-[#C4EF17]">UI/UX</span> <span className="text-white">Designer</span>
                        </span>
                    </h1>

                    <div className="relative pt-4">
                        <p className="max-w-[480px] text-[18px] text-[#9FA0A6] leading-[1.6] mx-auto lg:mx-0 font-medium">
                            A blend of creativity, empathy, and technical expertise, I strive to design interfaces that not only look users at every interaction.
                        </p>
                        {/* Missing Blue Star below description */}
                        <div className="hidden lg:block absolute -bottom-16 left-0">
                            <svg width="35" height="35" viewBox="0 0 63 64" fill="none" className="opacity-80">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 pt-10 justify-center lg:justify-start items-center">
                        <Button href={contactInfo.cvLink} download>
                            Download CV <Download size={20} strokeWidth={2.5} className="ml-1" />
                        </Button>
                        <button className="flex items-center gap-4 group hover:opacity-80 transition-opacity text-white font-bold text-[16px]">
                            <span className="w-16 h-16 rounded-full bg-[#6B7FFF] flex items-center justify-center text-white group-hover:scale-105 transition-all shadow-[0_0_30px_rgba(107,127,255,0.4)]">
                                <Play size={24} fill="currentColor" className="ml-1" />
                            </span>
                            Intro Video
                        </button>
                    </div>
                </motion.div>

                {/* Avatar Image container mapped exactly */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end mt-20 lg:mt-0"
                >
                    <div className="relative w-[380px] h-[450px] md:w-[500px] md:h-[650px] flex items-end justify-center">
                        {/* More accurate paint blob SVG path */}
                        <div className="absolute top-[10%] left-[-10%] w-[120%] h-[95%] pointer-events-none -z-10 flex items-center justify-center">
                            <svg viewBox="0 0 400 350" className="w-[110%] h-[110%] rotate-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M350 100 C 350 100, 100 115, 60 125 C 20 135, 20 180, 60 185 C 100 190, 360 170, 370 170 C 400 170, 400 230, 370 230 C 340 230, 80 250, 50 255 C 20 260, 20 310, 50 315 C 80 320, 340 300, 350 300 C 380 300, 380 360, 350 365"
                                    stroke="#6B7FFF"
                                    strokeWidth="60"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Actual Image Person */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
                            <Image
                                src="/images/person.png"
                                alt="Oliver Noah Portrait"
                                width={550}
                                height={750}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>

                        {/* Floating Green Curly Arrow Top Left - Simplified path */}
                        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[5%] left-[0%] lg:left-[-10%] z-20 w-[80px] h-[80px]">
                            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                                <path d="M20 30 C 40 10, 80 20, 80 50 C 80 80, 40 90, 20 70 M 20 70 L 35 75 M 20 70 L 15 55" stroke="#C4EF17" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>

                        {/* Floating Green Star Right */}
                        <motion.div animate={{ y: [15, -15, 15], rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[30%] right-[-5%] lg:right-[-15%] z-20 w-[60px] h-[60px]">
                            <svg viewBox="0 0 63 64" fill="none" className="w-full h-full">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#C4EF17" />
                            </svg>
                        </motion.div>

                        {/* Floating Blue Star Bottom Left */}
                        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[-10%] lg:left-[-25%] z-20 w-[65px] h-[65px]">
                            <svg viewBox="0 0 63 64" fill="none" className="w-full h-full">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Infinite Scrolling Marquee Border Bottom */}
            <div className="absolute bottom-0 left-0 w-full border-t border-b border-[#C4EF17]/20 bg-[#0A0A09]/80 backdrop-blur-md py-6 z-20 overflow-hidden">
                <div className="flex gap-16 w-max animate-marquee items-center text-[#fbffed] text-[20px] font-bold tracking-[0.1em] uppercase">
                    {[1, 2].map((group) => (
                        <div key={group} className="flex gap-16 items-center">
                            <span>Art Design</span>
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none"><path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" /></svg>
                            <span>Dashboard</span>
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none"><path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#C4EF17" /></svg>
                            <span>App Design</span>
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none"><path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" /></svg>
                            <span>Mobile App</span>
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none"><path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#C4EF17" /></svg>
                            <span>UX Design</span>
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none"><path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" /></svg>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
