"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";

interface FilterChoosingItemProps {
  name: string;
  checked: boolean;
}

const FilterChoosingItem = ({ name, checked }: FilterChoosingItemProps) => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      <Box sx={{ paddingLeft: "20px" }} component={"div"}>
        {name}
      </Box>
      <Checkbox
        sx={{
          padding: "0",
          "&.Mui-checked": {
            color: "#36B2F8",
          },
        }}
      />
    </Box>
  );
};

export default FilterChoosingItem;
