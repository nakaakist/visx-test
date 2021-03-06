import { style } from '@vanilla-extract/css';
import { themeVars } from '../theme.css';

export const title = style({
  fontSize: themeVars.fontSize.xlarge,
  marginTop: themeVars.space.medium,
  marginBottom: themeVars.space.medium,
});

export const description = style({
  fontSize: themeVars.fontSize.medium,
  marginBottom: themeVars.space.large,
});
