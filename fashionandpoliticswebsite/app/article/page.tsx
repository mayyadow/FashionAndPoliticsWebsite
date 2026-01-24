import ArticleHeader from "@/components/ArticleHeader";
type Props = {
  articleName: string;
  author: string;
  date: string;
};
export default function ArticlePage({
  articleName = "This is a normal article title",
  author = "PLACEHOLDER",
  date = "00/00/00",
}: Props) {
  return (
    <>
      <ArticleHeader articleName={articleName} author={author} date={date} />

      <div className="mt-10 mx-10 md:mx-50 px-10 md:px-0">
        <p className="break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </>
  );
}
