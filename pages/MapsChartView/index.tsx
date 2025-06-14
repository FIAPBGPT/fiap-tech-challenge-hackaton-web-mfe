import MetasGeoChart from "@/@core/components/charts/MetasGeoChart";

export default function MapsChartView() {
  const metasPorEstado: [string, number][] = [
    ["BR-SP", 90],
    ["BR-RJ", 75],
    ["BR-MG", 60],
    ["BR-BA", 30],
    ["BR-PE", 40],
    ["BR-CE", 20],
    ["BR-GO", 55],
    ["BR-MT", 65],
    ["BR-MS", 45],
    ["BR-AM", 35],
    ["BR-PA", 25],
    ["BR-AL", 15],
    ["BR-PB", 60],
  ];

  return (
    <main>
      <h1>Mapa de Produção</h1>
      <MetasGeoChart data={metasPorEstado} />
    </main>
  );
}
