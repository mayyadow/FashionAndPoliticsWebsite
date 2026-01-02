import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative h-screen page-transition">
      <div className="absolute inset-y-0 left-0 w-[55%]">
        <Image
          src="/images/about-page-girls.jpg"
          alt="models Anneliese Seubert (left) and Joanna Rhodes (right) in a black and white fashion photograph"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
        />
      </div>

      <h1 className="absolute top-24 right-1 text-5xl font-helvetica">
        ABOUT US
      </h1>

      <div className="absolute top-[260px] right-16 max-w-lg bg-[#f4b7d8] text-black px-10 py-8 text-base leading-relaxed shadow-lg">
        <p>
          The University of Toronto’s Fashion and Politics Club strives to
          provide a space for peers to explore and engage with the intersection
          of fashion & culture, media, society, and politics. <br></br>
          <br></br>
          Through our biweekly meetings, we unpack questions such as how fashion
          reflects social change, why trends carry political meaning, and what
          role our clothing plays in shaping identity and power. Our programming
          includes creative showcases, as well as providing students a chance to
          get their work ‘out there’ by writing articles, essays, and creating
          art. Every other week, we explore a different topic that all members
          get a chance to suggest. Examples of topics we delve into include: the
          role of social media in fashion & ‘microtrends,’ the gentrification of
          streetwear, and the accessibility of fashion. <br></br>
          <br></br>
          The ultimate goal is to produce a culminating magazine/anthology issue
          of everyone’s contributions (i.e. academic writing, artwork, poetry,
          photography, etc.) by the end of the academic year, where your name
          and your work can be published! This is an excellent opportunity for
          aspiring writers, researchers and creatives.<br></br>
          <br></br>
          There is no space quite like the community we have created at UofT.
          Although Fashion and Politics seem like such large concepts to tie
          together, we have found a way. Through hosting social events where
          students can dress up and encouraging debates on current events and
          trends, our goal is to spark dialogue, build connections, and
          demonstrate that everything in this world can be and ultimately is
          political. All majors are encouraged to join @uoftfp.
        </p>
      </div>
    </section>
  );
}
