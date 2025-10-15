/*
app/members/ 以下のページ全体を包む「レイアウト」を定義しています。
children には何が入る？
→ app/members/page.tsx（そのフォルダのページ内容）です。
Next.js では、同じ階層の page.tsx が自動的にこの layout.tsx に包まれてレンダリングされます。
*/

import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode; //React.ReactNode は「Reactでレンダリングできる全てのもの（文字列、要素、配列など）」を表す型です。
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
      {/* children には app/members/page.tsxの内容が入っている。 */}
    </>
  );
}

/*
RootLayout という名前の関数コンポーネントを定義。
引数 { children } で、Propsオブジェクトから children だけを取り出しています。
export default により、このコンポーネントを他のファイルからインポートできます。
*/

/*
members/layout.tsx はページの「構造」を定義し、
その中で Sheet はページの「見た目の枠（デザイン）」を担当しています。
Sheet/index.module.cssのスタイルが適用されている。
children に実際のページ内容が入ることで、
ページ全体が統一されたレイアウトで表示される仕組みです。
*/
