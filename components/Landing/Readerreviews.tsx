"use client";

import Image from "next/image";

const REVIEWS = [
    {
        id: 1,
        rating: 5,
        text: '"Erabook offers the absolute best reading experience. The selection of sci-fi novels is unmatched, and the high-end dark mode interface is so easy on the eyes during late-night browsing sessions."',
        name: "Michael Trent",
        role: "Avid Reader",
        avatar: "/reviewers/michael.jpg",
    },
    {
        id: 2,
        rating: 5,
        text: '"I love the fast checkout and the gorgeous design. It feels like I\'m stepping into a luxury boutique every time I search for a new fantasy novel. Highly recommend their curated collections!"',
        name: "Sarah Jenkins",
        role: "Fantasy Enthusiast",
        avatar: "/reviewers/sarah.jpg",
    },
    {
        id: 3,
        rating: 5,
        text: '"The author spotlight section helped me discover so many hidden gems. The website is incredibly fast and finding exactly what I want is always a breeze. A truly premium experience."',
        name: "David Osei",
        role: "Book Club Host",
        avatar: "/reviewers/david.jpg",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 20 20"
                    fill={s <= rating ? "#fa8c02" : "none"}
                    stroke={s <= rating ? "#fa8c02" : "#4a5568"}
                    strokeWidth="1.5"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReaderReviews() {
    return (
        <section
            className="w-full px-6 lg:px-12 py-12 lg:py-16"
            style={{ backgroundColor: "#040517" }}
        >
            <div className="max-w-[1280px] mx-auto">
                <h2
                    className="text-white font-bold mb-8"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        letterSpacing: "1px",
                    }}
                >
                    Reader Reviews
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {REVIEWS.map((r) => (
                        <div
                            key={r.id}
                            className="flex flex-col justify-between rounded-2xl p-6 lg:p-7"
                            style={{
                                backgroundColor: "#02082d",
                                border: "1px solid #1a2a5e",
                            }}
                        >
                            <div className="flex flex-col gap-5">
                                <StarRating rating={r.rating} />

                                <p
                                    className="text-sm lg:text-[0.93rem] leading-relaxed"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        color: "rgba(255,255,255,0.75)",
                                        fontWeight: 400,
                                    }}
                                >
                                    {r.text}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mt-6">
                                <div
                                    className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                                    style={{ backgroundColor: "#1a2a5e" }}
                                >
                                    <Image
                                        src={r.avatar}
                                        alt={r.name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {r.name[0]}
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="text-sm font-semibold text-white"
                                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                                    >
                                        {r.name}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {r.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}