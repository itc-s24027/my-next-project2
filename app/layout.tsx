//全ページ共通のレイアウトを定義するファイル
//ヘッダーやフッターのコンポーネントを作ってここにインポートするだけで、
//全ページに共通で表示されるようになる

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
