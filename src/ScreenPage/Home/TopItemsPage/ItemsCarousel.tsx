"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopItem from "./TopItem";
import { settings } from "@/Utils/Data/carouselConfig";
import style from "./TopItems.module.scss";
const ItemsCarousel = () => {
  return (
    <Slider {...settings} className={style.carousel}>
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
      <TopItem
        isSale={true}
        nameOfProduct={"Tracksuit Hyped"}
        price={454}
        discountPrice={384}
        categoryProduct={"Apple Cherry"}
      />
    </Slider>
  );
};

export default ItemsCarousel;
