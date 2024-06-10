import React, { useEffect, useState } from 'react';
import { fetchFinancialData } from '../services/financialsService';
import Box from '@mui/material/Box';
import BoxSx from './BoxSx';
import citiLogo from '../assets/citi-logo.jpg'; // Import your logo image here
import gsachLogo from '../assets/gsach-logo.png';
import morganLogo from '../assets/morgan-stanley-logo.jpg';
import { boxRowStyles, headingStyles } from '../styles'; // Import styles from the styles file
import TabContent from './TabContent';

const KeyRatiosAndEstimates: React.FC = () => {
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

  const analystEstimates = [
    { title: 'Goldman Sachs', value: financialData.analyst_estimates['Goldman Sachs'], logo: gsachLogo, bgColor: 'primary.purple' },
    { title: 'Citibank', value: financialData.analyst_estimates['Citibank'], logo: citiLogo, bgColor: 'primary.blue' },
    { title: 'Morgan Stanley', value: financialData.analyst_estimates['Morgan Stanley'], logo: morganLogo, bgColor: 'primary.green' },
  ];

  const labels = [
    'Market Cap',
    'Shares Outstanding',
    'P/E Ratio',
    'P/S Ratio',
    'P/B Ratio',
    'PEG Ratio',
    'Current Ratio',
    'Debt to Equity Ratio',
    'EPS',
  ];

  return (
    <div id=''>
      <h2 style={headingStyles}>Analyst Estimates</h2>
      <div id='keyratios' style={boxRowStyles}>
        {analystEstimates.map((estimate: any, index: number) => (
          <BoxSx key={index} title={estimate.title} value={estimate.value} logo={estimate.logo} bgColor={estimate.bgColor} />
        ))}
      </div>
      <div>
        <TabContent labels={labels} />
      </div>
    </div>
  );
};

export default KeyRatiosAndEstimates;
