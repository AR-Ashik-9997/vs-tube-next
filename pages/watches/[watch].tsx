import React, { ReactElement, useState } from "react";
import Layout from "@/layouts/default";
import PlayList from "@/components/playlist";
import { GetServerSideProps } from "next";
import { GetSingleData, IComments } from "@/types/globalTypes";
import { Button, Input } from "@nextui-org/react";
import {
  useGetPostCommentQuery,
  usePostCommentMutation,
} from "@/redux/feature/playlist/searchApi";
import Image from "next/image";
import { readableTime } from "@/types/middleware";

const Watch = ({ SingleData }: GetSingleData) => {
  const [comment, setComment] = useState<string>("");
  const { data } = useGetPostCommentQuery(SingleData?.id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const [postComment] = usePostCommentMutation();
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const comment = event.target.value;
    if (comment.length > 0) {
      setComment(comment.trim());
    } else {
      setComment("");
    }
  };
  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    const options = {
      data: {
        playlistId: SingleData.id,
        comment: comment,
      },
    };
    if (comment.length > 0) {
      postComment(options);
      setComment("");
      e.target.reset();
    }
  };
console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-4/5 sm:mx-auto pt-12">
      <div className="lg:col-span-8">
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            allow="accelerometer; autoplay"
            allowFullScreen={true}
            className="absolute left-0 top-0 right-0 bottom-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${SingleData?.video}?autoplay=1`}
          ></iframe>
        </div>
        <div className="pt-4">
          <h1 className="text-xs xl:text-xl 2xl:text-2xl">
            {SingleData?.title}
          </h1>
        </div>
        <form onSubmit={handleCommentSubmit}>
          <div className="w-full pt-12">
            <Input
              type="text"
              variant="underlined"
              placeholder="Add a comment"
              onChange={handleCommentChange}
            />
          </div>
          <div className="pt-4 flex justify-end">
            {comment.length > 0 ? (
              <Button type="submit" color="primary">
                Comment
              </Button>
            ) : (
              <Button isDisabled color="primary">
                Comment
              </Button>
            )}
          </div>
        </form>
        <section className="pt-12">
          {data?.data.map((item:IComments) => (
            <div className="flex items-center gap-4" key={item?.id}>
              <div>
                <Image
                  src="https://theme4press.com/wp-content/uploads/2015/11/featured-small-circular.jpg"
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <p>name</p>
                  <p>{readableTime(item?.updatedAt)}</p>
                </div>
                <p>{item?.comment}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="lg:col-span-4">
        <div className="max-h-96 lg:max-h-80 xl:max-h-96 2xl:max-h-[34rem] border rounded-xl p-4 overflow-y-scroll outline-none">
          <PlayList />
        </div>
      </div>
    </div>
  );
};

Watch.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params }: any = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/play_lists/${params.watch}`
  );
  const data = await res.json();
  return {
    props: {
      SingleData: data.data,
    },
  };
};
export default Watch;
