"use client";
import { Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/lib/data";

export const Contact = () => {
    return (
        <Section id="contact" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div>
                        <div className="flex items-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                            <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                                <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                            </svg>
                            Contact Me
                        </div>
                        <h2 className="text-[44px] md:text-[70px] font-extrabold text-white leading-[1.1]">
                            Let&apos;s <br />
                            <span className="text-[#C4EF17]">Connect</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-[#121211] border border-white/5 flex items-center justify-center text-[#C4EF17] hover:border-[#C4EF17]/30 transition-all group">
                                <Mail size={32} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <p className="text-[#9FA0A6] text-sm uppercase tracking-widest font-bold mb-1">Email</p>
                                <a href={`mailto:${contactInfo.email}`} className="text-2xl md:text-3xl font-extrabold text-white hover:text-[#C4EF17] transition-colors">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-[#121211] border border-white/5 flex items-center justify-center text-[#6B7FFF] hover:border-[#6B7FFF]/30 transition-all group">
                                <Phone size={32} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <p className="text-[#9FA0A6] text-sm uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-2xl md:text-3xl font-extrabold text-white hover:text-[#C4EF17] transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                        <p className="text-[#9FA0A6] font-bold uppercase tracking-widest text-sm mb-6">Socials</p>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="px-8 py-4 rounded-full border border-white/5 bg-[#121211] text-white font-bold hover:bg-[#C4EF17] hover:text-[#0A0A09] hover:border-[#C4EF17] transition-all"
                                >
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#121211] p-8 md:p-12 rounded-[40px] border border-white/5"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-6 py-5 rounded-[20px] bg-[#0A0A09] border border-white/5 focus:outline-none focus:border-[#C4EF17]/50 text-white transition-all placeholder:text-[#9FA0A6]/50 font-medium"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-6 py-5 rounded-[20px] bg-[#0A0A09] border border-white/5 focus:outline-none focus:border-[#C4EF17]/50 text-white transition-all placeholder:text-[#9FA0A6]/50 font-medium"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-6 py-5 rounded-[20px] bg-[#0A0A09] border border-white/5 focus:outline-none focus:border-[#C4EF17]/50 text-white transition-all placeholder:text-[#9FA0A6]/50 font-medium"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full px-6 py-5 rounded-[20px] bg-[#0A0A09] border border-white/5 focus:outline-none focus:border-[#C4EF17]/50 text-white transition-all resize-none placeholder:text-[#9FA0A6]/50 font-medium"
                        ></textarea>

                        <button
                            type="submit"
                            className="trk-btn w-full !py-5 !rounded-[20px] font-bold text-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};
