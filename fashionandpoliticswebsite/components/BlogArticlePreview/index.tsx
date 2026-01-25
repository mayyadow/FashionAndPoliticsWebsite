"use client";

type Props = {
  title: string;
  author: string;
  date: string;
};

export default function BlogArticlePreview({ title, author, date }: Props) {
  return (
    <div className="font-helvetica text-xl md:text-lg">
      <div className="font-bold text-2xl md:text-xl">
        {title} <br></br>
        <br></br>
      </div>
      <div>
        BY: {author} <br></br> {date}
      </div>
    </div>
  );
}
