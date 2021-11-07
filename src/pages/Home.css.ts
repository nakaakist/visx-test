import { style } from '@vanilla-extract/css';
import { themeVars } from '../theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
});

export const title = style({
  fontSize: themeVars.fontSize.xxlarge,
  letterSpacing: '0.05em',
  marginBottom: themeVars.space.large,
});

export const description = style({
  fontSize: themeVars.fontSize.medium,
  marginBottom: themeVars.space.large,
});

export const hr = style({
  width: '100%',
  borderTop: '0px solid',
  opacity: 0.4,
  borderColor: themeVars.color.brand2,
  marginBottom: themeVars.space.xlarge,
});

export const plotTitle = style({
  fontSize: themeVars.fontSize.xlarge,
  marginBottom: themeVars.space.large,
});

export const plotItem = style({
  fontSize: themeVars.fontSize.large,
  marginBottom: themeVars.space.small,
  textDecoration: 'none',
  color: themeVars.color.brand3,
  ':hover': {
    color: themeVars.color.brand4,
    textDecorationLine: 'underline',
  },
});
