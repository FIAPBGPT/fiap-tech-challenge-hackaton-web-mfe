import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data: { produto: string; valor: number }[];
};

export default function LucroPorProduto({ data }: Props) {
  const chartData = [
    ["Produto", "Vendas"],
    ...data.map((item) => [item.produto, item.valor]),
  ];

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={{
        title: "Vendas por Produto",
        is3D: false,
        colors: [
          "#97133E",  
          "#FFA8C4", 
          "#59734A", 
          '#A67F00'
        ]
      }}
      width="100%"
      height="400px"
    />
  );
}
