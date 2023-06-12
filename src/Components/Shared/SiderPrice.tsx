"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Dispatch } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

interface RangeSlider {
  value: number[];
  setChange: (event: Event, newValue: number | number[]) => void;
}

export default function RangeSlider({ value, setChange }: RangeSlider) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        sx={{
          "& .MuiSlider-track": {
            color: "#E0E0E0",
            backgroundColor: "#E0E0E0",
          },
          "& .MuiSlider-thumb": {
            background: "#E0E0E0",
            width: "12px",
            height: "12px",
          },
        }}
        getAriaLabel={() => "Price"}
        value={value}
        max={10000}
        min={0}
        onChange={setChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
