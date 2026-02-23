"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A09]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="relative w-20 h-20">
                             <svg className="animate-spin w-full h-full" viewBox="0 0 50 50">
                                <circle
                                    className="opacity-25"
                                    cx="25"
                                    cy="25"
                                    r="20"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeLinecap="round"
                                    color="#6B7FFF"
                                />
                                <circle
                                    className="opacity-75"
                                    cx="25"
                                    cy="25"
                                    r="20"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeLinecap="round"
                                    color="#C4EF17"
                                    strokeDasharray="80"
                                    strokeDashoffset="60"
                                />
                            </svg>
                        </div>
                        <h2 className="text-white text-2xl font-bold tracking-widest uppercase">
                            Torkfolio
                        </h2>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
