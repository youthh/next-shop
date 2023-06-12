import { styled, AccordionSummary } from "@mui/material";

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  backgroundColor: "transparent",
  color: "#131313",
  fontSize: "16px",
  padding: "0",
  minHeight: "42px",
  border: "none",
  "& .MuiAccordionSummary-content": {
    margin: "0",
  },
  margin: "1px 1px 0",
}));
