import React from "react";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import imgMap from "../../../../untitled3/src/Assets/Images/mapFooter.png";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <Container>
        <div className={styles.footer__inner}>
          <div>
            <Image src={imgMap} width={360} alt={"map"} />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h5 className={styles.header__title}>Dealerz.</h5>

              <ul className={styles.social}>
                <li className={styles.social__item}>YT</li>
                <li className={styles.social__item}>Fb</li>
                <li className={styles.social__item}>Tw</li>
                <li className={styles.social__item}>Ig</li>
              </ul>
            </div>
            <div className={styles.content__policy}>Privacy Policy</div>
            <div className={styles.content__terms}>Terms and Condition</div>
            <div className={styles.content__copyrite}>
              @2020 TanahAir Studio. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
