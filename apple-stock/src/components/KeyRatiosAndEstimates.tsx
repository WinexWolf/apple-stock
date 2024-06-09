import React, { useEffect, useState } from 'react';
import { fetchFinancialData } from '../services/financialsService';
import Box from '@mui/material/Box';
import BoxSx from './BoxSx';
import citiLogo from '../assets/citi-logo.jpg'; // Import your logo image here
import gsachLogo from '../assets/gsach-logo.png';
import morganLogo from '../assets/morgan-stanley-logo.jpg';
import { boxRowStyles,headingStyles } from '../styles'; // Import styles from the styles file
import TabContent from './TabContent';

const KeyRatiosAndEstimates: React.FC = () => {
    const [financialData, setFinancialData] = useState<any>(null);

    const mockEstimates = [
        { title: 'Goldman Sachs', value: '7.9', logo: gsachLogo, bgColor: 'primary.purple' },
    { title: 'Citibank', value: '6.5', logo:citiLogo, bgColor:'primary.blue'},
  { title: 'Morgan Stanley', value: '9.8', logo:morganLogo ,bgColor:'primary.green'},
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
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFinancialData();
                setFinancialData(data);
            } catch (error) {
                console.error('Failed to fetch financial data:', error);
            }
        };
        fetchData();
    }, []);

    if (!financialData) return <div>Loading...</div>;

    return (
        <div id=''>
              <h2 style={headingStyles}>Analyst Estimates</h2>
            <div id='keyratios' style={boxRowStyles}>
              {mockEstimates.map((estimate: any, index: number) => (
                  <BoxSx key={index} title={estimate.title} value={estimate.value} logo={estimate.logo} bgColor={estimate.bgColor}/>
              ))} 
            </div>
            {/*             <h2>Key Ratios</h2> */}
            <div>
                      <TabContent labels={labels} />

              {/*   <BoxSx title="Market Cap" value={financialData.market_ap} />
                <BoxSx title="Shares Outstanding" value={financialData.shares_outstanding} />
                <BoxSx title="P/E Ratio" value={financialData.pe_ratio} />
                <BoxSx title="P/S Ratio" value={financialData.ps_ratio} />
                <BoxSx title="P/B Ratio" value={financialData.pb_ratio} />
                <BoxSx title="PEG Ratio" value={financialData.peg_ratio} />
                <BoxSx title="Current Ratio" value={financialData.current_ratio} />
                <BoxSx title="Debt to Equity Ratio" value={financialData.debt_to_equity_ratio} />
                <BoxSx title="EPS" value={financialData.eps} /> */}
             
            </div>
          
        </div>
    );
};


export default KeyRatiosAndEstimates;
