"use client";

import Image from "next/image";

const STARS = [
    { size: "3px", color: "#fa8c02", opacity: 0.75, top: "8%", left: "5%", duration: "3.8s", delay: "1.0s" },
    { size: "2px", color: "#ffffff", opacity: 0.65, top: "14%", left: "12%", duration: "2.5s", delay: "0.6s" },
    { size: "2px", color: "#ffffff", opacity: 0.55, top: "22%", left: "20%", duration: "4.1s", delay: "1.8s" },
    { size: "3px", color: "#ffffff", opacity: 0.70, top: "9%", left: "30%", duration: "3.2s", delay: "0.4s" },
    { size: "2px", color: "#ffffff", opacity: 0.48, top: "18%", left: "38%", duration: "2.7s", delay: "1.3s" },
    { size: "2px", color: "#fa8c02", opacity: 0.78, top: "6%", left: "44%", duration: "4.5s", delay: "0.2s" },
    { size: "3px", color: "#ffffff", opacity: 0.60, top: "28%", left: "8%", duration: "3.0s", delay: "1.9s" },
    { size: "2px", color: "#ffffff", opacity: 0.55, top: "35%", left: "16%", duration: "2.4s", delay: "0.8s" },
    { size: "2px", color: "#ffffff", opacity: 0.85, top: "42%", left: "24%", duration: "4.8s", delay: "1.5s" },
    { size: "3px", color: "#ffffff", opacity: 0.50, top: "50%", left: "3%", duration: "3.6s", delay: "0.9s" },
    { size: "2px", color: "#fa8c02", opacity: 0.72, top: "58%", left: "10%", duration: "2.9s", delay: "1.7s" },
    { size: "2px", color: "#ffffff", opacity: 0.62, top: "12%", left: "50%", duration: "3.5s", delay: "0.3s" },
    { size: "3px", color: "#ffffff", opacity: 0.54, top: "20%", left: "54%", duration: "4.2s", delay: "1.1s" },
    { size: "2px", color: "#ffffff", opacity: 0.88, top: "30%", left: "48%", duration: "2.6s", delay: "0.5s" },
    { size: "2px", color: "#ffffff", opacity: 0.65, top: "40%", left: "42%", duration: "3.9s", delay: "1.4s" },
    { size: "3px", color: "#fa8c02", opacity: 0.84, top: "5%", left: "22%", duration: "2.1s", delay: "1.9s" },
    { size: "2px", color: "#ffffff", opacity: 0.80, top: "65%", left: "18%", duration: "4.0s", delay: "0.7s" },
    { size: "2px", color: "#ffffff", opacity: 0.87, top: "70%", left: "28%", duration: "4.8s", delay: "1.2s" },
    { size: "3px", color: "#ffffff", opacity: 0.56, top: "33%", left: "35%", duration: "3.2s", delay: "1.4s" },
    { size: "2px", color: "#ffffff", opacity: 0.86, top: "45%", left: "52%", duration: "2.1s", delay: "0.9s" },
    { size: "2px", color: "#fa8c02", opacity: 0.83, top: "55%", left: "46%", duration: "2.6s", delay: "0.7s" },
    { size: "3px", color: "#ffffff", opacity: 0.48, top: "25%", left: "2%", duration: "3.0s", delay: "1.7s" },
];

export default function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ minHeight: "calc(100vh - 64px)" }}
        >
            <Image
                src="/images/hero-img.jpeg"
                alt="Characters reading a magical book"
                fill
                className="object-fill object-center"
                priority
                style={{ zIndex: 0 }}
            />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(100deg, rgba(4,5,23,0.92) 0%, rgba(4,5,23,0.78) 35%, rgba(4,5,23,0.35) 60%, rgba(4,5,23,0.15) 100%)",
                    zIndex: 1,
                }}
            />

            <div
                className="absolute bottom-0 left-0 w-full h-32"
                style={{
                    background: "linear-gradient(to top, #040517 0%, transparent 100%)",
                    zIndex: 1,
                }}
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 70% 30%, rgba(47,112,202,0.18) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(12,33,82,0.3) 0%, transparent 70%)",
                    zIndex: 2,
                }}
            />

            {STARS.map((star, i) => (
                <span
                    key={i}
                    className="absolute rounded-full animate-pulse"
                    style={{
                        width: star.size,
                        height: star.size,
                        backgroundColor: star.color,
                        opacity: star.opacity,
                        top: star.top,
                        left: star.left,
                        animationDuration: star.duration,
                        animationDelay: star.delay,
                        zIndex: 2,
                    }}
                />
            ))}

            <div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{
                    width: "320px", height: "320px",
                    background: "radial-gradient(circle, rgba(250,140,2,0.10) 0%, transparent 70%)",
                    top: "10%", left: "35%",
                    zIndex: 2,
                }}
            />
            <div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{
                    width: "400px", height: "400px",
                    background: "radial-gradient(circle, rgba(47,112,202,0.14) 0%, transparent 70%)",
                    bottom: "0%", right: "5%",
                    zIndex: 2,
                }}
            />


            <div
                className="relative flex flex-col justify-end lg:hidden"
                style={{ minHeight: "calc(100vh - 64px)", zIndex: 10 }}
            >
                <div className="flex flex-col gap-5 px-6 pb-14 pt-2">
                    <div
                        className="w-fit flex items-center gap-2 px-4 py-1.5 rounded-full border"
                        style={{
                            backgroundColor: "rgba(250,140,2,0.12)",
                            borderColor: "rgba(250,140,2,0.35)",
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="#fa8c02">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span
                            className="text-xs font-medium"
                            style={{ color: "#fa8c02", fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Trending Collection 2026
                        </span>
                    </div>

                    <h1
                        className="uppercase"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(3.2rem, 12vw, 4.5rem)",
                            color: "#ffffff",
                            letterSpacing: "3px",
                            lineHeight: 1.05,
                            fontWeight: 400,
                            textShadow: "0 0 40px rgba(250,140,2,0.15), 0 2px 4px rgba(0,0,0,0.5)",
                        }}
                    >
                        Discover Your<br />
                        Next Favorite<br />
                        Book
                    </h1>

                    <p
                        className="text-[16px] leading-relaxed max-w-[380px]"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#94a3b8" }}
                    >
                        Explore our curated collection of premium books, from thrilling
                        mysteries to captivating romances.
                    </p>

                    <div className="flex items-center gap-4">
                        <button
                            className="px-6 py-2.5 rounded-[15px] font-semibold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                            style={{
                                backgroundColor: "#fa8c02",
                                fontFamily: "'DM Sans', sans-serif",
                                boxShadow: "0 4px 20px rgba(250,140,2,0.35)",
                            }}
                        >
                            Explore Books
                        </button>
                        <button
                            className="font-semibold text-sm transition-colors duration-200 hover:text-white"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#cbd5e1" }}
                        >
                            Browse Categories
                        </button>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}

            <div
                className="relative hidden lg:flex items-center max-w-[1280px] mx-auto"
                style={{ minHeight: "calc(100vh - 64px)", zIndex: 10 }}
            >
                <div className="flex flex-col gap-7 max-w-[600px] py-16">
                    <div
                        className="w-fit flex items-center gap-2 px-5 py-2.5 rounded-full border"
                        style={{
                            backgroundColor: "rgba(250,140,2,0.12)",
                            borderColor: "rgba(250,140,2,0.35)",
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#fa8c02">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span
                            className="text-sm font-semibold"
                            style={{ color: "#fa8c02", fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Trending Collection 2026
                        </span>
                    </div>

                    <h1
                        className="uppercase"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(3rem, 4vw, 5rem)",
                            color: "#ffffff",
                            letterSpacing: "-2px",
                            lineHeight: 1.05,
                            fontWeight: 900,
                            textShadow: "0 0 60px rgba(250,140,2,0.12), 0 2px 4px rgba(0,0,0,0.5)",
                        }}
                    >
                        Discover Your<br />
                        Next Favorite<br />
                        Book
                    </h1>

                    <p
                        className="text-[18px] leading-relaxed max-w-[530px]"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#94a3b8" }}
                    >
                        Explore our curated collection of premium books, from thrilling
                        mysteries to captivating romances. Elevate your reading experience
                        with LitMart.
                    </p>

                    <div className="flex items-center gap-5 mt-2">
                        <button
                            className="px-8 py-3.5 rounded-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95"
                            style={{
                                backgroundColor: "#fa8c02",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.95rem",
                                boxShadow: "0 4px 24px rgba(250,140,2,0.35)",
                            }}
                        >
                            Explore Books
                        </button>
                        <button
                            className="font-semibold transition-colors duration-200 hover:text-white flex items-center gap-2"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.95rem",
                                color: "#cbd5e1",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            Browse Categories
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}