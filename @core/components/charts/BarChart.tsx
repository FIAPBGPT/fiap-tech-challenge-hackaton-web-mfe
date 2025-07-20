// dashboard/src/ChartView.tsx
import React from 'react'
import { Chart } from 'react-google-charts'

type ChartDataItem = {
  produto: string
  lucro: number
}

interface ChartViewProps {
  data: ChartDataItem[]
}

const ChartView: React.FC<ChartViewProps> = ({ data }) => {
  const chartData = [
    ['Produto', 'Lucro'],
    ...data.map((item) => [item.produto, item.lucro]),
  ]

  return (
    <div>
      <h3>Lucro por Produto</h3>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{ title: 'Produtos mais lucrativos' }}
        width={'100%'}
        height={'400px'}
      />
    </div>
  )
}

export default ChartView
