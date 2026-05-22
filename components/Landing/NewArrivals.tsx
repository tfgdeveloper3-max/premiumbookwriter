"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const BOOKS = [
    { id: 1, title: "The Silent Echoes", author: "A. J. Cross", rating: 4, reviews: 124, price: "$24.99", badge: "NEW", cover: "/images/covers/11.jpg" },
    { id: 2, title: "Midnight Whispers", author: "Elena Rostova", rating: 3, reviews: 89, price: "$19.50", badge: null, cover: "/images/covers/12.jpg" },
    { id: 3, title: "Shadow of Truth", author: "Marcus Vance", rating: 3, reviews: 45, price: "$22.00", badge: null, cover: "/images/covers/13.jpg" },
    { id: 4, title: "Realm of Embers", author: "Sarah Jenkins", rating: 5, reviews: 210, price: "$28.99", badge: "NEW", cover: "/images/covers/14.jpg" },
    { id: 5, title: "The Forgotten Stars", author: "Lena Hartwell", rating: 4, reviews: 178, price: "$21.00", badge: "NEW", cover: "/images/covers/15.jpg" },
    { id: 6, title: "Crimson Tide", author: "Omar Al-Rashid", rating: 5, reviews: 302, price: "$26.50", badge: null, cover: "/images/covers/22.jpg" },
    { id: 7, title: "Whispers in the Dark", author: "Clara Fontaine", rating: 4, reviews: 95, price: "$18.99", badge: null, cover: "/images/covers/17.jpg" },
    { id: 8, title: "The Last Horizon", author: "James Whitmore", rating: 5, reviews: 411, price: "$31.00", badge: "NEW", cover: "/images/covers/18.jpg" },
];

const VISIBLE = 4;
const AUTO_DELAY = 3000;

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="14" height="14" viewBox="0 0 20 20"
                    fill={star <= rating ? "#fa8c02" : "none"}
                    stroke={star <= rating ? "#fa8c02" : "#4a5568"}
                    strokeWidth="1.5"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function NewArrivals() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const total = BOOKS.length; // 8
    const maxIndex = total - VISIBLE; // 4

    const goTo = (index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const next = () => goTo(current >= maxIndex ? 0 : current + 1);
    const prev = () => goTo(current <= 0 ? maxIndex : current - 1);

    const startAuto = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
        }, AUTO_DELAY);
    };

    useEffect(() => {
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, []);

    const pauseAuto = () => { if (autoRef.current) clearInterval(autoRef.current); };
    const resumeAuto = () => startAuto();

    return (
        <section
            className="w-full px-6 lg:px-12 py-12 lg:py-16"
            style={{ backgroundColor: "#040517" }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 max-w-[1280px] mx-auto">
                <h2
                    className="text-2xl lg:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                    New Arrivals
                </h2>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-1.5">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: i === current ? "20px" : "6px",
                                    height: "6px",
                                    backgroundColor: i === current ? "#fa8c02" : "#1a2a5e",
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => { pauseAuto(); prev(); resumeAuto(); }}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:brightness-125"
                            style={{ backgroundColor: "#02082d", border: "1px solid #1a2a5e" }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => { pauseAuto(); next(); resumeAuto(); }}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:brightness-125"
                            style={{ backgroundColor: "#02082d", border: "1px solid #1a2a5e" }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                    {/* View All */}
                    <button
                        className="text-sm font-semibold flex items-center gap-1 transition-opacity hover:opacity-80"
                        style={{ color: "#fa8c02", fontFamily: "'DM Sans', sans-serif" }}
                    >
                        View All
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fa8c02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className="overflow-hidden max-w-[1280px] mx-auto"
                onMouseEnter={pauseAuto}
                onMouseLeave={resumeAuto}
            >
                <div
                    className="flex gap-5 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(-${current} * (25% + 5px)))` }}
                >
                    {BOOKS.map((book) => (
                                            <div
                                                key={book.id}
                                                className="shrink-0 flex flex-col cursor-pointer group"
                                                style={{ width: "calc(25% - 15px)" }}
                                            >                   
                                                <div
                                                    className="relative rounded-xl overflow-hidden mb-4"
                                                    style={{
                                                        backgroundColor: "#02082d",
                                                        aspectRatio: "3/4",
                                                        border: "1px solid #1a2a5e",
                                                    }}
                                                >
                                                    <div
                                                        className="absolute inset-0"
                                                        style={{ background: "linear-gradient(135deg, #0c2152 0%, #040517 100%)" }}
                                                    />
                    
                                                    <Image
                                                        src={book.cover}
                                                        alt={book.title}
                                                        fill
                                                        className="object-fill transition-transform duration-500 group-hover:scale-105 relative z-10"
                                                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                                    />
                    
                                                    <div className="absolute inset-0 z-20 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <button
                                                            className="w-9 h-9 rounded-full flex items-center justify-center active:scale-95"
                                                            style={{ backgroundColor: "#fa8c02" }}
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                    
                                                <div className="flex flex-col gap-1 flex-1">
                                                    <h3
                                                        className="font-semibold text-white text-sm lg:text-base leading-snug group-hover:text-orange-400 transition-colors"
                                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                                    >
                                                        {book.title}
                                                    </h3>
                                                    <p className="text-xs lg:text-sm" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
                                                        {book.author}
                                                    </p>
                                                    <div className="flex items-center gap-1.5 mt-0.5">
                                                        <StarRating rating={book.rating} />
                                                        <span className="text-xs" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
                                                            ({book.reviews})
                                                        </span>
                                                    </div>
                                                </div>
                    
                                                <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid #1a2a5e" }}>
                                                    <span
                                                        className="font-bold text-white text-base lg:text-lg"
                                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                                    >
                                                        {book.price}
                                                    </span>
                                                    <button
                                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:brightness-110 active:scale-95"
                                                        style={{ backgroundColor: "#1a2a5e" }}
                                                    >
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                </div>
            </div>

            <div className="flex sm:hidden items-center justify-center gap-1.5 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                            width: i === current ? "20px" : "6px",
                            height: "6px",
                            backgroundColor: i === current ? "#fa8c02" : "#1a2a5e",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}