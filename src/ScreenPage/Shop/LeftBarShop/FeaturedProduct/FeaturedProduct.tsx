import React from "react";
import FeaturedItem from "@/ScreenPage/Shop/LeftBarShop/FeaturedProduct/FeaturedItem";

const featuredProduct = [
  { id: 1, name: "Tropical Playsuit" },
  { id: 2, name: "Tropical Playsuit" },
  { id: 3, name: "Tropical Playsuit" },
  { id: 4, name: "Tropical Playsuit" },
  { id: 5, name: "Tropical Playsuit" },
  { id: 6, name: "Tropical Playsuit" },
];

const FeaturedProduct = () => {
  return (
    <div className={"mt-9 w-52"}>
      <h6 className={"mb-8 text-2xl"}>Feature Product</h6>
      <div>
        {featuredProduct.map((product) => {
          return <FeaturedItem key={product.id} name={product.name} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
