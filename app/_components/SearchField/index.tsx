"use client";
import Image from "next/image"; //Next.jsのApp Router用のフック
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //ページ再読込を防止
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`); //router.push() で /news/search?q=天気 に遷移
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}

/*
🌐 全体の流れ（動作イメージ）
ユーザーが入力欄に「ジブリ」と入力
Enter を押す（または送信）
JavaScript が handleSubmit を呼び出す
URL にクエリをつけてページ遷移：
👉 /news/search?q=ジブリ
/news/search ページで searchParams.q を使って検索結果を表示する
*/
