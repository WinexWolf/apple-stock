import React, { useEffect, useState } from "react";
import KeyRatios from "./components/KeyRatios";
import { Container, Typography } from "@mui/material";
import LandingPage from "./components/LandingPage";
import { fetchStockData } from "./services/api";
import CandlestickChart from "./components/CandlestickChart";
import { mainStyles } from "./styles";
import data from "./data/mockaapl.json";
import Estimates from "./components/Estimates";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div style={mainStyles}>
      <LandingPage />
      <KeyRatios />
      <CandlestickChart data={data["Time Series (5min)"]} />
      <Estimates />
      <Footer />
    </div>
  );
};

export default App;
