'use client'

import { Chart } from 'react-google-charts'

const options = {
  region: 'BR',
  displayMode: 'regions',
  resolution: 'provinces',
  colorAxis: {
    colors: ['#FFE5EC', '#8A1538'],
  },
  backgroundColor: '',
  datalessRegionColor: '#f0f0f0',
  defaultColor: '#f5f5f5',
  chartArea: {
    left: 0,
    top: 0,
    width: '80%',
    height: '80%',
  },
}

type Props = {
  data: [string, number][] // Exemplo: [["BR-SP", 90], ["BR-RJ", 75]]
}

export default function MetasGeoChart({ data }: Props) {
  const chartData = [['State', 'Meta'], ...data]

  return (
    <div className="rounded-lg shadow-md bg-white p-4">
      <div className="overflow-auto w-[300px] h-[200px] relative">
        <div
          className="origin-top-left"
          style={{
            transform: 'scale(1.1)',
            transformOrigin: 'top left',
          }}
        >
          <Chart
            chartType="GeoChart"
            width="600px"
            height="400px"
            data={chartData}
            options={options}
          />
        </div>
      </div>
    </div>
  )
}
