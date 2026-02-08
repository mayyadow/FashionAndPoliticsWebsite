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
      <div className="relative mt-40 ml-30">
        <Image
          src="/images/blog-page/blank-folder.jpg"
          alt="blank page"
          width={850}
          height={850}
        />

        {/* White border container */}
        <div
          style={{
            fontFamily: "HelveticaWorld, Helvetica,  Arial, sans-serif",
          }}
          className="absolute top-20 left-25 z-10 h-[60%] w-[70%] bg-white border border-black p-2"
        >
          {/* <div className="w-full h-full bg-[#ffebf7] overflow-y-auto p-5">
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
            <BlogArticlePreview title={title} author={author} date={date} />
          </div> */}

          <div className="text-9xl w-full h-full overflow-y-auto p-5">
            COMING SOON...
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
        <div className="absolute top-55 right-[18%] z-[-3] hidden lg:block">
          <Image
            src="/images/blog-page/beautyisintheeyesofthebeholder.jpg"
            alt=""
            width={350}
            height={350}
          />
        </div>

        <div className="absolute top-80 right-[4%] z-[-2] hidden lg:block">
          <Image
            src="/images/blog-page/viviennewestwood.jpg"
            alt=""
            width={330}
            height={330}
          />
        </div>

        <div className="absolute top-160 right-[19%] z-[-3] hidden lg:block">
          <Image
            src="/images/blog-page/flags.jpg"
            alt=""
            width={330}
            height={330}
          />
        </div>

        <div className="absolute top-100 right-[18%] z-[-1] hidden lg:block">
          <Image
            src="/images/blog-page/rocky.jpg"
            alt=""
            width={240}
            height={240}
          />
        </div>
      </div>
    </div>
  );
}
