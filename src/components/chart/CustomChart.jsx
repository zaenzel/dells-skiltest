"use client";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Product Stock",
    },
  },
};

const CustomChart = ({ products }) => {
  const productByStock = products?.products?.map((e) => ({
    title: e.title,
    stock: e.stock,
  }));

  const productName = productByStock.map((e) => e.title);
  const productStock = productByStock.map((e) => e.stock);

  const data = {
    labels: productName,
    datasets: [
      {
        label: "stock",
        data: productStock,
        backgroundColor: [
          "rgba(138, 222, 238, 1)",
          "rgba(12, 72, 200, 1)",
          "rgba(158, 113, 209, 1)",
          "rgba(36, 75, 134, 1)",
          "rgba(180, 166, 240, 1)",
          "rgba(7, 82, 113, 1)",
          "rgba(87, 226, 202, 1) ",
          "rgba(23, 174, 238, 1)",
          "rgba(47, 135, 210, 1) ",
          "rgba(214, 246, 229, 1)",
        ],
        borderColor: [
          "rgba(138, 222, 238, 1)",
          "rgba(12, 72, 200, 1)",
          "rgba(158, 113, 209, 1)",
          "rgba(36, 75, 134, 1)",
          "rgba(180, 166, 240, 1)",
          "rgba(7, 82, 113, 1)",
          "rgba(87, 226, 202, 1) ",
          "rgba(23, 174, 238, 1)",
          "rgba(47, 135, 210, 1) ",
          "rgba(214, 246, 229, 1)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div className="max-h-96 w-full flex justify-center">
      <Pie options={options} data={data} />
    </div>
  );
};

export default CustomChart;
