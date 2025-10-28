import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

type Peops = {
  children: React.ReactNode;
};

export const revalidate = 60;
//news/layoutにrevalidateを追加
//news関連のページはすべて60秒ごとに再生成される

export default function NewsLayout({ children }: Peops) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
