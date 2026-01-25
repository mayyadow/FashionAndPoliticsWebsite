import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";
type Props = {
  title: string;
  author: string;
  date: string;
};

export default function BlogPage({ title, author, date }: Props) {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileBlog title={title} author={author} date={date} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopBlog title={title} author={author} date={date} />
      </div>
    </>
  );
}
