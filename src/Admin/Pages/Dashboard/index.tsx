import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -800, max: 800 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -800, max: 800 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -800, max: 800 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};
const Wrapper = styled.div`
  & canvas {
    width: 85% !important;
    height: 70% !important;
  }
`;

export const ChartCustom = () => {
  return (
    <Wrapper>
      <Bar options={options} data={data} />
    </Wrapper>
  );
};
