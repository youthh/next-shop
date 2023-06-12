import { styled, Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)(() => ({
  "& .MuiAccordionSummary-root": {
    backgroundColor: "transparent",
  },
  boxShadow: "none",

  backgroundColor: "transparent",

  marginBottom: "1px",

  "&:before": {
    display: "none",
  },
  "& .Mui-expanded": {
    backgroundColor: "transparent",
  },
}));
