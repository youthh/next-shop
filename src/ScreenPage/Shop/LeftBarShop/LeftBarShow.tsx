import React from "react";
import FilterSection from "@/ScreenPage/Shop/LeftBarShop/FilterChoosingSection/FilterSection";
import FeaturedProduct from "@/ScreenPage/Shop/LeftBarShop/FeaturedProduct/FeaturedProduct";

const LeftBarShop = () => {
  return (
    <div className={"w-1/3 mr-16"}>
      <FilterSection />
      <FeaturedProduct />
    </div>
  );
};

export default LeftBarShop;
