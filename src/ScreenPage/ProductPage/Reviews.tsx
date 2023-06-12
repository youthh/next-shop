import React from "react";
import ReviewsItem from "@/ScreenPage/ProductPage/ReviewsItem";

const Reviews = () => {
  return (
    <>
      <ul>
        {Array.of(3).map((d, index) => {
          return (
            <li key={index}>
              <ReviewsItem commentText={"dsadasd"} img={"dasd"} date={"dsd"} />
            </li>
          );
        })}
        <li>
          <ReviewsItem commentText={"dsadasd"} img={"dasd"} date={"dsd"} />
        </li>
      </ul>
    </>
  );
};

export default Reviews;
