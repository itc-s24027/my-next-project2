import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

type Peops = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Peops) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
