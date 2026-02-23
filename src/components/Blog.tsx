import Link from "next/link";
import { Section } from "./Section";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        title: "How to Design a Perfect UI",
        date: "Oct 12, 2023",
        excerpt: "Learn the robust rules of UI design and how to apply them to your projects.",
        category: "Design",
    },
    {
        title: "The Future of Web Development",
        date: "Nov 05, 2023",
        excerpt: "Explore the latest trends and technologies shaping the future of the web.",
        category: "Development",
    },
    {
        title: "Mastering Tailwind CSS",
        date: "Dec 10, 2023",
        excerpt: "A comprehensive guide to building beautiful layouts with Tailwind CSS.",
        category: "Coding",
    },
];

export const Blog = () => {
    return (
        <Section id="blog" className="py-24 bg-[#0A0A09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#6B7FFF] font-semibold text-[16px] uppercase tracking-[0.2em] mb-4">
                        <svg width="24" height="24" viewBox="0 0 63 64" fill="none">
                            <path d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z" fill="#6B7FFF" />
                        </svg>
                        Blog
                    </div>
                    <h2 className="text-[44px] md:text-[54px] font-extrabold text-white leading-[1.1]">
                        Every Single <br />
                        <span className="text-[#C4EF17]">Latest</span> Blog
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group overflow-hidden">
                            <div className="relative h-[250px] rounded-[32px] overflow-hidden bg-[#121211] border border-white/5 mb-6">
                                <div className="absolute inset-0 bg-[#C4EF17]/5 group-hover:bg-[#C4EF17]/10 transition-colors" />
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-2 rounded-full bg-[#0A0A09] text-white text-xs font-bold uppercase tracking-wider border border-white/5">
                                        {post.date}
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#C4EF17] flex items-center justify-center text-[#0A0A09]">
                                        <ArrowRight size={24} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="flex items-center gap-2 text-[#6B7FFF] text-xs font-bold uppercase tracking-widest mb-3">
                                    <span>{post.category}</span>
                                </div>
                                <h4 className="text-[22px] md:text-[24px] font-extrabold text-white group-hover:text-[#C4EF17] transition-colors leading-tight">
                                    <Link href="#">{post.title}</Link>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
