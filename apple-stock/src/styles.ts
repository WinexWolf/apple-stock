// styles.ts
import { CSSProperties } from 'react';
import { Theme } from '@mui/material';

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
    button:{
        margin: '0vh 0vh 5vh 6vh',
        borderRadius:'8px'
    }
};

/* export const containerStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
      backgroundColor: 'black',
}; */

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
    marginTop: '20px'
};

export const boxValueStyles: CSSProperties = {
   
        fontSize: '22px',
        fontWeight: '700',
        color: 'white',

    
};

export const tabPanelStyles:  { [key: string]: React.CSSProperties } ={
    labels: {
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        outline: 'none',
        padding:'2vh 0vh 10vh 50vw'
    },
    tabs: {
        display: 'flex',
        color: 'white',
        justifyContent: 'center',

    },
    panels: {
        marginTop: '10vh',
        width: '100vw',
        justifyContent: 'center',
    }

};

export const headingStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '2vh 0vh 2vh 4vh',
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
            

}
