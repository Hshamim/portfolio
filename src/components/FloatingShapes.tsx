"use client";
import { motion } from "framer-motion";

export const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                className="absolute top-20 left-[10%] w-12 h-12 rounded-full border-2 border-white/20"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-[15%] w-8 h-8 rotate-45 border border-white/20"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-[5%] w-4 h-4 bg-white/20 rounded-full"
                animate={{
                    x: [0, 30, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute bottom-20 right-[20%] w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white/20 border-r-[10px] border-r-transparent"
                animate={{
                    rotate: [0, -45, 0],
                    y: [0, -15, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};
