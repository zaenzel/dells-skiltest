export const filters = [
  {
    id: 1,
    name: "category",
    label: "Category",
    items: [
      {
        id: 1,
        name: "Brand",
        link: "",
      },
      {
        id: 2,
        name: "Product",
        link: "",
      },
      {
        id: 3,
        name: "Price Range",
        link: "",
      },
      {
        id: 4,
        name: "Category",
        link: "",
      },
    ],
  },
];

export const dollars = (x = 0) => {
  return x.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const tHeadProducts = [
  "No",
  "Product name",
  "Brand",
  "Price",
  "Stock",
  "Category",
];

export const tHeadCarts = ["No", "Product", "Quantity", "Price", "Final Price"];
