import React from "react";
import style from "./Home.module.scss";
import Image from "next/image";
import img from "../../Assets/Images/shoesHome.jpg";
import Container from "@/Components/Container/Container";
import CommonButton from "@/Components/Shared/CummonButton/CommonButton";
const MainHomeScreen = () => {
  return (
    <Container>
      <div className={style.home}>
        <div>
          <Image
            className={style.home__img}
            src={img}
            alt={"shoes"}
            width={600}
            height={400}
            color={"#000"}
          />
        </div>
        <div>
          <h1 className={style.home__title}>Your Premium Sound, Unplugged!</h1>
          <p className={style.home__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <CommonButton text={"Find out More"} />
        </div>
      </div>
    </Container>
  );
};

export default MainHomeScreen;
