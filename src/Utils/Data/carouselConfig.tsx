import React from "react";
import style from "@/ScreenPage/Home/Reviews/Reviews.module.scss";
import styles from "@/ScreenPage/Home/TopItemsPage/TopItems.module.scss";
import PrevArrow from "../../Assets/Icons/Left.svg";
import NextArrow from "../../Assets/Icons/Right.svg";
import Image from "next/image";

export const settings = {
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  slidesToScroll: 2,
  appendDots: (dots: any) => (
    <div style={{ marginTop: "80px", position: "static" }}>
      <ul style={{ margin: "0px" }} className={styles["slick-dots"]}>
        {dots.map((dot: any, index: number) => (
          <li
            key={index}
            className={
              `${dot.props.className}` +
              " " +
              (dot.props.className === "slick-active"
                ? styles["slick-active"]
                : "")
            }
          >
            {dot.props.children}
          </li>
        ))}
      </ul>
    </div>
  ),
};

const CustomPrevArrow = (props: any) => {
  return (
    <div onClick={props.onClick} className={style.arrow__left}>
      <Image src={PrevArrow} alt="Previous" />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  return (
    <div onClick={props.onClick} className={style.arrow__right}>
      <Image src={NextArrow} alt="Next" />
    </div>
  );
};

export const reviewsSettings = {
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  dots: false,
  arrow: true,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};
