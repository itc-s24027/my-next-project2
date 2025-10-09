import styles from "./index.module.css";

// props（プロップス）は React コンポーネントにデータを渡すための仕組み です。
// 親コンポーネントから子コンポーネントへ値を渡すときに使われます。
type Props = {
  href: string;
  children: React.ReactNode;
  // <ButtonLink> と </ButtonLink> の間に入る中身（テキストや他の要素）を受け取る
};

// 他のファイルでコンポーネントをimportするためにexportする
export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
