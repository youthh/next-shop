import * as React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  TableAccordion,
  TableAccordionDetails,
  TableAccordionSummary,
} from "@/Components/Shared/Accordion/Accc";
import FilterChoosingBox from "@/ScreenPage/Shop/LeftBarShop/FilterChoosingSection/FilterChoosingBox";
import { CategoryName } from "@/Utils/Enum/Enums";
import { categoryProduct } from "@/Utils/Data/categoryItems";

export default function BaseAccordion() {
  return (
    <div style={{ width: "300px" }}>
      {categoryProduct.map((item, index) => {
        return (
          <TableAccordion key={item.id}>
            <TableAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.category}</Typography>
            </TableAccordionSummary>
            <TableAccordionDetails>
              <FilterChoosingBox categoryName={index} />
            </TableAccordionDetails>
          </TableAccordion>
        );
      })}
    </div>
  );
}
