import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

//categoryの型定義
export type category = {
  name: string;
} & MicroCMSListContent;

//Newsの型定義をここに移動
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: category;
} & MicroCMSListContent;

//ドメイン名やAPIキーが設定されていない場合、エラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

//microCMSと通信するためのクライアントオブジェクトを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/*
microCMSの公式SDK (microcms-js-sdk) の関数 createClient を使ってクライアントを作成しています。
この client を使って、記事やデータを取得できます。
*/

//メンバーの一覧を取得する関数
export const getMembersList = async (queries?: MicroCMSQueries) => {
  //async を付けた関数は、必ず Promise を返す関数になります。
  const listData = await client.getList<Member>({
    //client はmicroCMSのAPIと通信するための公式ライブラリのオブジェクト
    //await は Promise が解決（完了）するのを待つ という意味
    //await は async 関数の中でしか使えない
    endpoint: "members",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};
