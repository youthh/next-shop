"use client";
import React, { useState } from "react";
import TabTitle from "./TabTitle";
import { tabsTitle } from "@/Utils/Data/data";
import style from "./TabsContainer.module.scss";
import TabContent from "./TabContent";
import CardITabItem from "@/Components/CardTab/CardITabItem";
const TabsContainer = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const onClickSetNewTab = (tubNumber: number) => {
    setCurrentTab(tubNumber);
  };
  return (
    <div className={style.tabContentBox}>
      <div className={style.tabContainer}>
        {tabsTitle.map((tab, index) => {
          return (
            <TabTitle
              currentTab={currentTab}
              key={index}
              title={tab.title}
              onClickTabHandler={onClickSetNewTab}
              tabIndex={index}
            />
          );
        })}
      </div>
      <TabContent indexTab={currentTab}>
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
        <CardITabItem name={"Tropical Suit"} categoryName={"Category Dress"} />
      </TabContent>
    </div>
  );
};

export default TabsContainer;
