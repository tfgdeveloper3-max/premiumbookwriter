"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SALE_DURATION_HOURS = 12;

function getEndTime() {
    const end = new Date();
    end.setHours(end.getHours() + SALE_DURATION_HOURS);
    return end;
}

const END_TIME = getEndTime();

function pad(n: number) {
    return String(n).padStart(2, "0");
}

export default function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, mins: 0, secs: 0 });

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const diff = Math.max(0, END_TIME.getTime() - now.getTime());
            const totalSecs = Math.floor(diff / 1000);
            const hours = Math.floor(totalSecs / 3600);
            const mins = Math.floor((totalSecs % 3600) / 60);
            const secs = totalSecs % 60;
            setTimeLeft({ hours, mins, secs });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full px-6 lg:px-12 py-10 lg:py-14" style={{ backgroundColor: "#040517" }}>
            <div
                className="relative max-w-[1280px] mx-auto rounded-2xl overflow-hidden flex items-center"
                style={{
                    background: "linear-gradient(120deg, #2f70ca 0%, #1a4fa0 55%, #0c2152 100%)",
                    minHeight: "300px",
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)",
                    }}
                />

                {/* ── Left: Text Content ── */}
                <div className="relative z-10 flex-1 px-8 lg:px-14 py-10 flex flex-col gap-5">
                    <div>
                        <h2
                            className="text-white leading-tight"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                                letterSpacing: "0.5px",
                                lineHeight: 1.1,
                            }}
                        >
                            Flash Sale!
                        </h2>
                        <h2
                            className="text-white leading-tight"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                                letterSpacing: "0.5px",
                                lineHeight: 1.1,
                            }}
                        >
                            Up to 50% Off
                        </h2>
                    </div>

                    <p
                        className="text-sm lg:text-base leading-relaxed max-w-[460px]"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.80)", fontWeight: 400 }}
                    >
                        Expand your library without emptying your wallet. Grab your favorite premium titles before the countdown ends.
                    </p>

                    <div className="flex items-center gap-3">
                        {[
                            { value: pad(timeLeft.hours), label: "HOURS" },
                            { value: pad(timeLeft.mins), label: "MINS" },
                            { value: pad(timeLeft.secs), label: "SECS" },
                        ].map(({ value, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center justify-center rounded-xl"
                                style={{
                                    backgroundColor: "#0c2152",
                                    minWidth: "72px",
                                    padding: "12px 16px",
                                    gap: "2px",
                                }}
                            >
                                <span
                                    className="font-bold leading-none"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                        color: "#fa8c02",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    {value}
                                </span>
                                <span
                                    className="text-[10px] font-semibold tracking-widest"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)" }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="w-fit px-7 py-3 rounded-md font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 mt-1"
                        style={{
                            backgroundColor: "#fa8c02",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            boxShadow: "0 4px 20px rgba(250,140,2,0.4)",
                        }}
                    >
                        Shop The Sale
                    </button>
                </div>

                {/* ── Right: Book Image — CENTERED, NOT in corner ── */}
                <div
                    className="relative hidden md:flex items-center justify-center flex-1 h-full self-stretch pr-10 lg:pr-16"
                >
                    <div
                        className="relative"
                        style={{ width: "340px", height: "420px" }}
                    >
                        <Image
                            src="/images/covers/Book-Mockup.png"
                            alt="Book Dreams Volume 1 Mockup"
                            fill
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}