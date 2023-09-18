import React, { ReactElement, useState } from "react";
import Layout from "@/layouts/default";
import { GetServerSideProps } from "next";
import { GetSingleData, IComments } from "@/types/globalTypes";
import { Button, Input } from "@nextui-org/react";
import {
  useGetCommentsQuery,
  usePostCommentMutation,
} from "@/redux/feature/playlist/searchApi";
import Image from "next/image";
import { readableTime } from "@/types/middleware";
import PlayList from "@/components/playlist";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";

const Watch = ({ SingleData }: GetSingleData) => {
  const { data } = useGetCommentsQuery(SingleData?.id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const { data: session } = useSession();
  const [comment, setComment] = useState<string>("");
  const [cancel, setCancel] = useState<boolean>(false);
  const [postComment] = usePostCommentMutation();
  const token = Cookies.get("auth");
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
      playlistId: SingleData.id,
      comment: comment,
    };
    if (comment.length > 0) {
      postComment({ data: options, token });
      setComment("");
      e.target.reset();
    }
  };

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
          <div className="mt-6">
            <h1 className="text-lg">{data?.data.length} Comments</h1>
          </div>
          <div className="flex items-center gap-4 py-4">
            <div>
              <Image
                src={
                  session?.user
                    ? `${session?.user?.image}`
                    : "https://theme4press.com/wp-content/uploads/2015/11/featured-small-circular.jpg"
                }
                width={45}
                height={45}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="w-full">
              <Input
                type="text"
                variant="underlined"
                placeholder="Add a comment"
                onClick={() => setCancel(true)}
                onChange={handleCommentChange}
              />
            </div>
          </div>
          {cancel ? (
            <div className="pt-4 flex justify-end">
              {session?.user && comment.length > 0 ? (
                <div className="flex items-center gap-4">
                  <Button onClick={()=>setCancel(false)} color="default" variant="light">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Comment
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Button onClick={()=>setCancel(false)} color="default" variant="light">
                    Cancel
                  </Button>
                  <Button isDisabled color="primary">
                    Comment
                  </Button>
                </div>
              )}
            </div>
          ) : undefined}
        </form>
        <section className="pt-4">
          {data?.data.map((item: IComments) => (
            <div className="flex items-center gap-4 mb-4" key={item?.id}>
              <div>
                <Image
                  src={item?.image}
                  width={45}
                  height={45}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <p>{item?.username}</p>
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
  const res = await fetch(`${process.env.DB_HOST}/play_lists/${params.watch}`);
  const data = await res.json();
  return {
    props: {
      SingleData: data.data,
    },
  };
};
export default Watch;
