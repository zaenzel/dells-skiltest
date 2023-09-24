'use client'
import { Breadcrumb } from "flowbite-react";
import React from "react";

const BreadCrumbCustom = ({ path = "", title = "", link = "/" }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="mb-10">
      <Breadcrumb.Item href={`${link}`}>{path}</Breadcrumb.Item>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbCustom;
