import * as React from "react";
import { Box, Typography, ThemeProvider, Avatar } from "@mui/material";
import logoImage from "./logo.png"; // Import your logo image here
import { boxTitleStyles, boxValueStyles } from "../styles"; // Import styles from the styles file

interface BoxSxProps {
  title: string;
  value: string;
  logo: string;
  bgColor: string;
}

export default function BoxSx({ title, value, logo, bgColor }: BoxSxProps) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            white: "#fff",
            blue: "#73C2FB",
            purple: "#7B68EE",
            green: "#48D1CC",
            dark: "#808080",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative", // Positioning for the logo
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 150,
          height: 150,
          borderRadius: 3,
          backgroundColor: bgColor,
          border: "2px solid",
          borderColor: "primary.white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px", // Added padding
          margin: "10px", // Added margin
          "&:hover": {
            borderColor: "primary.dark",
            cursor: "pointer",
          },
        }}
      >
        <img
          alt="Logo"
          src={logo}
          style={{
            position: "absolute",
            top: "8px", // Adjust top position
            right: "8px", // Adjust right position
            width: "40px", // Adjust width of the logo
            height: "40px", // Adjust height of the logo
            borderRadius: "50%", // Make it circular
          }}
        />
        <div style={boxTitleStyles}>{title}</div>
        <div style={boxValueStyles}>{value}</div>
      </Box>
    </ThemeProvider>
  );
}
