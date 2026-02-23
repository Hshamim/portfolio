"use client";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
    {
        role: "Senior UX Designer",
        company: "Apple Inc",
        period: "Jan 2021 - Present",
        description: "Leading the design of new features for iOS and macOS. Collaborating with multiple teams to deliver seamless user experiences.",
    },
    {
        role: "Web Developer",
        company: "Google",
        period: "Mar 2019 - Dec 2020",
        description: "Developed and maintained internal tools and web applications used by thousands of employees globally.",
    },
    {
        role: "Junior Designer",
        company: "Facebook",
        period: "Jun 2017 - Feb 2019",
        description: "Collaborated with cross-functional teams to design user interfaces for core social media features.",
    },
];

export const Experience = () => {
    return (
        <Section id="experience" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                            Skill
                        </div>
                        <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                            My <span className="text-[#C4EF17]">Experience</span>
                        </h2>
                    </div>
                    <Link href="#contact" className="trk-btn !px-8 !py-4 font-bold">
                        Contact Me
                    </Link>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[30px] md:left-[250px] top-4 bottom-0 w-[1px] bg-white/10" />

                    <div className="space-y-12">
                        {[
                            {
                                period: "2025 to Present",
                                company: "TRK TTT Studios",
                                role: "Senior Designer",
                                desc: "As a senior UI/UX designer, I bring over 09 years of experience in crafting experiences.",
                                color: "#6B7FFF"
                            },
                            {
                                period: "Dec 2018 to 2021",
                                company: "Whitecap Canada",
                                role: "UI/UX Designer",
                                desc: "I am UI/UX dedicated to creating seamless digital at user satisfaction.",
                                color: "#C4EF17"
                            },
                            {
                                period: "August 2015 to 2018",
                                company: "Packetilabs Ltd",
                                role: "Web Designer",
                                desc: "Specializing in translating ideas into visually stunning and functional websites.",
                                color: "#6B7FFF"
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-24 pl-12 md:pl-0">
                                {/* Left Side: Date & Company */}
                                <div className="md:w-[200px] flex flex-col justify-start pt-2">
                                    <span className="text-white/60 text-sm mb-2">{item.period}</span>
                                    <span className="text-white font-bold text-lg">{item.company}</span>
                                </div>

                                {/* Timeline Marker */}
                                <div className="absolute left-[30px] md:left-[250px] top-4 -translate-x-1/2 z-20">
                                    <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                                        <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill={item.color} />
                                    </svg>
                                </div>

                                {/* Right Side: Content Card */}
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group p-8 md:p-10 rounded-[20px] bg-[#121211] border border-white/5 hover:border-[#C4EF17]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                                    >
                                        <div>
                                            <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2">{item.role}</h3>
                                            <p className="text-[#9FA0A6] text-lg max-w-xl">{item.desc}</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#C4EF17] group-hover:text-[#0A0A09] group-hover:border-[#C4EF17] transition-all shrink-0">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
