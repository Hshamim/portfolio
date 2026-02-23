import { Section } from "./Section";

const skills = [
    { name: "Framer", color: "#6B7FFF" },
    { name: "Figma", color: "#C4EF17" },
    { name: "Photoshop", color: "#6B7FFF" },
    { name: "React", color: "#C4EF17" },
    { name: "Next.js", color: "#6B7FFF" },
    { name: "Tailwind", color: "#C4EF17" },
    { name: "TypeScript", color: "#6B7FFF" },
    { name: "Node.js", color: "#C4EF17" },
];

export const Skills = () => {
    return (
        <Section id="skills" className="py-20 bg-[#0A0A09] border-y border-white/5 overflow-hidden">
            <div className="flex gap-12 animate-marquee items-center whitespace-nowrap">
                {[...skills, ...skills].map((skill, index) => (
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
