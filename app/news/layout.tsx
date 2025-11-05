import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;
//news/layoutにrevalidateを追加
//news関連のページはすべて60秒ごとに再生成される

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
