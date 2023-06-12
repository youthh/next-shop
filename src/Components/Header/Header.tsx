import React from "react";
import Image from "next/image";
//component
import Container from "@/Components/Container/Container";
import Phone from "../../Assets/Icons/Phone.svg";
import shippingBus from "@/Assets/Icons/Truck Delivery.svg";
//style
import style from "./header.module.scss";
import HeaderBottom from "@/Components/Header/Header_bottom";
const Header = () => {
  return (
    <div style={{ background: "#F4F7F8" }}>
      <Container>
        <div className={style.header__container}>
          <div className={style.header}>
            <div>
              <h2 className={style.header__logo}>Dealerz.</h2>
            </div>
            <div className={style.header__right}>
              <div className={style.header__right__item}>
                <Image src={Phone} alt={"phone"} />
                <p className={style.header__info}>Call Center</p>
              </div>
              <div className={style.header__right__item}>
                <Image src={shippingBus} alt={"shipingBus"} />
                <p className={style.header__info}>Shipping & Returns</p>
              </div>
            </div>
          </div>
          <HeaderBottom />
        </div>
      </Container>
    </div>
  );
};

export default Header;
