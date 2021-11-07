import { style } from '@vanilla-extract/css';
import { themeVars } from '../theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
});

export const title = style({
  fontSize: themeVars.fontSize.xlarge,
  marginBottom: themeVars.space.medium,
});
