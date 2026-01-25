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

export default function MobileBlog({
  title = "TITLE OF ARTICLE",
  author = "AUTHOR FIRST LAST",
  date = "00/00/00",
}: Props) {
  return (
    <>
      <h1
        className={`${anton.className} text-white text-8xl mt-12 mb-5 mr-15 flex justify-end`}
      >
        BLOG
      </h1>
      <div className="flex justify-center">
        <Image
          src="/images/blog-page/mobile-blank-folder.jpg"
          alt="blank page"
          width={450}
          height={600}
          className="relative"
        />
        <div className="absolute z-10 w-85 mr-8 h-135 mt-10 bg-[#ffebf7] overflow-y-auto">
          {/* make this dynamic to receive a list of preview */}
          <div className="ml-7 mr-8 mt-5">
            {" "}
            <BlogArticlePreview title={title} author={author} date={date} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proide Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proide
            <hr className="border-t-[2px] my-5 border-[#1c1c1c]" />
            <BlogArticlePreview title={title} author={author} date={date} />
          </div>
        </div>
      </div>
    </>
  );
}
