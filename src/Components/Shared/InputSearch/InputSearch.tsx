import React, { ReactNode } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./inputSearch.module.scss";
interface IProps {
  placeholder: string;
  children: ReactNode;
  styles?: Record<string, unknown>;
}
const InputSearch = ({ placeholder, children, styles }: IProps) => {
  return (
    <div style={{ ...styles }} className={style.box}>
      <input
        style={{
          width: "100%",
          border: "0",
          outline: "none",
          background: "transparent",
        }}
        type="text"
        placeholder={placeholder}
        className={style.box__input}
      />
      {children}
    </div>
  );
};

export default InputSearch;
