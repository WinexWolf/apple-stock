import axios from 'axios';

const API_URL = 'https://www.alphavantage.co/query';
const API_KEY = 'KHP5W1HQJ4RNBNMQ';

export const fetchStockData = async (ticker: string) => {
  try {
      const response = await fetch('hhttps://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=KHP5W1HQJ4RNBNMQ');
      console.log( response.json());
    return response.json();
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
}; 


