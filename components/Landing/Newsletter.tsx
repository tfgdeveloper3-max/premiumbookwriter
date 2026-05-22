"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!email.trim()) return;
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section
            className="w-full py-16 lg:py-20 px-6"
            style={{
                background: "linear-gradient(135deg, #192657 0%, #0c2152 50%, #030726 100%)",
            }}
        >
            <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-5">
                <h2
                    className="text-white font-bold leading-tight"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2rem, 5vw, 2.8rem)",
                        letterSpacing: "0.5px",
                    }}
                >
                    Join Our Reading Club
                </h2>

                <p
                    className="text-sm lg:text-base leading-relaxed max-w-[520px]"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(255,255,255,0.65)",
                        fontWeight: 400,
                    }}
                >
                    Subscribe to our newsletter to get updates on new releases, special offers,
                    and exclusive author interviews straight to your inbox.
                </p>

                <div
                    className="flex items-center w-full max-w-[540px] rounded-xl overflow-hidden mt-2"
                    style={{
                        backgroundColor: "#040517",
                        border: "1px solid #2f70ca",
                        padding: "5px",
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        className="flex-1 bg-transparent outline-none px-4 py-2 text-sm"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "rgba(255,255,255,0.8)",
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        className="px-5 py-2.5 rounded-lg font-semibold text-white text-sm shrink-0 transition-all hover:brightness-110 active:scale-95"
                        style={{
                            backgroundColor: "#fa8c02",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            boxShadow: "0 4px 16px rgba(250,140,2,0.35)",
                        }}
                    >
                        {submitted ? "Subscribed ✓" : "Subscribe Now"}
                    </button>
                </div>
            </div>
        </section>
    );
}