// import React from "react";
// import { Chart } from "react-google-charts";

// type Props = {
//   meta: number;
//   atingido: number;
// };

// export default function MetasAtingidas({ meta, atingido }: Props) {
//   const chartData = [["Label", "Valor"], ["Meta", atingido]];
//   const max = meta < atingido ? atingido : meta;

//   return (
//     <Chart
//       chartType="Gauge"
//       data={chartData}
//       options={{
//         redFrom: 0,
//         redTo: meta * 0.5,
//         yellowFrom: meta * 0.5,
//         yellowTo: meta * 0.9,
//         greenFrom: meta * 0.9,
//         greenTo: max,
//         max,
//       }}
//       width="400px"
//       height="120px"
//     />
//   );
// }

import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data?: { produto: string; meta: number; producao: number }[]; // `data` é opcional
};

export default function MetasAtingidas({ data = [] }: Props) { // Valor padrão: `[]` se `undefined`
  // Se não houver dados, exibe mensagem ou gráfico vazio
  if (data.length === 0) {
    return <div>Nenhum dado disponível para exibir o gráfico.</div>;
  }

  // Transforma os dados no formato do Google Charts
  const chartData = [
    ["Produto", "Meta", "Produção"], // Cabeçalho
    ...data.map((item) => [item.produto, item.meta, item.producao]),
  ];

  const options = {
    title: "Metas Por Produto",
    bars: "horizontal",
    chartArea: { width: "50%" },
    hAxis: { title: "Valor" },
    vAxis: { title: "Produtos" },
    colors: ["#8A1538", "#FFE5EC"], // Meta (azul) vs. Produção (verde)
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