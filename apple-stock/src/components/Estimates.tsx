import React, { useEffect, useState } from "react";
import { fetchFinancialData } from "../services/financialsService";
import Box from "@mui/material/Box";
import BoxSx from "./BoxSx";
import citiLogo from "../assets/citi-logo.jpg";
import gsachLogo from "../assets/gsach-logo.png";
import morganLogo from "../assets/morgan-stanley-logo.jpg";
import { boxRowStyles, headingStyles } from "../styles";

const Estimates: React.FC = () => {
  const [financialData, setFinancialData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFinancialData();
        setFinancialData(result);
      } catch (error) {
        console.error("Failed to fetch financial data:", error);
      }
    };
    fetchData();
  }, []);

  if (!financialData) return <div>Loading...</div>;

  const analystEstimates = [
    {
      title: "Goldman Sachs",
      value: financialData.analyst_estimates["Goldman Sachs"],
      logo: gsachLogo,
      bgColor: "primary.purple",
    },
    {
      title: "Citibank",
      value: financialData.analyst_estimates["Citibank"],
      logo: citiLogo,
      bgColor: "primary.blue",
    },
    {
      title: "Morgan Stanley",
      value: financialData.analyst_estimates["Morgan Stanley"],
      logo: morganLogo,
      bgColor: "primary.green",
    },
  ];

  return (
    <div id="">
      <h2 style={headingStyles}>Analyst Estimates</h2>
      <div id="analystEstimates" style={boxRowStyles}>
        {analystEstimates.map((estimate: any, index: number) => (
          <BoxSx
            key={index}
            title={estimate.title}
            value={estimate.value}
            logo={estimate.logo}
            bgColor={estimate.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Estimates;
