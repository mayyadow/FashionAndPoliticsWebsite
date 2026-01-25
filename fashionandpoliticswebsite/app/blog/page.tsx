import BlogArticlePreview from "@/components/BlogArticlePreview";
import Image from "next/image";

type BlogPost = {
  title: string;
  author: string;
  date: string;
};

const samplePost: BlogPost = {
  title: "TITLE OF ARTICLE",
  author: "AUTHOR FIRST LAST",
  date: "00/00/00",
};

export default function BlogPage() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src="/images/blog-page/mobile-blank-folder.jpg"
          alt="blank page"
          width={450}
          height={600}
          className="relative"
        />
        <div className="absolute z-10">
          <BlogArticlePreview
            title={samplePost.title}
            author={samplePost.author}
            date={samplePost.date}
          />
        </div>
      </div>
    </>
  );
}
