"use client";
import { Dropdown } from "flowbite-react";

const Filter = ({items}) => {
  return (
    <Dropdown dismissOnClick={false} color="gray" size={"xl"} label={items.label}>
      {
        items?.items?.map((item, i) => {
          return (
            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
            )
          })
      }
    </Dropdown>
  );
};

export default Filter;
