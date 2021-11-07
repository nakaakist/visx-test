import { createTheme } from '@vanilla-extract/css';

export const [theme, themeVars] = createTheme({
  color: {
    brand: '#41729F',
    brand2: '#5885AF',
    brand3: '#274472',
    brand4: '#C3E0E5',
    text: '#333333',
    caption: '#888888',
    whiteText: '#eeeeee',
    background: '#ffffff',
    border: '#888888',
  },
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '40px',
  },
});
