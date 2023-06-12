import React from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import style from "./TopItems.module.scss";
import ItemsCarousel from "./ItemsCarousel";

const TopItems = () => {
  return (
    <section className={style.section}>
      <div style={{ overflow: "hidden" }}>
        <div>
          <SectionTitle>Top Items</SectionTitle>
          <p className={style.header__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div style={{ minHeight: "600px" }}>
          <ItemsCarousel />
        </div>
      </div>
    </section>
  );
};

export default TopItems;
