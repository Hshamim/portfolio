"use client";
import { Play, Download } from "lucide-react";
import Image from "next/image";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { Button } from "./ui/Button";
import { DiamondStar } from "./ui/Decorations";

const marqueeItems = ["Art Design", "Dashboard", "App Design", "Mobile App", "UX Design", "Wireframe", "Branding", "Web Design"];

export const Hero = () => {
    return (
        <Section className="min-h-[100vh] flex items-center pt-32 pb-24 relative overflow-hidden text-white bg-grid">
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

                    <h1 className="text-[44px] md:text-[70px] font-extrabold tracking-tighter text-white leading-[1] mt-4 relative">
                        {/* Loop Arrow Decoration */}
                        <div className="absolute -top-12 left-0 hidden lg:block">
                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5" stroke="#C4EF17" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M20 8l5-5M25 3h-5M25 3v5" stroke="#C4EF17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        I&apos;m Oliver Noah <br />
                        <span className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                            <DiamondStar color="#6B7FFF" size={48} />
                            <span className="text-[#C4EF17]">UI/UX</span> <span className="text-white">Designer</span>
                        </span>
                    </h1>

                    <div className="relative pt-4">
                        <p className="max-w-[480px] text-[18px] text-[#9FA0A6] leading-[1.6] mx-auto lg:mx-0 font-medium">
                            A blend of creativity, empathy, and technical expertise, I strive to design interfaces that not only look users at every interaction.
                        </p>
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

                {/* Avatar Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end mt-20 lg:mt-0"
                >
                    <div className="relative w-[380px] h-[450px] md:w-[500px] md:h-[650px] flex items-end justify-center">
                        {/* Paint Blob */}
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

                        {/* Floating Shapes */}
                        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[5%] left-[0%] lg:left-[-10%] z-20">
                            <DiamondStar color="#C4EF17" size={64} />
                        </motion.div>

                        <motion.div animate={{ y: [15, -15, 15], rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[30%] right-[-5%] lg:right-[-15%] z-20">
                             <svg width="110" height="116" viewBox="0 0 177 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M88.5 0V187M0 93.5H177M26 26L151 161M151 26L26 161" stroke="#6B7FFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                            </svg>
                        </motion.div>

                        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[-10%] lg:left-[-25%] z-20">
                            <DiamondStar color="#6B7FFF" size={40} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Marquee Section */}
            <div className="absolute bottom-0 left-0 w-full border-t border-b border-[#C4EF17]/20 bg-[#0A0F02] py-5 z-20 overflow-hidden">
                <div className="flex gap-12 w-max animate-marquee items-center text-[#fbeff5] text-[18px] font-bold tracking-[0.08em] uppercase">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span>{item}</span>
                            <DiamondStar color={i % 2 === 0 ? "#6B7FFF" : "#C4EF17"} size={20} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
