"use client";

import { useState, useEffect } from "react";

const articles = [
    {title: "How Fashion Influences Political Movements", excerpt: "Fashion has always been a powerful tool for political expression, shaping public opinion and driving social change.", imageUrl: "/carousel1.jpg"},
    {title: "The Role of Clothing in Political Protests", excerpt: "Clothing choices during protests can symbolize resistance and solidarity.", imageUrl: "/carousel2.jpg"},
    {title: "Sustainable Fashion and Its Political Implications", excerpt: "Sustainable fashion practices are increasingly seen as a political statement.",  imageUrl: "/carousel3.jpg"},
]

export default function FeaturedCarousel() {
    const [index, setIndex] = useState(0);
    const current = articles[index];

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % articles.length);
        }, 6000); 
        return () => clearInterval(id);
    }, []);

    return (
        <section className="absolute-bottom-20 right-8 w-full max-w-lg shadow-lg bg-[#1c1c1c] text-white p-8">

            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style = {{ transform: `translateX(-${index * 100}%)` }}>
                    {articles.map((article, i) => (
                        <div key={i} className="shrink-0 w-full flex flex-col gap-3">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] text-[var(--lightpink)]">{article.title}</h2>
                    <p className="mt-2">{article.excerpt}</p>
                </div>
            ))}
            </div>

        <div className="flex gap-3 mt-4">
            {articles.map((_, i) =>(
                <div
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition border border-white ${i === index ? 'bg-white scale-110' : 'opacity-50 hover:opacity-80'}`}
                />
            ))}
        </div>
            </div>
        </section>
    );
}