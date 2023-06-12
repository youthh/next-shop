import React from "react";

import Link from "next/link";
import Image from "next/image";
//Images
import Favorite from "@/Assets/Icons/Heart.svg";
import Cart from "@/Assets/Icons/Shopping Cart.svg";
import ProfilePic from "@/Assets/Icons/User Profile 2.svg";
import Notification from "@/Assets/Icons/Notification Bell.svg";
import Loop from "@/Assets/Icons/Search.svg";
// Style
import style from "./header.module.scss";
// Component
import InputSearch from "@/Components/Shared/InputSearch/InputSearch";
import Navigation from "@/Components/Header/Navigation";
const HeaderBottom = () => {
  return (
    <div className={style.header__bottom}>
      <Navigation />
      <InputSearch placeholder={"Search what you need"}>
        <Image src={Loop} alt={"Loop"} />
      </InputSearch>
      <div>
        <ul className={style.icons}>
          <li className={style.icons__item}>
            <Image src={Favorite} alt={"Favorite_heart"} />
          </li>
          <li className={style.icons__item}>
            <Link href={"/Cart"}>
              <Image src={Cart} alt={"Cart"} />
            </Link>
          </li>
          <li className={style.icons__item}>
            <Link href={"/Profile"}>
              <Image src={ProfilePic} alt={"ProfilePic"} />
            </Link>
          </li>
          <li className={style.icons__item}>
            <Image src={Notification} alt={"Notification"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
