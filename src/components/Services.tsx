"use client";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/data";
import { Button } from "./ui/Button";

export const Services = () => {
    return (
        <Section id="services" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
                {/* Left Side: Heading & Button */}
                <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 h-fit">
                    <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em]">
                        <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                            <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                        </svg>
                        Service
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        Exceptional UI/UX <br />
                        <span className="text-[#C4EF17]">Services</span>
                    </h2>
                    <p className="text-[#9FA0A6] text-lg leading-relaxed max-w-[450px]">
                        Experience excellence with our UI/UX services. From user research to seamless design implementation, we in crafting innovative solutions experiences and drive engagement for the users of business and services.
                    </p>
                    <Button href="#contact">
                        Hire Me
                    </Button>
                </div>

                {/* Vertical Divider for Desktop */}
                <div className="hidden lg:block lg:col-span-1 h-[600px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />

                {/* Right Side: List of Services */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                    {servicesData.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={service.id}
                            className="group flex items-center justify-between p-8 rounded-[16px] bg-[#121211] border border-white/5 hover:border-[#C4EF17] transition-all cursor-pointer"
                        >
                            <h3 className="text-[22px] md:text-[26px] font-bold text-white group-hover:text-white transition-colors">
                                {service.title}
                            </h3>

                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C4EF17] group-hover:text-[#0A0A09] group-hover:border-[#C4EF17] transition-all shrink-0">
                                <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Ornaments */}
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <path d="M 30 15 C 60 5, 80 25, 75 50 C 70 80, 35 90, 15 75 C -5 60, -5 25, 20 15" stroke="#C4EF17" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" />
                </svg>
            </div>
        </Section>
    );
};
