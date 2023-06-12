"use client";
import React from "react";
import Image from "next/image";
import img from "@/Assets/Images/shoes.png";
import style from "./CardTabItem.module.scss";
interface ICardTabItem {
  name: string;
  categoryName: string;
}

const CardITabItem = ({ name, categoryName }: ICardTabItem) => {
  return (
    <div className={style.card}>
      <div>
        <Image width={350} height={350} src={img} alt={"shoes"} />
      </div>
      <div>
        <div className={style.card__category}>{categoryName}</div>
        <h4 className={style.card__name}>{name}</h4>
        <div className={style.card__btn}>
          <a href="#">{/*<ArrowForwardIcon sx={{ color: "#fff" }} />*/}</a>
        </div>
      </div>
    </div>
  );
};

export default CardITabItem;
