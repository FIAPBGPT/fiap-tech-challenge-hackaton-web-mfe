import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data?: { status: string; quantidade: number }[]; // Torna `data` opcional
};

export default function StatusProducao({ data = [] }: Props) {
  const chartData = [
    ["Status", "Quantidade"],
    ...data.map((item) => [item.status, item.quantidade]),
  ];

  return (
    <Chart
      chartType="ColumnChart"
      data={chartData}
      options={{
        title: "Status da Produção",
        legend: { position: "none" },
        colors: ["#3b82f6"],
      }}
      width="100%"
      height="400px"
    />
  );
}
