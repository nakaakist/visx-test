import { ReactElement } from 'react';
import BarPlot from './components/BarPlot';

export type PlotRoute = {
  name: string;
  to: string;
  description: string;
  plot: ReactElement;
};

export const plotRoutes: PlotRoute[] = [
  {
    name: 'bar',
    to: 'bar',
    description:
      'Simple bar plot that shows the frequency distribution of letters.\nUses "Bar" from "@visx/shape."',
    plot: <BarPlot />,
  },
  {
    name: 'celonis',
    to: 'bar',
    description:
      'simple bar plot that shows the frequency distribution of letters',
    plot: <BarPlot />,
  },
];
