import React from "react";
import style from "./title.module.scss";
interface ITitleProps {
  children: string;
  style?: Record<string, unknown>;
}
const SectionTitle = ({ children }: ITitleProps) => {
  return <h2 className={style.title}>{children}</h2>;
};

export default SectionTitle;
