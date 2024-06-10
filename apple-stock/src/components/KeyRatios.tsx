import React, { useEffect, useState } from 'react';
import { fetchFinancialData } from '../services/financialsService';
import TabContent from './TabContent';

const KeyRatios: React.FC = () => {
  const [financialData, setFinancialData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFinancialData();
        setFinancialData(result);
      } catch (error) {
        console.error('Failed to fetch financial data:', error);
      }
    };
    fetchData();
  }, []);

  if (!financialData) return <div>Loading...</div>;


  const labels = [
    { title: 'Market Cap', value: 'market_ap' },
    { title: 'Shares Outstanding', value: 'shares_outstanding' },
    { title: 'P/E Ratio', value: 'pe_ratio' },
    { title: 'P/S Ratio', value: 'ps_ratio' },
    { title: 'P/B Ratio', value: 'pb_ratio' },
    { title: 'PEG Ratio', value: 'peg_ratio' },
    { title: 'Current Ratio', value: 'current_ratio' },
    { title: 'Debt to Equity Ratio', value: 'debt_to_equity_ratio' },
    { title: 'EPS', value: 'eps' },
  ];

  return (
             <div id ='keyratios'>
        <TabContent labels={labels} financialData={financialData} />
      </div>
     );
};

export default KeyRatios;
