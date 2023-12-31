export interface IPlayList {
  id: string;
  image: string;
  video: string;
  title: string;
}
export type IData = {
  AllData: { data: [] };
};
export type GetSingleData = {
  SingleData: {
    id: string;
    image: string;
    video: string;
    title: string;
  };
};
export type GetSearchResult = {
  SearchResult: { data: [] };
};
export type IUser = {
  users: {
    id: string;
    name: string;
    image: string;
  }[];
};

export type IComments = {
  id: string;
  comment: string;
  playlistId: string;
  username: string;
  image: string;
  updatedAt: string;
};
