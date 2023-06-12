"use client";
import React from "react";
import Image from "next/image";
import img from "@/Assets/Images/storyPhoto.png";
import { motion } from "framer-motion";
const ImagesChangerBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className={"w-full mb-4"}>
        <Image
          className={"rounded-lg cursor-pointer"}
          src={img}
          width={560}
          height={480}
          alt={"product image"}
        />
      </div>
      <div className={"flex items-center space-x-4"}>
        <Image
          className={"bg-amber-500 rounded-lg cursor-pointer"}
          src={img}
          width={176}
          height={145}
          alt={"product image"}
        />
        <Image
          className={"bg-amber-500 rounded-lg cursor-pointer"}
          src={img}
          width={176}
          height={145}
          alt={"product image"}
        />
        <Image
          className={"bg-amber-500 rounded-lg cursor-pointer"}
          src={img}
          width={176}
          height={145}
          alt={"product image"}
        />
      </div>
    </motion.div>
  );
};

export default ImagesChangerBlock;
