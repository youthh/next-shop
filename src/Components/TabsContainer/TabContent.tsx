"use client";
import React, { ReactNode } from "react";
import style from "./TabsContainer.module.scss";
interface ITabContent {
  children: ReactNode[];
  indexTab: number;
}

const TabContent = ({ children, indexTab }: ITabContent) => {
  return (
    <div className={style.tabContentBox__content}>
      {children?.map((item) => {
        return item;
      })}
    </div>
  );
};

export default TabContent;
