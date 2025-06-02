import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  meta: number;
  atingido: number;
};

export default function MetasAtingidas({ meta, atingido }: Props) {
  const chartData = [["Label", "Valor"], ["Meta", atingido]];
  const max = meta < atingido ? atingido : meta;

  return (
    <Chart
      chartType="Gauge"
      data={chartData}
      options={{
        redFrom: 0,
        redTo: meta * 0.5,
        yellowFrom: meta * 0.5,
        yellowTo: meta * 0.9,
        greenFrom: meta * 0.9,
        greenTo: max,
        max,
      }}
      width="400px"
      height="120px"
    />
  );
}
