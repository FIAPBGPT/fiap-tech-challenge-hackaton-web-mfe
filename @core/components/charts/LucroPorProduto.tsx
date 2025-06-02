import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data: { produto: string; lucro: number }[];
};

export default function LucroPorProduto({ data }: Props) {
  const chartData = [
    ["Produto", "Lucro"],
    ...data.map((item) => [item.produto, item.lucro]),
  ];

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={{
        title: "Lucro por Produto",
        is3D: true,
      }}
      width="100%"
      height="400px"
    />
  );
}
