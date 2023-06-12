"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AccordionProps } from "@mui/material/Accordion";
import { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import { AccordionDetailsProps } from "@mui/material/AccordionDetails";
import { StyledAccordion } from "@/Components/Shared/Accordion/styledAccodion";
import { StyledAccordionSummary } from "@/Components/Shared/Accordion/styledAccordionSummary";
import { StyledAccordionDetails } from "@/Components/Shared/Accordion/styledAccodrionDetails";
export const TableAccordion = (props: AccordionProps) => {
  return <StyledAccordion disableGutters elevation={0} square {...props} />;
};

export const TableAccordionSummary = (props: AccordionSummaryProps) => {
  return (
    <StyledAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
      {...props}
    />
  );
};

export const TableAccordionDetails = (props: AccordionDetailsProps) => {
  return <StyledAccordionDetails {...props} />;
};
