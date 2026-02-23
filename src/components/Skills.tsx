import { Section } from "./Section";
import { skillsData } from "@/lib/data";

export const Skills = () => {
    return (
        <Section id="skills" className="py-20 bg-[#0A0A09] border-y border-white/5 overflow-hidden">
            <div className="flex gap-12 animate-marquee items-center whitespace-nowrap">
                {[...skillsData, ...skillsData].map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                        <span className="text-[32px] md:text-[44px] font-extrabold text-[#1A1A1A] group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
