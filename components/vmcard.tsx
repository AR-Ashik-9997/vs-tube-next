import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import pics from "./maxresdefault.jpg";
const Vmcard = () => {
  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  w-4/5 sm:mx-auto pt-12">
      <Link href="/watch">
        <Card className="w-full h-[300px]">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co/87kppBp/alone.jpg"
          />
        </Card>
      </Link>
    </div>
  );
};

export default Vmcard;
