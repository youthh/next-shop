import React from "react";
import Container from "@/Components/Container/Container";
import styles from "./Achievements.module.scss";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Image from "next/image";
import {logos} from "@/Utils/Data/Logos";
const Achievement = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div>
          <SectionTitle>Our Achievement</SectionTitle>
          <ul className={styles.container__logos}>
            {logos.map((logo, index) => {
              return (
                <li key={index}>
                  <Image src={logo} alt="logo" />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Achievement;
