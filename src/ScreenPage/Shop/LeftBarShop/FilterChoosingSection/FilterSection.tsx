"use client";
import React from "react";
import Image from "next/image";
import SearchIcon from "@/Assets/Icons/Search.svg";
import InputSearch from "@/Components/Shared/InputSearch/InputSearch";
import RangeSlider from "@/Components/Shared/SiderPrice";
import filter from "@/Assets/Icons/filter.svg";
import BaseAccordion from "@/Components/Shared/Accordion/Accordion";
const FilterSection = () => {
  const [value, setValue] = React.useState<number[]>([0, 10000]);

  const setNewValue = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <InputSearch styles={{ width: "300px" }} placeholder={"SearchProduct"}>
        <Image src={SearchIcon} alt={"SearchIcon"} />
      </InputSearch>
      <div style={{ width: "300px", margin: "66px 0 72px 0" }}>
        <div className={"flex justify-between mb-6"}>
          <div>Price</div>
          <Image src={filter} alt={"filter"} />
        </div>
        <RangeSlider value={value} setChange={setNewValue} />
        <div className={"flex justify-between mt-6"}>
          <div>Rage</div>
          <p>${value[0] + "-" + value[1]}</p>
        </div>
      </div>
      <div className={"text-2xl mb-2"}>Product Categories</div>
      <BaseAccordion />
    </div>
  );
};

export default FilterSection;
