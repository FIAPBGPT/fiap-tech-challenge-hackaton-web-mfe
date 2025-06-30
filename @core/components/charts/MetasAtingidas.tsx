import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data?: { produto: string; meta: number; producao: number }[];
};

export default function MetasAtingidas({ data = [] }: Props) { 
  if (data.length === 0) {
    return <div>Nenhum dado disponível para exibir o gráfico.</div>;
  }

  const chartData = [
    ["Produto", "Meta", "Produção"],
    ...data.map((item) => [item.produto, item.meta, item.producao]),
  ];

  const options = {
    title: "Metas Por Produto",
    bars: "horizontal",
    chartArea: { width: "50%" },
    hAxis: { title: "Valor" },
    vAxis: { title: "Produtos" },
    colors: ["#8A1538", "#FFE5EC"], 
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}