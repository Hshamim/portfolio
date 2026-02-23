import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Wait, need utils for cn

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
    return (
        <section id={id} className={cn("py-20 px-4 sm:px-8 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
}
