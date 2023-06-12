import React from "react";
import Container from "@/Components/Container/Container";
import BasicBreadcrumbs from "@/Components/Shared/BreadCrumbs/BreadCrumbs";
import ImagesChangerBlock from "@/ScreenPage/ProductPage/ImagesChangerBlock";
import InfoProduct from "@/ScreenPage/ProductPage/InfoProduct";
import Description from "@/ScreenPage/ProductPage/Description";
import Reviews from "@/ScreenPage/ProductPage/Reviews";

type ProductPageProps = {
  name: string;
  category: string;
};

const ProductPage = ({ name, category }: ProductPageProps) => {
  return (
    <section className={"mt-10"}>
      <Container>
        <BasicBreadcrumbs name={name} category={category} />
        <div className={"flex justify-between mt-10"}>
          <div className={"w-6/12"}>
            <ImagesChangerBlock />
          </div>
          <InfoProduct />
        </div>
        <div className={"mb-8"}>
          <Description />
        </div>
        <div>
          <Reviews />
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
