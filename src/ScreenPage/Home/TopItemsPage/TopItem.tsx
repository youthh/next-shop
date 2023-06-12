"use client";
import React from "react";
import Image from "next/image";
import image from "../../../Assets/Images/shoeTop.png";
import style from "./TopItems.module.scss";
interface TopItemProps {
  isSale: boolean;
  img?: string;
  nameOfProduct: string;
  price: number;
  discountPrice: number;
  categoryProduct: string;
}

const TopItem = ({
  nameOfProduct,
  categoryProduct,
  img,
  discountPrice,
  price,
  isSale,
}: TopItemProps) => {
  return (
    <div className={style.card}>
      {isSale && <div className={style.card__sale}>Sale</div>}
      <div>
        <Image src={image} width={400} alt={nameOfProduct} />
      </div>
      <div className={style.card__text}>
        <h4 className={style.card__name}>{nameOfProduct}</h4>
        <div className={style.card__category}>{categoryProduct}</div>
        <div className={style.card__container}>
          <div className={style.card__price__sale}>{discountPrice}$</div>
          <div className={style.card__price}>{price}$</div>
        </div>
      </div>
    </div>
  );
};

export default TopItem;
