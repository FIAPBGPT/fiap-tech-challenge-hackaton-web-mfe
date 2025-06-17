import LucroPorProduto from "@/@core/components/charts/LucroPorProduto";
import MetasAtingidas from "@/@core/components/charts/MetasAtingidas";
import StatusProducao from "@/@core/components/charts/StatusProducao";
import React from "react";
import MetasGeoChart from "@/@core/components/charts/MetasGeoChart";


type Props =
  | { tipo: "lucro"; data: { produto: string; valor: number }[] }
  | { tipo: "producao"; data: { safra: string; produto: string, producao: number }[] }
  | { tipo: "metas"; data: {produto: string, meta: number, producao: number}[] }
  | { tipo: "mapa"; data: { estado: string; meta: number }[] }


export default function ChartView(props: Props) {
  switch (props.tipo) {
    case "lucro":
      return <LucroPorProduto data={props.data} />;
    case "producao":
      return <StatusProducao data={props.data} />;
    case "metas":
      return <MetasAtingidas data={props.data} />;
    case "mapa":
      const geoData = props.data.map(({ estado, meta }) => [estado, meta] as [string, number]);
      return <MetasGeoChart data={geoData} />;
    default:
      return <p>Tipo de gráfico desconhecido</p>;
  }
}
