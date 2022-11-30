export interface PostType {
  contents: string;
  imageUrls: string[];
  like: { count: number; userLikeStatus: boolean };
  postId: string;
  score: number;
  store: {
    description: string;
    storeId: string;
    storeName: string;
  };
  user: {
    userId: string;
    userNickname: string;
    userProfileUrl: string;
  };
}
