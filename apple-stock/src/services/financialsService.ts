
const API_URL = 'http://127.0.0.1:8000/financials';

export const fetchFinancialData = async () => {

    try {
        const response =  await fetch(API_URL,{ mode: 'no-cors'});
        return response;
    } catch (error) {
        console.error('Error fetching financial data:', error);
        throw error;
    }
};
