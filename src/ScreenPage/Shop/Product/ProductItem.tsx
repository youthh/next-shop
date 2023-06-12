import React from "react";
import Image from "next/image";
import { IProductCardShop } from "@/Utils/interface/interface";
import imgS from "@/Assets/Images/shoes.png";
import Link from "next/link";
import likeHeart from "@/Assets/Icons/HeartLike.svg";
const ProductItem = ({
  nameProduct,
  categoryName,
  price,
  id,
  isFavorite,
}: IProductCardShop) => {
  return (
    <div className={"bg-white rounded-md px-4 py-4 relative"}>
      <div
        className={
          "flex justify-center items-center w-6 h-6 rounded-md bg-heart absolute right-2 top-2 pt-1 px-1 cursor-pointer"
        }
      >
        <Image src={likeHeart} alt={"like"} />
      </div>
      <div>
        <Image alt={"product"} src={imgS} width={380} />
      </div>
      <div className={"flex items-center flex-col"}>
        <div className={"text-2xl mb-4 font-bold"}>
          <Link href={"Shop/" + id}>{nameProduct}</Link>
        </div>
        <div className={"text-sm text-text_color mb-2"}>{categoryName}</div>
        <div className={"text-blue-700 font-medium"}>${price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
