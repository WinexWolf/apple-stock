import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { chartStyles } from "../styles";

interface CandlestickChartProps {
  data: { [key: string]: { [key: string]: string } };
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const seriesData = Object.keys(data)
    .map((key) => {
      const {
        "1. open": open,
        "2. high": high,
        "3. low": low,
        "4. close": close,
      } = data[key];
      return {
        x: new Date(key),
        y: [
          parseFloat(open),
          parseFloat(high),
          parseFloat(low),
          parseFloat(close),
        ],
      };
    })
    .reverse(); // Reverse the data to get it in chronological order

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: "100%",
      width: "100%",
      background: "#000", // Set the background color to black
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Apple Stock Price Movement",
      align: "left",
      style: {
        color: "white",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    grid: {
      borderColor: "#555",
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Candlestick",
      data: seriesData,
    },
  ];

  return (
    <div
      className="chart-container"
      style={chartStyles}
    >
      <Chart options={options} series={series} type="candlestick" />
    </div>
  );
};

export default CandlestickChart;
