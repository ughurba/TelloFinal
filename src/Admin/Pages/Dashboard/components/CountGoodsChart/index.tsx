import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ProductCountByBrand } from "../../types";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);
export const Wrapper = styled.div`
  width: 40%;
`;
interface Props {
  products: ProductCountByBrand[];
}
export const CountGoodsChart: FC<Props> = ({ products }) => {
  const { t } = useTranslation();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      datalabels: {
        color: "#fff",
      },

      title: {
        display: true,
        text: t("HowManyProductsOfEachBrand"),
      },
    },
  };
  const data = {
    labels: products?.map((x) => x.name),
    datasets: [
      {
        label: "das",
        data: products?.map((x) => x.count),
        backgroundColor: [
          "#ff638560",
          "#36a3eb78",
          "#ffcf566f",
          "#4bc0c082",
          "#9966ff6e",
          "#ffa04078",
        ],
        borderColor: [
          "#ff638566",
          "#36a3eb6c",
          "#ffcf566e",
          "#4bc0c061",
          "#9966ff69",
          "#ffa0405a",
        ],
        borderWidth: 1,
        Animation: true,
      },
    ],
  };

  return (
    <Wrapper>
      <Pie plugins={[ChartDataLabels]} options={options} data={data} />
    </Wrapper>
  );
};
