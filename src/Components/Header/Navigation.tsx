import React from "react";
import style from "@/Components/Header/header.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__container}>
        <li className={"nav__item"}>
          <Link className={style.nav__item__link} href={"/Shop"}>
            Shop
          </Link>
        </li>
        <li className={"nav__item"}>
          <Link className={style.nav__item__link} href={"/Shop"}>
            Promo
          </Link>
        </li>
        <li className={"nav__item"}>
          <Link className={style.nav__item__link} href={"/Shop"}>
            About
          </Link>
        </li>
        <li className={"nav__item"}>
          <Link className={style.nav__item__link} href={"/Shop"}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
