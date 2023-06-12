import React from "react";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import img from "../../../Assets/Images/storyPhoto.png";
import styles from "./StoryBrand.module.scss";
import Link from "next/link";
const StoryBrand = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.story}>
          <div>
            <Image src={img} alt={"about_brand"} width={600} height={650} />
          </div>
          <div>
            <h4 className={styles.story__title}>Story about Our Brand</h4>
            <p className={styles.story__text}>
              Develop a website by finding a product identity that has value and
              branding to become a characteristic of a company. We will also
              facilitate the business marketing of these products with our SEO
              experts so that they become a ready-to-use website and help sell a
              product from the company Develop a website by finding a product
              identity that has value and branding to become a characteristic of
              a company. We will also facilitate the business marketing of these
              products with our SEO experts so that they become a ready-to-use
              website and help sell a product from the company
            </p>
            <Link
              className={styles.story__link}
              target={"_blank"}
              href={"https://google.com"}
            >
              Read full story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StoryBrand;
