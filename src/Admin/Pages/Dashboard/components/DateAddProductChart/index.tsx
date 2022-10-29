import { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Wrapper = styled.div`
  width: 50%;
`;
interface Props {
  productCountByMonth: [];
}
export const DateAddProductChart: FC<Props> = ({ productCountByMonth }) => {
  const { t } = useTranslation();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );

  const dateOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
      title: {
        display: true,
        text: t("WhenTheProductsWereAdded"),
      },
    },
  };

  const labels = useMemo(() => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: t("ProductCount"),
        data: productCountByMonth,
        borderColor: "rgba(7, 60, 253, 0.723)",
        backgroundColor: "rgb(7, 60, 253)",
      },
    ],
  };
  return (
    <Wrapper>
      <Line options={dateOptions} data={data} />
    </Wrapper>
  );
};
