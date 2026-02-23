"use client";
import { motion } from "framer-motion";

export const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                className="absolute top-20 left-[10%] w-12 h-12 rounded-full border-2 border-white/5"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-[15%] w-8 h-8 rotate-45 border border-white/5"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-[5%] w-4 h-4 bg-white/5 rounded-full"
                animate={{
                    x: [0, 30, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute bottom-20 right-[20%] w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white/5 border-r-[10px] border-r-transparent"
                animate={{
                    rotate: [0, -45, 0],
                    y: [0, -15, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};
