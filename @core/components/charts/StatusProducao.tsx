import React from "react";
import { Chart } from "react-google-charts";

type Props = {
  data: { safra: string; produto: string; producao: number }[];
};

export default function StatusProducao({ data }: Props) {

  const safrasUnicas = Array.from(new Set(data.map(item => item.safra)));
  const produtosUnicos = Array.from(new Set(data.map(item => item.produto)));

  const chartData = [
    ["Produto", ...safrasUnicas], 
    ...produtosUnicos.map(produto => {
      const row: any[] = [produto];
      safrasUnicas.forEach(safra => {
        const item = data.find(d => d.produto === produto && d.safra === safra);
        row.push(item ? item.producao : 0);
      });
      return row;
    })
  ];

  const options = {
    title: "Produção por Safra e Produto",
    chartArea: { width: "80%", height: "70%" },
    hAxis: { title: "Produção" },
    vAxis: { title: "Produto" },
    bars: "horizontal", 
    colors: [
          "#97133E",  
          "#FFA8C4", 
          "#59734A", 
          '#A67F00',
          '#3b82f6',
          '#10b981',
          '#f59e0b',
          '#ef4444',
        ],
    isStacked: false,
    legend: { position: "center" }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto', 
      padding: '45px 20px 0 20px',
      backgroundColor: '#ffffff',

    }}>
      
        <Chart
          chartType="Bar"
          width="100%"
          height="350px"
          data={chartData}
          options={{
            ...options,
            chartArea: { width: "75%", height: "75%" },
            backgroundColor: 'transparent'
          }}
        />
      </div>
  );
}
