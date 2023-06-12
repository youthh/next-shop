"use client";
import React from "react";
import Image from "next/image";
import image from "../../../Assets/Images/shoes.png";
import style from "./Reviews.module.scss";

type ReviewItemProps = {
  text: string;
  name: string;
  userName: string;
  img?: string;
};
const ReviewItem = ({ userName, text, name, img }: ReviewItemProps) => {
  return (
    <div className={style.item}>
      <div className={style["item__img-box"]}>
        <Image
          src={image || img}
          className={style["item__img-box__img"]}
          width={320}
          alt={"avatar"}
        />
      </div>
      <div className={style.item__right}>
        <h4 className={style.item__name}>{name}</h4>
        <p className={style.item__text}>{text}</p>
        <div className={style["item__name-user"]}>{userName}</div>
      </div>
    </div>
  );
};

export default ReviewItem;
