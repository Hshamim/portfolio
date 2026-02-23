"use client";
import { Section } from "./Section";
import { Quote } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export const Testimonials = () => {
    return (
        <Section id="testimonials" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                        <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                            <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                        </svg>
                        Testimonial
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        What My <span className="text-[#C4EF17]">Clients</span> Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonialsData.map((item, index) => (
                        <div key={item.id} className="p-10 rounded-[40px] bg-[#121211] border border-white/5 relative group hover:border-[#C4EF17]/30 transition-all">
                            <div className="absolute top-8 right-10 text-[#C4EF17]/10 group-hover:text-[#C4EF17]/20 transition-colors">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H17.017C16.4647 18 16.017 18.4477 16.017 19V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01703 16H8.01703C8.56931 16 9.01703 15.5523 9.01703 15V9C9.01703 8.44772 8.56931 8 8.01703 8H4.01703C3.46475 8 3.01703 8.44772 3.01703 9V12C3.01703 12.5523 2.56931 13 2.01703 13H0.0170288C-0.535256 13 -0.982971 12.5523 -0.982971 12V9C-0.982971 7.34315 0.360176 6 2.01703 6H8.01703C9.67388 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67388 18 8.01703 18H6.01703C5.46475 18 5.01703 18.4477 5.01703 19V21H3.017Z" /></svg>
                            </div>
                            <p className="text-lg text-[#9FA0A6] leading-relaxed mb-8 relative z-10">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full border border-white/5 overflow-hidden">
                                    <div className="w-full h-full bg-[#6B7FFF]/20" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl">{item.name}</h4>
                                    <p className="text-[#9FA0A6]">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
