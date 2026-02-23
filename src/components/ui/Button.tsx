import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    href?: string;
    className?: string;
    download?: boolean;
}

export const Button = ({ children, variant = "primary", href, className, download, ...props }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#C4EF17] text-[#0A0A09] hover:bg-[#d4ff20] shadow-[0_4px_20px_rgba(196,239,23,0.2)] hover:shadow-[0_4px_25px_rgba(196,239,23,0.4)]",
        outline: "bg-transparent border-2 border-[#C4EF17] text-[#C4EF17] hover:bg-[#C4EF17] hover:text-[#0A0A09]",
        ghost: "bg-transparent text-white hover:text-[#C4EF17]"
    };

    const combinedStyles = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={combinedStyles} download={download}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
};
