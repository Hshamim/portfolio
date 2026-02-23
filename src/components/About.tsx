"use client";
import { Section } from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { DiamondStar, SparkleIcon } from "./ui/Decorations";
import { useEffect, useRef, useState } from "react";

function CounterNumber({ start, end, suffix = "" }: { start: number; end: number; suffix?: string }) {
    const [val, setVal] = useState(start);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    obs.disconnect();
                    let cur = start;
                    const step = Math.ceil((end - start) / 60);
                    const timer = setInterval(() => {
                        cur = Math.min(cur + step, end);
                        setVal(cur);
                        if (cur >= end) clearInterval(timer);
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [start, end]);
    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

export const About = () => {
    return (
        <Section id="about" className="py-24 bg-color relative overflow-hidden">
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

                        {/* Floating Counter Cards */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute bottom-10 -left-10 z-20 bg-[#121211] p-6 rounded-[20px] border border-white/10 shadow-2xl hidden md:block"
                        >
                            <h3 className="text-3xl font-bold text-white mb-1">
                                <CounterNumber start={1920} end={2000} suffix="+" />
                            </h3>
                            <p className="text-[#9FA0A6] text-sm">Clients all Over the World</p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-10 -right-10 z-20 bg-[#121211] p-6 rounded-[20px] border border-white/10 shadow-2xl hidden md:block"
                        >
                            <h3 className="text-3xl font-bold text-white mb-1">
                                <CounterNumber start={0} end={98} suffix="%" />
                            </h3>
                            <p className="text-[#9FA0A6] text-sm">Satisfied Customers!</p>
                        </motion.div>
                    </div>
                </div>

                {/* Right SideContent */}
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em]">
                        <SparkleIcon />
                        About Me
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        <span className="text-[#C4EF17]">UI/UX</span> Design <br />
                        Process
                    </h2>
                    <p className="text-[#9FA0A6] text-lg leading-relaxed">
                        I am a UI/UX designer, and I’m very passionate and dedicated to my work. With 09 years experience as a professional.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a09] border border-white/5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1a1a19]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="21" height="17" rx="2" stroke="#C4EF17" strokeWidth="1.5" /><path d="M2 8l10.5 7L23 8" stroke="#C4EF17" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </div>
                            <div>
                                <p className="text-[#9FA0A6] text-xs uppercase tracking-wider font-bold">Email</p>
                                <a href="mailto:hello@torkfolio.com" className="text-white font-bold hover:text-[#C4EF17] transition-colors">hello@torkfolio.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a09] border border-white/5">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1a1a19]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 4a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1-2.5h-8L7.5 4H6z" stroke="#C4EF17" strokeWidth="1.5" /><circle cx="12.5" cy="12.5" r="3" stroke="#C4EF17" strokeWidth="1.5" /></svg>
                            </div>
                            <div>
                                <p className="text-[#9FA0A6] text-xs uppercase tracking-wider font-bold">Phone</p>
                                <a href="tel:+1234567890" className="text-white font-bold hover:text-[#C4EF17] transition-colors">+1 (234) 567 890</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button href="#contact">
                            Let's Work
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background Shape */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
                <DiamondStar color="#6B7FFF" size={30} />
            </div>
        </Section>
    );
};
