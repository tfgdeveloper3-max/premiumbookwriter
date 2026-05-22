"use client";

import { useState } from "react";

const NAV_LINKS = ["Home", "Shop", "Categories", "Authors", "Blog", "Contact"];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            style={{ backgroundColor: "#02082d" }}
            className="w-full px-6 lg:px-10 py-3.5 flex items-center justify-between z-50 relative"
        >
            {/* Logo */}
            <div className="flex items-center select-none shrink-0">
                <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
                >
                    PRE
                </span>
                <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px", color: "#fa8c02" }}
                >
                    MIUM
                </span>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-9">
                {NAV_LINKS.map((link) => (
                    <li key={link}>
                        <button
                            onClick={() => setActive(link)}
                            className="relative text-sm font-medium transition-colors duration-200 pb-1"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: active === link ? "#ffffff" : "#8a94a6",
                                letterSpacing: "0.3px",
                            }}
                        >
                            {link}
                            {active === link && (
                                <span
                                    className="absolute bottom-0 left-0 w-full h-[2px] rounded-full"
                                    style={{ backgroundColor: "#fa8c02" }}
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Search — desktop only */}
                <div
                    className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full"
                    style={{
                        backgroundColor: "#192657",
                        border: "1px solid rgba(26,42,94,0.8)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <svg
                        width="15" height="15" viewBox="0 0 24 24"
                        fill="none" stroke="#6b7fa3" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search books, authors..."
                        className="bg-transparent outline-none text-sm w-52 placeholder:text-[#4a5a7a]"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#c5d0e0" }}
                    />
                </div>

                {/* Cart */}
                <button className="relative p-1.5 shrink-0 transition-transform duration-200 hover:scale-110">
                    <svg
                        width="22" height="22" viewBox="0 0 24 24"
                        fill="none" stroke="#c5d0e0" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span
                        className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                        style={{ backgroundColor: "#fa8c02", fontFamily: "'DM Sans', sans-serif" }}
                    >
                        2
                    </span>
                </button>

                {/* User */}
                <button
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 hover:ring-2 hover:ring-[#fa8c02]/30"
                    style={{ backgroundColor: "rgba(26,42,94,0.6)", border: "1px solid rgba(26,42,94,0.8)" }}
                >
                    <svg
                        width="17" height="17" viewBox="0 0 24 24"
                        fill="none" stroke="#c5d0e0" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-1.5 shrink-0"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="22" height="22" viewBox="0 0 24 24"
                        fill="none" stroke="#c5d0e0" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 w-full flex flex-col py-4 px-6 gap-1 lg:hidden z-50"
                    style={{
                        backgroundColor: "#02082d",
                        borderTop: "1px solid rgba(26,42,94,0.6)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Mobile search */}
                    <div
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-3"
                        style={{
                            backgroundColor: "rgba(4,5,23,0.7)",
                            border: "1px solid rgba(26,42,94,0.8)",
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search books, authors..."
                            className="bg-transparent outline-none text-sm w-full placeholder:text-[#4a5a7a]"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#c5d0e0" }}
                        />
                    </div>

                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => { setActive(link); setMenuOpen(false); }}
                            className="text-left py-3 px-4 text-sm font-medium rounded-lg transition-colors"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: active === link ? "#ffffff" : "#8a94a6",
                                backgroundColor: active === link ? "rgba(250,140,2,0.1)" : "transparent",
                                borderLeft: active === link ? "3px solid #fa8c02" : "3px solid transparent",
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}