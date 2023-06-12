import React from "react";

const ReviewsItem = () => {
  return (
    <div className={"relative"}>
      <div
        className={
          "w-[64px] h-[64px] rounded-full bg-cyan-500 absolute t-0 l-0"
        }
      ></div>
      <div className={"pl-[84px] space-y-4"}>
        <div className={"flex items-center w-[376px]"}>
          <div className={"text-2xl font-bold"}>Alex Iwobi</div>
          star
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
