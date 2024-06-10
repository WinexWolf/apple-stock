import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { tabPanelStyles } from '../styles';

interface TabContentProps {
  labels: { title: string, value: string }[];
  financialData: any; 
}

const TabContent: React.FC<TabContentProps> = ({ labels, financialData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs style={tabPanelStyles.panels} value={value} onChange={handleChange} centered>
        {labels.map((label, index) => (
          <Tab style={tabPanelStyles.tabs} key={index} label={label.title} />
        ))}
      </Tabs>
      {labels.map((label, index) => (
        <div key={index} role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} style={tabPanelStyles.labels}>
          {value === index && (
            <div style={tabPanelStyles.valueContainer}>
              <Typography variant="h2">{financialData[label.value]}</Typography>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabContent;
