"use client";

const SHOP_LINKS = ["New Arrivals", "Best Sellers", "Categories", "Deals & Offers"];
const SUPPORT_LINKS = ["Help Center", "Shipping & Returns", "Order Tracking", "Contact Us"];
const COMPANY_LINKS = ["About Us"];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#040517" }}>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center select-none">
                        <span
                            className="text-3xl font-bold text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                        >
                            PRE
                        </span>
                        <span
                            className="text-3xl font-bold"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px", color: "#fa8c02" }}
                        >
                            MIUM
                        </span>
                    </div>

                    <p
                        className="text-[16px] leading-relaxed"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "rgba(255,255,255,0.50)",
                            fontWeight: 400,
                            maxWidth: "250px",
                        }}
                    >
                        Your premium destination for discovering, exploring, and enjoying the world's finest literature in a cinematic experience.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                    >
                        Shop
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {SHOP_LINKS.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.50)", fontWeight: 400 }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                    >
                        Support
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {SUPPORT_LINKS.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.50)", fontWeight: 400 }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                    >
                        Company
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {COMPANY_LINKS.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.50)", fontWeight: 400 }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className="max-w-[1280px] mx-auto px-6 lg:px-12 py-5"
                style={{ borderTop: "1px solid #1a2a5e" }}
            >
                <p
                    className="text-sm"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(255,255,255,0.40)",
                        fontWeight: 400,
                    }}
                >
                    2026 PremiumBookWriter , All Copy Rights Reserved
                </p>
            </div>
        </footer>
    );
}