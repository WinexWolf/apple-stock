import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/stockprice';
const API_KEY = 'YOUR_API_KEY';

export const fetchStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${API_URL}?ticker=${ticker}`, {
      headers: { 'X-Api-Key': API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};
