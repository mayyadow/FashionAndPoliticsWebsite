type BlogPost = {
    title: string;
    subtitle: string;
    author: string; 
    date: string; 
    paragraphs: string[];
};

const samplePost: BlogPost = {
    title: "TITLE OF ARTICLE", 
    subtitle: "SUBTITLE GOES HERE",
    author: "AUTHOR FIRST LAST",
    date: "JAN 1, 2025",
    paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
};

export default function BlogPage() {
    return (
        <section className="relative h-screen flex page-transition">
            <div className="flex-1 flex items-center justify-center">
                <article className="bg-white max-w-xl w-full p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
                    <header className="mb-4">
                        <h1 className="font-helvetica text-xl mb-1">
                            {samplePost.title}
                        </h1>
                        <h2 className="font-helvetica text-[0.7rem] tracking-[0.15em] mb-1">
                            {samplePost.subtitle}
                        </h2>
                        <p className="text-[0.7rem] opacity-70">
                            BY: {samplePost.author} &nbsp;&nbsp; {samplePost.date}
                        </p>
                    </header>

                    <div className="space-y-3 text-[0.85rem]">
                        {samplePost.paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>

                    <p className="mt-6 text-[0.7rem] font-helvetica tracking=[0.15em] text-[#ff1fa9]">
                        FASHION · POLITICS · CAMPUS
                    </p>
                </article>
            </div>

            <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="absolute top-10 right-10 text-4xl italic">
                Fashion + Politics 
            </h2>
            <span className="absolute top-10 left-10 text-2xl">
                BLOG
            </span>
            </div>
            </div>            
            
        </section>
    );
}