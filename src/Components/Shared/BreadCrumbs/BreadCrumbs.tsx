"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

type BasicBreadcrumbsProps = {
  category: string;
  name: string;
};

export default function BasicBreadcrumbs({
  name,
  category,
}: BasicBreadcrumbsProps) {
  return (
    <div className={"text-2xl flex items-center space-x-2 font-bold"}>
      <Link href={"/Shop"}>Shop / </Link>
      <Link href={"/Shop/" + category}>{category} / </Link>
      <div style={{ color: "#666" }}>{name}</div>
    </div>
  );
}
