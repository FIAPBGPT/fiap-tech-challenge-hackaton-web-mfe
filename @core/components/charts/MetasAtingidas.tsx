import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  meta: number;
  atingido: number;
  tipo?: "producao" | "vendas" | any;
};

export default function MetasAtingidas({ meta, atingido, tipo }: Props) {
  const valorMeta = Number(meta);
  const valorAtingido = Number(atingido);

  const safeMeta = isNaN(valorMeta) ? 0 : valorMeta;
  const safeAtingido = isNaN(valorAtingido) ? 0 : valorAtingido;
  const max = Math.max(safeMeta, safeAtingido || 1);

  const label = tipo === "vendas" ? "Vendas" : "Produção";

  const chartData = [
    ["Label", "Value"],
    [label, safeAtingido],
  ];

  console.log("chartData", chartData);

  return (
    <>
      <Chart
        chartType="Gauge"
        data={chartData}
        options={{
          redFrom: 0,
          redTo: safeMeta * 0.5,
          yellowFrom: safeMeta * 0.5,
          yellowTo: safeMeta * 0.9,
          greenFrom: safeMeta * 0.9,
          greenTo: max,
          min: 0,
          max: max,
          animation: { duration: 500, easing: "out" },
        }}
        width="400px"
        height="120px"
      />
    </>
  );
}
