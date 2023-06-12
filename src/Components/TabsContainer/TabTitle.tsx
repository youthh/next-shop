"use client";
import React from "react";
import style from "./TabsContainer.module.scss";
interface ITabsProps {
  title: string;
  onClickTabHandler: (num: number) => void;
  tabIndex: number;
  currentTab: number;
}
const TabTitle = ({
  title,
  onClickTabHandler,
  tabIndex,
  currentTab,
}: ITabsProps) => {
  return (
    <div
      className={
        style.tabTitle +
        " " +
        (tabIndex === currentTab ? style.tabTitle__active : "")
      }
      onClick={() => onClickTabHandler(tabIndex)}
    >
      {title}
    </div>
  );
};

export default TabTitle;
