import { Facebook, Github, Linkedin, Twitter, LucideIcon } from "lucide-react";

// ─── Interfaces ─────────────────────────────────────────────────────────────

export interface Service {
    id: string;
    title: string;
    content: string;
}

export interface Project {
    id: number;
    tag: string;
    title: string;
    image: string;
}

export interface Experience {
    id: string;
    period: string;
    company: string;
    role: string;
    description: string;
    active: boolean;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    unit: string;
    active: boolean;
    badge: string | null;
    features: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    img: string;
    text: string;
    stars: number;
}

export interface BlogPost {
    id: number;
    tag: string;
    title: string;
    date: string;
    image: string;
}

export interface NavLink {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

export interface SocialLink {
    name: string;
    href: string;
    icon?: any; // LucideIcon type can be tricky with server/client boundary if not handled well, keeping loose for now or using string names if dynamic
}

export interface ContactInfo {
    email: string;
    phone: string;
    address?: string;
    cvLink: string;
}

export interface Skill {
    name: string;
    color: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
    { name: "Home", href: "#home", hasDropdown: true },
    { name: "About Me", href: "#about", hasDropdown: false },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Portfolio", href: "#portfolio", hasDropdown: true }, // Changed "Pages" to "Portfolio" based on Footer
    { name: "Contact Us", href: "#contact", hasDropdown: false },
];

export const socialLinks: SocialLink[] = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Github", href: "#" },
];

export const contactInfo: ContactInfo = {
    email: "hello@olivernoah.com",
    phone: "+1 (234) 567 890",
    cvLink: "/cv.pdf",
};

export const skillsData: Skill[] = [
    { name: "Framer", color: "#6B7FFF" },
    { name: "Figma", color: "#C4EF17" },
    { name: "Photoshop", color: "#6B7FFF" },
    { name: "React", color: "#C4EF17" },
    { name: "Next.js", color: "#6B7FFF" },
    { name: "Tailwind", color: "#C4EF17" },
    { name: "TypeScript", color: "#6B7FFF" },
    { name: "Node.js", color: "#C4EF17" },
];

export const servicesData: Service[] = [
    {
        id: "faq1",
        title: "Visual Design",
        content: "Transform your ideas into stunning visual experiences with our expert design services.",
    },
    {
        id: "faq2",
        title: "Web Design",
        content: "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
    },
    {
        id: "faq3",
        title: "Mobile App Design",
        content: "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
    },
    {
        id: "faq4",
        title: "UI/UX Design",
        content: "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
    },
];

export const projectsData: Project[] = [
    { id: 1, tag: "Mobile App", title: "Creative Mobile App Experience", image: "/images/portfolio/1.png" },
    { id: 2, tag: "Web Development", title: "Dashboard Design System", image: "/images/portfolio/2.png" },
    { id: 3, tag: "Branding", title: "Brand Identity & Visual Design", image: "/images/portfolio/3.png" },
];

export const experienceData: Experience[] = [
    {
        id: "exp1",
        period: "2025 to Present",
        company: "TRK TTT Studios",
        role: "Senior Designer",
        description: "As a senior UI/UX designer, I bring over 09 years of experience in crafting experiences.",
        active: false,
    },
    {
        id: "exp2",
        period: "Dec 2018 to 2021",
        company: "Whitecap Canada",
        role: "UI/UX Designer",
        description: "I am Ui/Ux dedicated to creating seamless digital at user satisfaction.",
        active: true,
    },
    {
        id: "exp3",
        period: "August 2015 to 2018",
        company: "Packetilabs Ltd",
        role: "Web Designer",
        description: "I specialize in translating ideas into visually stunning and functional websites.",
        active: false,
    },
    {
        id: "exp4",
        period: "July 2013 to 2015",
        company: "Sagebrush",
        role: "Junior Designer",
        description: "I am enthusiastic about learning and honing my skills in the dynamic field of design.",
        active: false,
    },
];

export const pricingData: PricingPlan[] = [
    {
        id: "plan1",
        name: "Hourly Basis",
        price: "$20",
        unit: "/Hourly",
        active: false,
        badge: null,
        features: ["UI UX Design", "Design Customization", "Design with Figma", "Multipage Design", "Support 6 months"]
    },
    {
        id: "plan2",
        name: "Full Time",
        price: "$3,000",
        unit: "/Monthly",
        active: true,
        badge: "Best Value",
        features: ["UI UX Design", "Design Customization", "Design with Figma", "Multipage Design", "Support 6 months"]
    },
    {
        id: "plan3",
        name: "Part Time",
        price: "$1,000",
        unit: "/Monthly (Minimum)",
        active: false,
        badge: null,
        features: ["UI UX Design", "Design Customization", "Design with Figma", "Multipage Design", "Support 6 months"]
    },
];

export const testimonialsData: Testimonial[] = [
    {
        id: "test1",
        name: "Sarah Johnson",
        role: "Product Manager",
        img: "/images/person.png",
        text: "Working with Oliver has been an absolute pleasure. His attention to detail and creative approach transformed our product's user experience completely.",
        stars: 5,
    },
    {
        id: "test2",
        name: "Mark Williams",
        role: "Startup Founder",
        img: "/images/person.png",
        text: "Oliver delivered exceptional work on our mobile app design. The interface is intuitive, beautiful, and our users love it.",
        stars: 5,
    },
    {
        id: "test3",
        name: "Emily Chen",
        role: "Marketing Director",
        img: "/images/person.png",
        text: "The redesign project exceeded all our expectations. Professional, creative, and always delivers on time.",
        stars: 5,
    },
];

export const blogData: BlogPost[] = [
    { id: 1, tag: "Design", title: "The Importance of User-Centered Design", date: "June 22, 2025", image: "/images/blog/1.png" },
    { id: 2, tag: "Mission", title: "The Role of Prototyping in UI/UX Design", date: "June 22, 2025", image: "/images/blog/2.png" },
    { id: 3, tag: "Inspiration", title: "The Essentials of User Research in UI/UX", date: "June 22, 2025", image: "/images/blog/3.png" },
];
