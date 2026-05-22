"use client";

import Image from "next/image";

const AUTHOR = {
    name: "Elena Rostova",
    label: "AUTHOR SPOTLIGHT",
    bio: 'Bestselling author of the "Midnight Chronicles" series. Elena weaves intricate tales of dark fantasy, magic, and gripping suspense that keep readers awake all night long.',
    avatar: "/authors/elena-rostova.jpg",
};

const BOOKS = [
    { id: 1, title: "Crimson Night", price: "$22.00", cover: "/images/covers/11.jpg" },
    { id: 2, title: "Midnight Whisper", price: "$19.50", cover: "/images/covers/12.jpg" },
    { id: 3, title: "Violet Dawn", price: "$24.00", cover: "/images/covers/13.jpg" },
];

export default function AuthorSpotlight() {
    return (
        <section
            className="w-full px-6 lg:px-12 py-12 lg:py-16"
            style={{ backgroundColor: "#040517" }}
        >
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

                <div className="flex flex-col items-start gap-5 lg:w-[320px] shrink-0">
                    <div
                        className="rounded-full p-[3px] shrink-0"
                        style={{ background: "linear-gradient(135deg, #fa8c02, #f97316)" }}
                    >
                        <div className="rounded-full overflow-hidden w-[130px] h-[130px] relative"
                            style={{ backgroundColor: "#02082d" }}
                        >
                            <Image
                                src={AUTHOR.avatar}
                                alt={AUTHOR.name}
                                fill
                                className="object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                ER
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span
                            className="text-xs font-bold tracking-widest uppercase"
                            style={{ color: "#fa8c02", fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {AUTHOR.label}
                        </span>

                        <h2
                            className="text-white font-bold leading-tight"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                                fontWeight: 800,
                            }}
                        >
                            {AUTHOR.name}
                        </h2>
                    </div>

                    <p
                        className="text-sm lg:text-base leading-relaxed"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "rgba(255,255,255,0.65)",
                            fontWeight: 400,
                            maxWidth: "340px",
                        }}
                    >
                        {AUTHOR.bio}
                    </p>

                    {/* CTA */}
                    <button
                        className="px-7 py-3 rounded-md font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 mt-1"
                        style={{
                            backgroundColor: "#fa8c02",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            boxShadow: "0 4px 20px rgba(250,140,2,0.35)",
                        }}
                    >
                        View Full Profile
                    </button>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    {BOOKS.map((book) => (
                        <div
                            key={book.id}
                            className="rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
                            style={{
                                backgroundColor: "#02082d",
                                border: "1px solid #1a2a5e",
                            }}
                        >
                            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/3.2" }}>
                                <div
                                    className="absolute inset-0"
                                    style={{ background: "linear-gradient(135deg, #0c2152 0%, #040517 100%)" }}
                                />
                                <Image
                                    src={book.cover}
                                    alt={book.title}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105 relative z-10"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 px-4 py-4">
                                <h3
                                    className="font-semibold text-white text-sm lg:text-base group-hover:text-orange-400 transition-colors"
                                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                                >
                                    {book.title}
                                </h3>
                                <span
                                    className="font-bold text-white text-base"
                                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                                >
                                    {book.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}