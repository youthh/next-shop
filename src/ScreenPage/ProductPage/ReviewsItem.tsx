import React from "react";
import Image from "next/image";
import imgStar from "@/Assets/Icons/Star.svg";

type ReviewsItemProps = {
  img: string;
  date: string;
  commentText: string;
};

const ReviewsItem = ({ img, date, commentText }: ReviewsItemProps) => {
  return (
    <div className={"relative mb-12"}>
      <div
        className={
          "w-[64px] h-[64px] rounded-full bg-cyan-500 absolute t-0 l-0"
        }
      ></div>
      <div className={"pl-[84px] space-y-4"}>
        <div className={"flex items-center w-[344px] justify-between"}>
          <div className={"text-2xl font-bold"}>Alex Iwobi</div>
          <div className={"flex items-center w-[192px] justify-between"}>
            <Image src={imgStar} alt={"rating"} />
            <Image src={imgStar} alt={"rating"} />
            <Image src={imgStar} alt={"rating"} />
            <Image src={imgStar} alt={"rating"} />
            <Image src={imgStar} alt={"rating"} />
          </div>
        </div>
        <div className={"text-base"}>2 March 2021 at 06.30 pm</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
          aut culpa cum deleniti ducimus, esse, et fugit id minus non nostrum
          quae quas quos temporibus tenetur totam unde voluptatibus!
        </p>
      </div>
    </div>
  );
};

export default ReviewsItem;
