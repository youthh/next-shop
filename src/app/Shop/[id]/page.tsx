import React from "react";
import ProductPage from "@/ScreenPage/ProductPage/ProductPage";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ProductPage name={"Jackets"} category={"Urbano Jackets"} />
    </div>
  );
};

export default Page;
