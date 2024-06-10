// styles.ts
import { CSSProperties } from 'react';

export const landingPageStyles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: '0px',
    height: '80vh',
  },
  logo: {
    width: '50%', // Adjust as needed
    height: '100%',
  },
  text: {
    fontSize: '7vh',
    color: 'white',
    margin: '1vh',
    padding: '0vh 0vh 2vh 4vh',
  },
  subtext: {
    fontSize: '2vh',
    color: 'white',
    margin: '2vh',
    padding: '0vh 0vh 6vh 4vh',
  },
  button: {
    margin: '0vh 0vh 5vh 6vh',
    borderRadius: '8px',
  },
};


export const boxRowStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  backgroundColor: 'black',
  width: '100vw',
};

export const boxTitleStyles: CSSProperties = {
  fontSize: '16px',
  fontWeight: '400',
  color: 'white',
  fontFamily: 'Helvetica',
  marginTop: '10px',
};

export const boxValueStyles: CSSProperties = {
  fontSize: '22px',
  fontWeight: '700',
  color: 'white',
};

export const tabPanelStyles: { [key: string]: CSSProperties } = {
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    outline: 'none',
    padding: '2vh 0vh 0vh 50vw',
  },
  tabs: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
  },
  panels: {
    width: '100vw',
    justifyContent: 'center',
    },
  dropdown: {
    width: '100%',
    height: '5vh',
    padding:'8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius:'4px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    color: 'black',
  }
};

export const headingStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '6vh 0vh 5vh 4vh',
  fontSize: '26px',
  fontWeight: '500',
  color: 'white',
  fontFamily: 'Helvetica',
  marginTop: '10vh',
};

export const mainStyles: CSSProperties = {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20vh',
};

export const chartStyles: CSSProperties = {
  width: '70vw',
  height: '40vh',
};

export const footerStyles: CSSProperties = {
  width: '100%',
  justifyContent: 'center',
  padding: '0 20px', // Add padding to ensure content isn't too close to the edges
};
