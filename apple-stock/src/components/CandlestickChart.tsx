import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CandlestickChartProps {
  data: any;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item: any) => item.date),
    datasets: [
      {
        label: 'AAPL',
        data: data.map((item: any) => item.close),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CandlestickChart;
