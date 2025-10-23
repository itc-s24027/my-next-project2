//ページネーション
import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms"; //ニュース一覧を取得する関数をインポート
import NewsList from "@/app/_components/NewsList"; //ニュース一覧を表示するコンポーネントをインポート
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type props = {
  params: {
    current: string;
  };
};
/*
ここで params.current は、
Next.js が URL から自動で渡してくれる値です。
/news/p/1  =>   "1" 
*/

export default async function Page({ params }: props) {
  const current = parseInt(params.current, 10);
  //URL から受け取った params.current は 文字列 なので
  // parseInt で 数値（number） に変換

  if (Number.isNaN(current) || current < 1) {
    notFound();
    //current が NaN（数値に変換できなかった場合）
    // または 1 未満の場合は404ページを表示
  }
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT, //1ページあたり10件表示
    offset: NEWS_LIST_LIMIT * (current - 1), //何件目から取得するかを指定
    /*
    /news/p/1 → offset = 10 * (1 - 1) = 0 → 1〜10件目を取得
    /news/p/2 → offset = 10 * (2 - 1) = 10 → 11〜20件目を取得
    /news/p/3 → offset = 10 * (3 - 1) = 20 → 21〜30件目を取得
    */
  });

  if (news.length === 0) {
    notFound();
    //取得した記事が0件の場合は404ページを表示
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
