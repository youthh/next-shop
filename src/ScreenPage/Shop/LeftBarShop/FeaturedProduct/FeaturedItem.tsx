import React from "react";
import Link from "next/link";

interface FeaturedItemProps {
  name: string;
  id?: number;
}
const FeaturedItem = ({ name, id = 1 }: FeaturedItemProps) => {
  return (
    <div className={"flex justify-start items-center mb-6"}>
      <div className={"h-14 w-14 bg-amber-500 rounded-lg"}></div>
      <div className={"ml-6"}>
        <Link href={`Shop/${id}`}>{name}</Link>
      </div>
    </div>
  );
};

export default FeaturedItem;
