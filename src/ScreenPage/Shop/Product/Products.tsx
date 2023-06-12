"use client";
import React from "react";
import Loader from "@/Components/Loader/Loader";
import { dataCard } from "@/Utils/Data/dataCard";
import ProductItem from "@/ScreenPage/Shop/Product/ProductItem";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Products = () => {
  return (
    <div className={"w-full"}>
      <motion.ul
        className={"grid gap-4 grid-cols-2 container"}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {dataCard.map((card) => {
          return (
            <motion.li key={card.id} className="item" variants={item}>
              <ProductItem
                key={card.id}
                price={card.price}
                isFavorite={card.isAddedToFavorite}
                categoryName={card.categoryName}
                id={card.id}
                nameProduct={card.name}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Products;
