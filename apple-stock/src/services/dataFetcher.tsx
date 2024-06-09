import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface StockData {
  t: number; // Timestamp
  o: number; // Open price
  h: number; // High price
  l: number; // Low price
  c: number; // Close price
}

const API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=<YOUR_API_KEY>'; // Replace with your Alpha Vantage API key

const DataFetcher = () => {
  const [data, setData] = useState<StockData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const timeSeries = response.data['Time Series (5min)'];
        const stockData = Object.keys(timeSeries).map((timestamp) => ({
          t: parseInt(timestamp),
          o: parseFloat(timeSeries[timestamp]['1. open']),
          h: parseFloat(timeSeries[timestamp]['2. high']),
          l: parseFloat(timeSeries[timestamp]['3. low']),
          c: parseFloat(timeSeries[timestamp]['4. close']),
        }));
        setData(stockData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : data ? (
        <div>Data fetched successfully!</div> // Replace with your chart component usage
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;
