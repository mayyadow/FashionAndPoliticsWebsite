"use client";

type Props = {
  articleName: string;
  author: string;
  date: string;
};

export default function ArticleTitle({ articleName, author, date }: Props) {
  return (
    <>
      <div
        style={{ fontFamily: "HelveticaWorld, Helvetica,  Arial, sans-serif" }}
      >
        <h1
          style={{ color: "#FFFFFF" }}
          className="text-[25px] md:text-[51px] font-bold wrap-break-words"
        >
          {articleName}
        </h1>
        <br></br>
        <h2
          style={{ color: "#ffcfec" }}
          color="#ffcfec"
          className="text-[14px] md:text-[31px]"
        >
          BY: {author} <br></br> {date}{" "}
        </h2>
      </div>
    </>
  );
}
