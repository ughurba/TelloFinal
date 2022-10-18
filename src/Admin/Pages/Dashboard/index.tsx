import { faker } from "@faker-js/faker";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetProductCountByBrandQuery } from "services/adminServices/productServices";
import { prototype } from "stream";

export const Wrapper = styled.div`
  width: 400px;
`;
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartCustom = () => {
  const { data: products } = useGetProductCountByBrandQuery();

  const data = {
    labels: products?.map((x) => x.name),
    datasets: [
      {
        label: "# of Votes",
        data: products?.map((x) => x.count),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          // "rgba(254, 0, 0, 0.822)",
          // "rgba(25, 0, 255, 0.996)",
          // "rgb(233, 175, 28)",
          // "rgb(6, 253, 253)",
          // "rgba(94, 16, 249, 0.948)",
          // "rgba(0, 249, 46, 0.974)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <Doughnut data={data} />
    </Wrapper>
  );
};
