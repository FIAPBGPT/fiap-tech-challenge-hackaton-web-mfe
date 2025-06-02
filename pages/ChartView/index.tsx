import LucroPorProduto from "@/@core/components/charts/LucroPorProduto";
import MetasAtingidas from "@/@core/components/charts/MetasAtingidas";
import StatusProducao from "@/@core/components/charts/StatusProducao";
import React from "react";

type Props =
  | { tipo: "lucro"; data: { produto: string; lucro: number }[] }
  | { tipo: "producao"; data: { status: string; quantidade: number }[] }
  | { tipo: "metas"; meta: number; atingido: number };

export default function ChartView(props: Props) {
  switch (props.tipo) {
    case "lucro":
      return <LucroPorProduto data={props.data} />;
    case "producao":
      return <StatusProducao data={props.data} />;
    case "metas":
      return <MetasAtingidas meta={props.meta} atingido={props.atingido} />;
    default:
      return <p>Tipo de gráfico desconhecido</p>;
  }
}
