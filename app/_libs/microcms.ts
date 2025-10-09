//categoryの型定義
export type category = {
  name: string;
};

//Newsの型定義をここに移動
export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
