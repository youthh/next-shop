import React from "react";
import LeftBarShop from "@/ScreenPage/Shop/LeftBarShop/LeftBarShow";
import Container from "@/Components/Container/Container";
import Products from "@/ScreenPage/Shop/Product/Products";

const ShopPage = () => {
  return (
    <section className={"bg-F4F7F8 pt-14 pb-20"}>
      <Container>
        <div className={"w-full flex"}>
          <LeftBarShop />
          <Products />
        </div>
      </Container>
    </section>
  );
};

export default ShopPage;
