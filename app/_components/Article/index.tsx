import Image from "next/image";
import type { News } from "../../_libs/microcms";
//type を付けてインポートしているのは「型だけを取り込む」という意味（実際のJSコードには含まれない）。
import Date from "../Date";
import Category from "../category";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
        {/* 公開日があればそれを、なければ作成日を使う */}
      </div>
      {/* サムネイル画像があれば表示 */}
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
        /*dangerouslySetInnerHTML はHTML文字列をそのまま描画できる*/
      />
    </main>
  );
}
