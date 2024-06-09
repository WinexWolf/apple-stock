// TabContent.tsx
import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { tabPanelStyles } from '../styles';

interface TabContentProps {
  labels: string[];
}

const TabContent: React.FC<TabContentProps> = ({ labels }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        {labels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
      {labels.map((label, index) => (
        <div key={index} role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} style={tabPanelStyles}>
          {value === index && (
            <Typography variant="h2">100</Typography>
          )}
        </div>
        
      ))}
    </div>
  );
};

export default TabContent;
