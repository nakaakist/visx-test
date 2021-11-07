import { globalStyle } from '@vanilla-extract/css';

globalStyle('body, body *', {
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box',
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 300,
});

globalStyle('html', {
  fontSize: '16px',
  '@media': {
    'screen and (min-width: 320px)': {
      fontSize: 'calc(16px + 3 * ((100vw - 320px) / 680))',
    },
    'screen and (min-width: 1000px)': {
      fontSize: '19px',
    },
  },
});
