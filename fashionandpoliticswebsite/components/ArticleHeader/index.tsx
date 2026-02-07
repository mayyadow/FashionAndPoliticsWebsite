"use client";

import ArticleTitle from "./ArticleTitle";

type Props = {
  articleName: string;
  author: string;
  date: string;
};

export default function Header({ articleName, author, date }: Props) {
  return (
    <>
      <header
        className="
  relative w-full overflow-hidden
  bg-[url('/images/article-page/mobile-article-header.jpg')]
  md:bg-[url('/images/article-page/article-header.jpg')]
  bg-contain bg-center
"
      >
        {/* bg image */}
        <div className="relative z-10 mt-10 mx-20 mb-10 md:mt-20 md:mx-50 md:mb-20 size text-xl">
          <ArticleTitle articleName={articleName} author={author} date={date} />
        </div>
      </header>
    </>
  );
}
