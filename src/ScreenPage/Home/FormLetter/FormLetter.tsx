import React from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Container from "@/Components/Container/Container";
import styles from "./FormLetter.module.scss";
import arrowBtn from "../../../Assets/Icons/ButtonArrow.svg";
import Image from "next/image";
import InputSearch from "@/Components/Shared/InputSearch/InputSearch";
import CommonButton from "@/Components/Shared/CummonButton/CommonButton";
const FormLetter = () => {
  return (
    <section className={styles.form}>
      <Container>
        <div className={styles.form__box}>
          <SectionTitle>Join Our News Letters</SectionTitle>
          <p className={styles.form__text}>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
          </p>

          <InputSearch
            placeholder={"Insert your mail here"}
            styles={{ width: "816px", background: "#F4F7F8" }}
          >
            <CommonButton
              style={{ padding: "12px", width: "48px", height: "48px" }}
              img={<Image src={arrowBtn} alt="text-img" />}
            />
          </InputSearch>
        </div>
      </Container>
    </section>
  );
};

export default FormLetter;
