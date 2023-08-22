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
