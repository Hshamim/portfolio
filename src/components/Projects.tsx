"use client";
import { Section } from "./Section";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { projectsData } from "@/lib/data";

export const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Section id="projects" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                            Portfolio
                        </div>
                        <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                            My Recent <span className="text-[#C4EF17]">Portfolio</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 rounded-full border border-white/10 bg-[#121211] text-white flex items-center justify-center hover:bg-[#C4EF17] hover:text-[#0A0A09] hover:border-[#C4EF17] transition-all"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 rounded-full border border-white/10 bg-[#121211] text-white flex items-center justify-center hover:bg-[#C4EF17] hover:text-[#0A0A09] hover:border-[#C4EF17] transition-all"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="min-w-[320px] md:min-w-[450px] snap-center group"
                        >
                            <div className={`w-full h-[300px] md:h-[350px] rounded-[32px] bg-[#121211] border border-white/5 mb-6 overflow-hidden relative flex items-center justify-center`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-[#0A0A09]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-10">
                                    <div className="w-16 h-16 rounded-full bg-[#C4EF17] flex items-center justify-center text-[#0A0A09]">
                                        <ArrowRight size={28} className="-rotate-45" />
                                    </div>
                                </div>
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-5 py-2 rounded-full bg-[#0A0A09]/60 backdrop-blur-md text-[#6B7FFF] text-xs font-bold uppercase tracking-wider border border-white/5">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#C4EF17] transition-colors ml-2">
                                {project.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </Section>
    );
};
