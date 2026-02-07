import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";
import { CreditsFooter } from "@/components/CreditsFooter";

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

      <footer className="absolute hidden md:block mt-30">
        <CreditsFooter
          credits={[
            { source: "A$AP Rocky photo by Justin French (Elle, 2025)" },
            {
              source:
                "Doha Flags https://ca.pinterest.com/pin/1043638913653283603/",
            },
            { source: "Rick Owens (Rizzoli New York, 2019)" },
          ]}
        />
      </footer>
    </>
  );
}
