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
    comments: {
      id: string;
      comment: string;
      playlistId: string;
      updatedAt: string;
    }[];
  };
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
  updatedAt: string;
};
