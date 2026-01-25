"use client";

type Props = {
  title: string;
  author: string;
  date: string;
};

export default function BlogArticlePreview({ title, author, date }: Props) {
  return (
    <div className="font-helvetica text-[25]">
      <div className="font-bold">
        {title} <br></br>
        <br></br>
      </div>
      <div>
        BY: {author} <br></br> {date}
      </div>
    </div>
  );
}
