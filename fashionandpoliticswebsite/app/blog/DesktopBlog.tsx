import BlogArticlePreview from "@/components/BlogArticlePreview";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

type Props = {
  title: string;
  author: string;
  date: string;
};

export default function DesktopBlog({
  title = "TITLE OF ARTICLE",
  author = "AUTHOR FIRST LAST",
  date = "00/00/00",
}: Props) {
  return (
    <div className="h-screen flex items-start">
      {/* Left: folder + preview */}
      <div className="relative mt-40 ml-20 z-60">
        <Image
          src="/images/blog-page/blank-folder.jpg"
          alt="blank page"
          width={850}
          height={850}
        />

        {/* White border container */}
        <div className="absolute top-20 left-25 z-10 h-[60%] w-[70%] bg-white border border-black p-2">
          <div className="w-full h-full bg-[#ffebf7] overflow-y-auto p-5">
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
          </div>
        </div>
      </div>

      {/* Right: BLOG text */}
      <div className="flex-1 flex justify-end items-start pr-10 w-full">
        <h1
          className={`${anton.className}  text-[130px] absolute text-white text-9xl mt-20 right-[4%]`}
        >
          BLOG
        </h1>
        <div className="absolute top-50 right-[20%] z-20 hidden lg:block">
          <Image
            src="/images/blog-page/beautyisintheeyesofthebeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <div className="absolute top-80 right-[4%] z-30 hidden lg:block">
          <Image
            src="/images/blog-page/viviennewestwoodtartan.jpg"
            alt=""
            width={310}
            height={310}
          />
        </div>

        <div className="absolute top-160 right-[25%] z-10 hidden lg:block">
          <Image
            src="/images/blog-page/flags.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="absolute top-100 right-[20%] z-40 hidden lg:block">
          <Image
            src="/images/blog-page/rocky.jpg"
            alt=""
            width={280}
            height={280}
          />
        </div>

        <div className="absolute bottom-0 right-0 z-50 hidden lg:block">
          <Image
            src="/images/monogram.png"
            alt="fp monogram"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
