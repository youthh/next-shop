"use client";
import React from "react";
import CommonButton from "@/Components/Shared/CummonButton/CommonButton";
import imgStar from "@/Assets/Icons/Star.svg";
import Image from "next/image";
import cartBtn from "@/Assets/Icons/cartBtn.svg";
import heartBtn from "@/Assets/Icons/HeartBtn.svg";
import { motion } from "framer-motion";
const InfoProduct = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={"w-[540px]"}
    >
      <div className={"text-6xl mb-8 font-bold"}>Urbano jackets</div>
      <div className={"flex items-align w-[192px] justify-between mb-6"}>
        <Image src={imgStar} alt={"rating"} />
        <Image src={imgStar} alt={"rating"} />
        <Image src={imgStar} alt={"rating"} />
        <Image src={imgStar} alt={"rating"} />
        <Image src={imgStar} alt={"rating"} />
      </div>
      <div className={"text-6xl mb-10 text-primary font-bold"}>$99</div>
      <div className={"mb-6 text-2xl font-bold"}>Details Product</div>
      <p className={"font-base text-[#666666] mb-2"}>
        Develop a website by finding a product identity that has value and
        branding to become a characteristic of a company. We will also
        facilitate the business marketing of these products with our SEO experts
        so that they become a ready-to-use website and help sell a product from
        the company.
      </p>
      <p className={"font-base text-[#666666] "}>
        Develop a website by finding a product identity that has value and
        branding to become a characteristic of a company. We will also
        facilitate the business marketing of these products with our SEO experts
        so that they become a ready-to-use website and help sell a product from
        the company.
      </p>
      <div className={"flex items-center w-[360px] justify-between mt-14"}>
        <CommonButton
          addon={<Image className={"ml-1"} src={heartBtn} alt={"heart"} />}
          text={"Wishlist"}
          variant={"outlined"}
        >
          Wishlist
        </CommonButton>
        <CommonButton
          style={{ width: "172px" }}
          addon={
            <Image className={"ml-1"} src={cartBtn} alt={"Shopping cart"} />
          }
          text={"Add to Cart"}
          variant={"filled"}
        ></CommonButton>
      </div>
    </motion.div>
  );
};

export default InfoProduct;
