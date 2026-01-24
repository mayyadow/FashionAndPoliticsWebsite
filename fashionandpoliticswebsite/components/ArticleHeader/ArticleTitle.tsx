"use client";

type Props = {
  articleName: string;
  author: string;
  date: string;
};

export default function ArticleTitle({ articleName, author, date }: Props) {
  return (
    <>
      <h1
        style={{ color: "#FFFFFF" }}
        className="font-helvetica text-[40px] md:text-[51px] font-bold wrap-break-words"
      >
        {articleName}
      </h1>
      <br></br>
      <h2
        style={{ color: "#ffcfec" }}
        color="#ffcfec"
        className="font-helvetica text-[20px] md:text-[31px]"
      >
        BY: {author} <br></br> {date}{" "}
      </h2>
    </>
  );
}
