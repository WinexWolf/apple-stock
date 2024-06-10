import axios from "axios";

const API_URL = '/financials'; // Update this to the relative path

export const fetchFinancialData = async () => {
  try {
      const result = await axios.get(API_URL);
      return result.data;
    console.log(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
