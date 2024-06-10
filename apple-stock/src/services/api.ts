import axios from 'axios';

const API_URL = 'https://www.alphavantage.co/query';
const API_KEY = 'GAN7AS7C7ZK0X9V4';
//https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=YOUR_API_KEY'

export const fetchStockData = async (ticker: string) => {
  try {
      const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=GAN7AS7C7ZK0X9V4');
      //console.log( await response.json());
    return response.json();
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
}; 


