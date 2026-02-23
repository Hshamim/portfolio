"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { pricingData } from "@/lib/data";

export const Pricing = () => {
    return (
        <Section id="pricing" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                        <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                            <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                        </svg>
                        Pricing Plan
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        Pricing Your Best <br />
                        <span className="text-[#C4EF17]">Pricing</span> Plan
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {pricingData.map((plan, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={plan.id}
                            className={`relative p-8 md:p-10 rounded-[40px] bg-[#121211] border group hover:border-[#C4EF17]/30 transition-all flex flex-col h-full ${plan.active ? 'border-[#C4EF17]/50 shadow-2xl scale-105 z-10' : 'border-white/5'}`}
                        >
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-end gap-1 mt-4">
                                    <span className="text-6xl font-extrabold text-[#C4EF17] leading-none">{plan.price}</span>
                                    <span className="text-[#9FA0A6] font-semibold text-lg pb-1">{plan.unit}</span>
                                </div>
                            </div>

                            <div className="w-full h-[1px] bg-white/5 mb-8" />

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-[#9FA0A6] font-medium">
                                        <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center mr-3 shrink-0 group-hover:border-[#C4EF17]/30 transition-colors">
                                            <Check className="text-[#6B7FFF] w-3 h-3" strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`trk-btn w-full !rounded-full !py-4 font-bold transition-all ${plan.active ? 'bg-[#C4EF17] text-[#0A0A09]' : 'trk-btn-outline !bg-transparent text-[#C4EF17] border-[#C4EF17]/30 hover:!bg-[#C4EF17] hover:!text-[#0A0A09]'}`}
                            >
                                Buy Now
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
