"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id={id}
            className={cn("py-24 px-4 sm:px-8 max-w-7xl mx-auto", className)}
        >
            {children}
        </motion.section>
    );
}
