import React from "react";
import FilterChoosingItem from "@/ScreenPage/Shop/LeftBarShop/FilterChoosingSection/FilterChoosingItem";
import { categoryProduct } from "@/Utils/Data/categoryItems";
import { CategoryName } from "@/Utils/Enum/Enums";

type FilterChoosingBoxProps = {
  categoryName: CategoryName;
};
const FilterChoosingBox = ({ categoryName }: FilterChoosingBoxProps) => {
  return (
    <div>
      {categoryProduct[categoryName]?.subCategoryName.map((subCategory) => {
        return (
          <FilterChoosingItem
            checked={subCategory.checked}
            key={subCategory.id}
            name={subCategory.subCategoryType}
          />
        );
      })}
    </div>
  );
};

export default FilterChoosingBox;
