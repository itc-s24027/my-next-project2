"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true); // メニューを開く
  const close = () => setOpen(false); // メニューを閉じる

  /*
  isOpen: メニューが「開いているか・閉じているか」を表す状態
  false → 閉じている
  true → 開いている
  setOpen: 状態を変更するための関数
  */

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}

/*
<button onClick={open}>
メニューアイコン（menu.svg）をクリックしたときに、
open() が実行されて isOpen = true になります。
<nav className={cx(styles.nav, isOpen && styles.open)}>
classnames (cx) を使って、isOpen の状態によってCSSクラスを切り替えています。
*/
