"use client";

import Image from "next/image";

const GENRES = [
  { id: 1, name: "Science Fiction", image: "/images/genres/01.jpg" },
  { id: 2, name: "Romance",         image: "/images/genres/02.jpg" },
  { id: 3, name: "Fantasy",         image: "/images/genres/03.jpg" },
  { id: 4, name: "Thriller",        image: "/images/genres/04.jpg" },
  { id: 5, name: "Biography",       image: "/images/genres/05.jpg" },
  { id: 6, name: "Self Development", image: "/images/genres/06.jpg" },
];

export default function PopularGenres() {
  return (
    <section
      className="w-full px-6 lg:px-12 py-12 lg:py-16"
      style={{ backgroundColor: "#040517" }}
    >
      <div className="max-w-[1280px] mx-auto mb-8">
        <h2
          className="text-white font-bold"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            letterSpacing: "1px",
          }}
        >
          Popular Genres
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {GENRES.map((genre) => (
          <div
            key={genre.id}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              aspectRatio: "16/9",
              border: "1px solid #1a2a5e",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #0c2152 0%, #040517 100%)" }}
            />

            <Image
              src={genre.image}
              alt={genre.name}
              fill
              className="object-fill transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,5,23,0.80) 0%, rgba(4,5,23,0.15) 50%, transparent 100%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(47,112,202,0.18)" }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <span
                className="font-bold text-white"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  fontWeight: 700,
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                {genre.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}