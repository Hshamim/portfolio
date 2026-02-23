"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// ─── Preloader ─────────────────────────────────────────────────────────────
function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div className="preloader__loading" />
        <div className="preloader__thumb">
          <Image src="/images/logo/logo.png" alt="preloader" width={122} height={122} priority />
        </div>
      </div>
    </div>
  );
}

// ─── AOS-like scroll-animation hook ────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0) translateX(0)";
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      const aosType = el.getAttribute("data-aos");
      (el as HTMLElement).style.transition = `opacity 0.7s ease, transform 0.7s ease`;
      (el as HTMLElement).style.opacity = "0";
      if (aosType === "fade-right") {
        (el as HTMLElement).style.transform = "translateX(-40px)";
      } else if (aosType === "fade-left") {
        (el as HTMLElement).style.transform = "translateX(40px)";
      } else {
        (el as HTMLElement).style.transform = "translateY(30px)";
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

// ─── Counter hook ───────────────────────────────────────────────────────────
function CounterNumber({ start, end, suffix = "" }: { start: number; end: number; suffix?: string }) {
  const [val, setVal] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          obs.disconnect();
          let cur = start;
          const step = Math.ceil((end - start) / 60);
          const timer = setInterval(() => {
            cur = Math.min(cur + step, end);
            setVal(cur);
            if (cur >= end) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start, end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── Diamond star SVG ──────────────────────────────────────────────────────
const DiamondStar = ({ color = "#C4EF17", size = 64 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z"
      fill={color}
    />
  </svg>
);

// ─── Sparkle icon SVG ─────────────────────────────────────────────────────
const SparkleIcon = () => (
  <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 34C16.467 24.6227 9.09241 17.0315 0 17.0315C9.11269 17.0315 16.5 9.40615 16.5 0C16.5329 9.37729 23.9076 16.9685 33 16.9685C23.8872 16.9685 16.5 24.5939 16.5 34Z"
      fill="#6B7FFF"
    />
  </svg>
);

// ─── Services Accordion ────────────────────────────────────────────────────
const servicesData = [
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

function ServicesAccordion() {
  const [open, setOpen] = useState("faq1");
  return (
    <div className="accordion" id="serviceAccordion">
      {servicesData.map((item) => (
        <div className="accordion-item service__accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading-${item.id}`}>
            <button
              className={`accordion-button service__accordion-btn${open === item.id ? "" : " collapsed"}`}
              type="button"
              onClick={() => setOpen(open === item.id ? "" : item.id)}
              aria-expanded={open === item.id}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={item.id}
            className={`accordion-collapse collapse${open === item.id ? " show" : ""}`}
          >
            <div className="accordion-body service__accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Testimonials Slider ──────────────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    img: "/images/person.png",
    text: "Working with Oliver has been an absolute pleasure. His attention to detail and creative approach transformed our product's user experience completely.",
    stars: 5,
  },
  {
    name: "Mark Williams",
    role: "Startup Founder",
    img: "/images/person.png",
    text: "Oliver delivered exceptional work on our mobile app design. The interface is intuitive, beautiful, and our users love it.",
    stars: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    img: "/images/person.png",
    text: "The redesign project exceeded all our expectations. Professional, creative, and always delivers on time.",
    stars: 5,
  },
];

function TestimonialsSlider() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[cur];
  return (
    <div className="row g-4 justify-content-between">
      <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
        <div className="section-header">
          <div className="subtitle">
            <span><SparkleIcon /></span> Testimonial
          </div>
          <h2>
            Feedback from <span>Clients</span>
          </h2>
          <p className="mb-0">
            Real feedback from clients who trust my work to deliver outstanding results.
          </p>
        </div>
        <div className="testimonial__nav mt-4 d-flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`testimonial__nav-btn${i === cur ? " active" : ""}`}
              style={{
                width: 40,
                height: 6,
                borderRadius: 3,
                border: "none",
                background: i === cur ? "#C4EF17" : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
        <div className="testimonial__item testimonial__item--style1">
          <div className="testimonial__item-inner">
            <div className="testimonial__item-author d-flex align-items-center gap-3 mb-4">
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: 60, height: 60, flexShrink: 0 }}
              >
                <Image src={t.img} alt={t.name} width={60} height={60} className="object-cover w-100 h-100" />
              </div>
              <div>
                <h5 className="mb-0">{t.name}</h5>
                <small style={{ color: "#9fa0a6" }}>{t.role}</small>
              </div>
            </div>
            <div className="d-flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, i) => (
                <i key={i} className="fa-solid fa-star" style={{ color: "#C4EF17", fontSize: 14 }} />
              ))}
            </div>
            <p className="mb-0">{t.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`header-section header-section--style2${sticky ? " sticky-active" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: sticky ? "rgba(10,10,9,0.95)" : "transparent",
        backdropFilter: sticky ? "blur(12px)" : "none",
        borderBottom: sticky ? "1px solid rgba(196,239,23,0.1)" : "none",
      }}
    >
      <div className="container">
        <div className="header-holder">
          <div className="header-menu menu-sticky">
            <div className="header-wrapper">
              <div className="logo">
                <a href="#home">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={198}
                    height={50}
                    style={{ width: "auto", height: 40 }}
                  />
                </a>
              </div>
              <div className="menu-area">
                <ul className="menu menu--style1">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Me</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="header-btn d-none d-md-block">
                <a href="#contact" className="trk-btn trk-btn--outline">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Marquee ───────────────────────────────────────────────────────────────
const marqueeItems = ["Art Design", "Dashboard", "App Design", "Mobile App", "UX Design", "Wireframe", "Branding", "Web Design"];

function Marquee() {
  return (
    <section className="services-category">
      <div
        style={{
          overflow: "hidden",
          background: "#0a0f02",
          borderTop: "1px solid rgba(196,239,23,0.15)",
          borderBottom: "1px solid rgba(196,239,23,0.15)",
          padding: "18px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            width: "max-content",
            animation: "marqueeScroll 30s linear infinite",
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                color: "#fbeff5",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {item}
              <DiamondStar color={i % 2 === 0 ? "#6B7FFF" : "#C4EF17"} size={20} />
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Preloader />

      {/* Scroll to top */}
      <ScrollTopBtn />

      {/* Navbar */}
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="home" className="banner banner--style1 bg-grid">
        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  style={{ position: "relative" }}
                >
                  <div className="banner__content-shape">
                    {/* Loop arrow */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5" stroke="#C4EF17" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M20 8l5-5M25 3h-5M25 3v5" stroke="#C4EF17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="banner__content-subtitle">
                    <p>Hey Hi! 👋</p>
                  </div>
                  <h1 className="banner__content-heading">
                    I&apos;m Oliver Noah
                    <br />
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <DiamondStar color="#6B7FFF" size={48} />
                      <span style={{ color: "#C4EF17" }}> UI/UX </span>
                    </span>Designer
                  </h1>
                  <p className="banner__content-moto">
                    A blend of creativity, empathy, and technical expertise, I strive to design
                    interfaces that not only look users at every interaction.
                  </p>
                  <div className="banner__btn-group btn-group">
                    <a className="trk-btn trk-btn--primary" href="/images/about/cv.pdf" download>
                      Download CV <span><i className="fa-solid fa-download" /></span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=k2maqlyUuVw"
                      className="play-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="play-icon"><i className="fa-solid fa-play" /></span>
                      Intro Video
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/banner/home1/1.png"
                    alt="banner-thumb"
                    className="dark"
                    width={567}
                    height={676}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <DiamondStar color="#C4EF17" size={64} />
          </span>
          <span className="banner__shape-item banner__shape-item--2">
            {/* Sixline asterisk */}
            <svg width={110} height={116} viewBox="0 0 177 187" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M88.5 0V187M0 93.5H177M26 26L151 161M151 26L26 161" stroke="#6B7FFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            </svg>
          </span>
          <span className="banner__shape-item banner__shape-item--3">
            <DiamondStar color="#6B7FFF" size={40} />
          </span>
        </div>

        <div className="overlay overlay--bottom-left" />
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <Marquee />

      {/* ── About ─────────────────────────────────────────────────── */}
      <section id="about" className="about about--style1 padding-top padding-bottom">
        <div className="container">
          <div className="about__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <div
                  className="about__thumb pe-lg-5"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="about__thumb-inner">
                    <div className="about__thumb-image floating-content">
                      <Image
                        className="dark"
                        src="/images/about/1.png"
                        alt="about-image"
                        width={470}
                        height={571}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div
                        className="floating-content__bottom-left"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <div className="floating-content__item">
                          <h3>
                            <CounterNumber start={1920} end={2000} />+
                          </h3>
                          <p>Clients all Over the World</p>
                        </div>
                      </div>
                      <div
                        className="floating-content__top-right"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <div className="floating-content__item">
                          <h3>
                            {" "}<CounterNumber start={40} end={98} />%
                          </h3>
                          <p>Satisfied Customers !</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  className="about__content gradient-border active"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="section-header">
                    <div className="subtitle">
                      <span><SparkleIcon /></span> About Me
                    </div>
                    <h2>
                      <span>UI/UX</span> Design Process
                    </h2>
                    <p className="mb-0">
                      I am a UI/UX designer, and I&apos;m very passionate and dedicated to my work.
                      With 09 years experience as a professional.
                    </p>
                  </div>
                  <div className="contact-info d-flex flex-wrap gap-4">
                    <div className="contact-info__item position-relative">
                      <div className="contact-info__item-thumb">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><rect x="2" y="4" width="21" height="17" rx="2" stroke="#C4EF17" strokeWidth="1.5" /><path d="M2 8l10.5 7L23 8" stroke="#C4EF17" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </div>
                      <div className="contact-info__item-content">
                        <p>Email</p>
                        <h6>
                          <a href="mailto:hello@torkfolio.com" className="text-inherit stretched-link">
                            hello@torkfolio.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-info__item position-relative">
                      <div className="contact-info__item-thumb">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M6 4a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1-2.5h-8L7.5 4H6z" stroke="#C4EF17" strokeWidth="1.5" /><circle cx="12.5" cy="12.5" r="3" stroke="#C4EF17" strokeWidth="1.5" /></svg>
                      </div>
                      <div className="contact-info__item-content">
                        <p>Phone</p>
                        <h6>
                          <a href="tel:+77022444055" className="text-inherit stretched-link">
                            +77 022 444 05 05
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="btn-group mt-65">
                    <a href="#contact" className="trk-btn trk-btn--primary">
                      Let&apos;s Work
                    </a>
                    <a className="trk-btn trk-btn--outline" href="/images/about/cv.pdf" download>
                      Download CV <span><i className="fa-solid fa-download" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__shape">
          <span className="about__shape-item about__shape-item--1">
            <DiamondStar color="#6B7FFF" size={25} />
          </span>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section id="services" className="services padding-top padding-bottom bg-grid">
        <div className="container">
          <div
            className="services__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="sevice__content">
                  <div className="section-header">
                    <div className="subtitle">
                      <span><SparkleIcon /></span> Service
                    </div>
                    <h2>
                      Exceptional UI/UX <span> Services </span>
                    </h2>
                    <p>
                      Experience excellence with our UI/UX services. From user research to seamless
                      design implementation, we in crafting innovative solutions experiences and
                      drive engagement for the users of business and services.
                    </p>
                  </div>
                  <a href="#contact" className="trk-btn trk-btn--primary">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <ServicesAccordion />
              </div>
            </div>
          </div>
        </div>

        <div className="overlay overlay--bottom-left" />
        <div className="services__shape">
          <span className="services__shape-item services__shape-item--1">
            {/* left to right arrow */}
            <svg width="200" height="80" viewBox="0 0 372 158" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 79C0 79 100 20 200 79C300 138 372 79 372 79" stroke="#C4EF17" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
              <path d="M360 65l12 14-14 12" stroke="#C4EF17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
            </svg>
          </span>
          <span className="services__shape-item services__shape-item--2">
            <DiamondStar color="#6B7FFF" size={40} />
          </span>
        </div>
      </section>

      {/* ── Portfolio / Case Studies ───────────────────────────────── */}
      <section id="portfolio" className="case-studies padding-top padding-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-12" data-aos="fade-up">
              <div className="portfolio__header d-md-flex justify-content-between align-items-center pb-45">
                <div className="section-header pb-0">
                  <div className="subtitle">
                    <span><SparkleIcon /></span> My Portfolio
                  </div>
                  <h2>
                    Looking at my <span>recent project</span>
                  </h2>
                </div>
                <a href="#" className="trk-btn trk-btn--outline d-none d-md-inline-flex">
                  View All
                </a>
              </div>
            </div>

            {[
              { n: 1, tag: "Mobile App", title: "Creative Mobile App Experience" },
              { n: 2, tag: "Web Development", title: "Dashboard Design System" },
              { n: 3, tag: "Branding", title: "Brand Identity & Visual Design" },
            ].map(({ n, tag, title }) => (
              <div className="col-md-6 col-lg-4" key={n} data-aos="fade-up">
                <div className="portfolio__item">
                  <div className="portfolio__item-inner">
                    <div className="portfolio__item-thumb">
                      <Image
                        src={`/images/portfolio/${n}.png`}
                        alt="portfolio"
                        width={1080}
                        height={1080}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="portfolio__item-content p-3">
                      <span className="portfolio__meta-tag">{tag}</span>
                      <h4><a href="#">{title}</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay overlay--bottom-left" />
      </section>

      {/* ── Experience ────────────────────────────────────────────── */}
      <section className="experience experience--style2 padding-bottom padding-top position-relative bg-grid">
        <div className="container">
          <div
            className="experience__header pb-45 d-md-flex align-items-center justify-content-between"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header pb-0">
              <div className="subtitle">
                <span><SparkleIcon /></span> Skill
              </div>
              <h2>
                My <span>Experience</span>
              </h2>
            </div>
            <div className="experience__header-btn">
              <a href="#contact" className="trk-btn trk-btn--primary">
                Contact Me
              </a>
            </div>
          </div>

          <div
            className="experience__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row g-5">
              {[
                {
                  period: "2025 to Present",
                  company: "TRK TTT Studios",
                  role: "Senior Designer",
                  desc: "As a senior UI/UX designer, I bring over 09 years of experience in crafting experiences.",
                  active: false,
                },
                {
                  period: "Dec 2018 to 2021",
                  company: "Whitecap Canada",
                  role: "UI/UX Designer",
                  desc: "I am Ui/Ux dedicated to creating seamless digital at user satisfaction.",
                  active: true,
                },
                {
                  period: "August 2015 to 2018",
                  company: "Packetilabs Ltd",
                  role: "Web Designer",
                  desc: "I specialize in translating ideas into visually stunning and functional websites.",
                  active: false,
                },
                {
                  period: "July 2013 to 2015",
                  company: "Sagebrush",
                  role: "Junior Designer",
                  desc: "I am enthusiastic about learning and honing my skills in the dynamic field of design.",
                  active: false,
                },
              ].map(({ period, company, role, desc, active }) => (
                <div className="col-12" key={company}>
                  <div className={`experience__item${active ? " active" : ""}`}>
                    <div className="experience__item-period">
                      <p>{period}</p>
                      <h6>{company}</h6>
                      <div className="experience__item-shape">
                        <SparkleIcon />
                      </div>
                    </div>
                    <div className={`experience__item-inner gradient-border${active ? " active" : ""}`}>
                      <div className="experience__item-wrapper position-relative">
                        <div className="experience__item-content">
                          <div className="experience__item-title">
                            <h4>{role}</h4>
                          </div>
                          <div className="experience__item-description">
                            <p>{desc}</p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="experience__item-action stretched-link"
                          aria-label="View Details"
                        >
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section className="pricing padding-top padding-bottom bg-grid">
        <div
          className="section-header text-center mb-lg-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="subtitle">
            <span><SparkleIcon /></span> Best Pricing
          </div>
          <h2>
            My Pricing <span>Plan</span>
          </h2>
        </div>
        <div className="container">
          <div className="pricing__wrapper">
            <div className="row g-4 align-items-center justify-content-center">
              {[
                {
                  name: "Hourly Basis",
                  price: "$20",
                  unit: "/Hourly",
                  active: false,
                  badge: null,
                },
                {
                  name: "Full Time",
                  price: "$3,000",
                  unit: "/Monthly",
                  active: true,
                  badge: "Best Value",
                },
                {
                  name: "Part Time",
                  price: "$1,000",
                  unit: "/Monthly (Minimum)",
                  active: false,
                  badge: null,
                },
              ].map(({ name, price, unit, active, badge }) => (
                <div className="col-md-6 col-lg-4" key={name}>
                  <div
                    className="pricing__item"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`pricing__item-inner gradient-border${active ? " active" : ""}`}
                    >
                      <div className="pricing__item-content">
                        <div className="pricing__item-top">
                          <h6 className="mb-15">{name}</h6>
                          <h3 className="mb-25">
                            {price}
                            <span>{unit}</span>
                          </h3>
                          <div className="pricing__item-btn">
                            <a
                              href="#contact"
                              className={`trk-btn trk-btn--outline text-center w-100${active ? " active" : ""}`}
                            >
                              Get Started
                            </a>
                          </div>
                          {badge && (
                            <div className="pricing__item-badge">
                              <span>{badge}</span>
                            </div>
                          )}
                        </div>
                        <div className="pricing__list">
                          <ul>
                            {["UI UX Design", "Design Customization", "Design with Figma", "Multipage Design", "Support 6 months"].map(
                              (feat) => (
                                <li key={feat} className="pricing__list-item">
                                  <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#C4EF17" strokeWidth="1.5" /><path d="M8 12l3 3 5-5" stroke="#C4EF17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                  </span>{" "}
                                  {feat}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay overlay--top-center" />
        <div className="overlay overlay--bottom-right" />
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="testimonial padding-top padding-bottom">
        <div className="container">
          <TestimonialsSlider />
        </div>
        <div className="overlay overlay--bottom-left" />
      </section>

      {/* ── Blog ──────────────────────────────────────────────────── */}
      <section className="blog padding-top padding-bottom bg-color">
        <div className="container">
          <div
            className="blog__header pb-45 d-md-flex align-items-center justify-content-between"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header pb-0">
              <div className="subtitle">
                <span><SparkleIcon /></span> My Blog
              </div>
              <h2>
                Latest From <span>Blog</span>
              </h2>
            </div>
            <div className="blog__header-btn">
              <a href="#" className="trk-btn trk-btn--primary">View All</a>
            </div>
          </div>

          <div
            className="blog__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row g-4 gy-5 justify-content-center">
              {[
                { n: 1, tag: "Design", title: "The Importance of User-Centered Design" },
                { n: 2, tag: "Mission", title: "The Role of Prototyping in UI/UX Design" },
                { n: 3, tag: "Inspiration", title: "The Essentials of User Research in UI/UX" },
              ].map(({ n, tag, title }) => (
                <div className="col-lg-4 col-md-6" key={n}>
                  <div className="blog__item blog__item--style1">
                    <div className="blog__item-inner">
                      <div className="blog__thumb">
                        <Image
                          src={`/images/blog/${n}.png`}
                          alt="blog image"
                          width={374}
                          height={256}
                          style={{ width: "100%", height: "auto" }}
                        />
                        <span className="blog__thumb-floating">June 22, 2025</span>
                      </div>
                      <div className="blog__content">
                        <div className="blog__meta">
                          <span className="blog__meta-tag blog__meta-tag--style1">{tag}</span>
                        </div>
                        <h4>
                          <a href="#">{title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay overlay--top-right" />
      </section>

      {/* ── Contact ───────────────────────────────────────────────── */}
      <section id="contact" className="contact padding-top padding-bottom bg-grid">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5">
              <div className="col-md-6">
                <div className="section-header">
                  <div className="subtitle">
                    <span><SparkleIcon /></span> Contact Me
                  </div>
                  <h2>
                    Let&apos;s <span>Talk</span>
                  </h2>
                  <p className="mb-0">
                    Building the blueprint for success is a crucial step in any project. It involves
                    meticulously planning.
                  </p>
                </div>

                <div
                  className="contact__info"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="contact__details">
                    <div
                      className="contact__item-whatsapp"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <a href="tel:+934714523" className="text-inherit">
                        <span>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="23" stroke="#25D366" strokeWidth="2" />
                            <path d="M33 29.5c-.3-.5-1.2-.9-2.5-1.6-1.4-.7-1.6-.7-1.9-.3-.2.4-.8 1-1 1.2-.2.2-.4.2-.7.1-.7-.3-2.9-1.1-4.4-3.5-.3-.5-.1-1 .1-1.3.3-.3.5-.7.8-1 .3-.4.3-.7.2-1-.2-.5-1.4-3.3-1.9-4.5-.5-1.2-1.1-1-1.4-1h-1.1c-.4 0-1 .2-1.5.8-.5.6-2 2-2 5s2 5.8 2.3 6.2c.3.4 4 6.1 9.7 8.3 5.7 2.2 5.7 1.5 6.8 1.4 1-.1 3.3-1.4 3.8-2.7.5-1.3.5-2.3.3-2.5z" fill="#25D366" />
                          </svg>
                        </span>{" "}
                        (+089) 934 71 45 23
                      </a>
                    </div>
                  </div>

                  <div className="contact__social mt-55">
                    <h5 className="mb-25">Follow Me</h5>
                    <ul className="social">
                      {[
                        { icon: "fab fa-facebook-f", cls: "active" },
                        { icon: "fab fa-instagram", cls: "" },
                        { icon: "fa-brands fa-linkedin-in", cls: "social__link--style4" },
                        { icon: "fab fa-youtube", cls: "social__link--style4" },
                      ].map(({ icon, cls }, i) => (
                        <li key={i} className="social__item">
                          <a href="#" className={`social__link ${cls}`}>
                            <i className={icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact__form bg-color gradient-border active">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__shape">
          <span className="contact__shape-item contact__shape-item--1">
            <svg width="100" height="106" viewBox="0 0 177 187" fill="none">
              <path d="M88.5 0V187M0 93.5H177M26 26L151 161M151 26L26 161" stroke="#6B7FFF" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
            </svg>
          </span>
          <span className="contact__shape-item contact__shape-item--2">
            <svg width="150" height="64" viewBox="0 0 372 158" fill="none">
              <path d="M0 79C0 79 100 20 200 79C300 138 372 79 372 79" stroke="#C4EF17" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
            </svg>
          </span>
        </div>
        <div className="overlay overlay--bottom-left" />
        <div className="overlay overlay--right-center" />
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer__top footer__top--style1 bg-color">
          <div className="container">
            <div className="footer__wrapper">
              <div className="row gy-5 gx-4">
                <div className="col-lg-4 col-sm-8">
                  <div className="footer__about">
                    <a href="#home" className="footer__about-logo">
                      <Image
                        className="dark"
                        src="/images/logo/logo.png"
                        alt="logo"
                        width={198}
                        height={50}
                        style={{ width: "auto", height: 40 }}
                      />
                    </a>
                    <p className="footer__about-moto">
                      I work with a passion of taking challenges creating new ones in UI/UX Sector.
                    </p>
                    <div className="footer__app">
                      <div className="footer__contact">
                        <ul className="social">
                          {[
                            { icon: "fab fa-facebook-f", cls: "active" },
                            { icon: "fab fa-instagram", cls: "" },
                            { icon: "fa-brands fa-linkedin-in", cls: "social__link--style4" },
                            { icon: "fab fa-youtube", cls: "social__link--style4" },
                          ].map(({ icon, cls }, i) => (
                            <li key={i} className="social__item">
                              <a href="#" className={`social__link ${cls}`}>
                                <i className={icon} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle"><h5>Service</h5></div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"><a href="#services">Ui/Ux Design</a></li>
                        <li className="footer__linklist-item"><a href="#services">App Design</a></li>
                        <li className="footer__linklist-item"><a href="#services">Web Design</a></li>
                        <li className="footer__linklist-item"><a href="#services">Ui/Ux Design</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle"><h5>Quick Link</h5></div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"><a href="#home">Home</a></li>
                        <li className="footer__linklist-item"><a href="#portfolio">Portfolio</a></li>
                        <li className="footer__linklist-item"><a href="#about">About</a></li>
                        <li className="footer__linklist-item"><a href="#services">Service</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-8">
                  <div className="footer__links">
                    <div className="footer__links-tittle"><h5>Subscribe newsletter</h5></div>
                    <div className="footer__links-content">
                      <p>I work with a passion of taking challenges and creating new ones.</p>
                    </div>
                    <div className="footer__subscription">
                      <form className="subscription-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                        <button type="submit" className="trk-btn trk-btn--primary">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay overlay--top-left" />
          <div className="overlay overlay-blue--bottom-right" />
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className="mb-0">
                  Copyright © 2025 designed by{" "}
                  <a
                    href="https://themeforest.net/user/thetork/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thetork
                  </a>
                </p>
              </div>
              <div>
                <ul className="footer__terms">
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1">
            <DiamondStar color="#C4EF17" size={34} />
          </span>
        </div>
      </footer>
    </>
  );
}

// ─── Contact Form (client component) ──────────────────────────────────────
function ContactForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className="text-center py-5">
      <i className="fa-solid fa-circle-check fa-3x mb-3" style={{ color: "#C4EF17" }} />
      <h4>Message Sent!</h4>
      <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
    </div>
  ) : (
    <form
      className="row g-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="col-12">
        <input type="text" className="form-control" placeholder="Your Name" required />
      </div>
      <div className="col-12">
        <input type="email" className="form-control" placeholder="Email Address" required />
      </div>
      <div className="col-12">
        <textarea className="form-control" rows={4} placeholder="Message" required />
      </div>
      <div className="col-12">
        <button type="submit" className="trk-btn trk-btn--primary w-100">
          Contact Me
        </button>
      </div>
    </form>
  );
}

// ─── Scroll To Top Button ─────────────────────────────────────────────────
function ScrollTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#home"
      className="scrollToTop scrollToTop--style1"
      style={{
        bottom: show ? "30px" : "-30%",
        opacity: show ? 1 : 0,
        transition: "all 0.5s ease",
      }}
    >
      <i className="fa-solid fa-arrow-up-from-bracket" />
    </a>
  );
}
