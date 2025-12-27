export default function AboutPage() {
    return (
        <section className="relative h-screen page-transition">
            <div className="absolute inset-y-0 left-0 w-[55%]">
                <div className="h-full bg-black text-white flex items-center justify-center text-[0.7rem] tracking-[0.15em]">
                    LARGE BLACK AND WHITE IMAGE AREA
                </div>
            </div>

            <h1 className="absolute top-24 right-1 text-5xl font-helvetica">
                ABOUT US
            </h1>

            <div className = "absolute top-[260px] right-16 max-w-lg bg-[#f4b7d8] text-black px-10 py-8 text-sm leading-relaxed shadow-lg">
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    )
}