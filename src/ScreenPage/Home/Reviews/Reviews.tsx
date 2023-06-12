"use client";
import React from "react";
import ReviewItem from "./ReviewItem";
import { reviewsSettings } from "@/Utils/Data/carouselConfig";
import style from "./Reviews.module.scss";
import Slider from "react-slick";
import Container from "@/Components/Container/Container";

const Reviews = () => {
  return (
    <section className={style.section}>
      <Container>
        <Slider {...reviewsSettings}>
          <ReviewItem
            name={"Good Seller!"}
            text={
              "I am very happy with the services provided, it is very helpful, starting\n" +
              "from the insight that the company gave from the start that I did not\n" +
              "understand what it was so I got knowledge and made my website\n" +
              "look better"
            }
            userName={"Anna Saraspova"}
          />
          <ReviewItem
            name={"Good Seller!"}
            text={
              "I am very happy with the services provided, it is very helpful, starting\n" +
              "from the insight that the company gave from the start that I did not\n" +
              "understand what it was so I got knowledge and made my website\n" +
              "look better"
            }
            userName={"Anna Saraspova"}
          />
          <ReviewItem
            name={"Good Seller!"}
            text={
              "I am very happy with the services provided, it is very helpful, starting\n" +
              "from the insight that the company gave from the start that I did not\n" +
              "understand what it was so I got knowledge and made my website\n" +
              "look better"
            }
            userName={"Anna Saraspova"}
          />
        </Slider>
      </Container>
    </section>
  );
};

export default Reviews;
