import { ReactElement } from 'react';
import BarPlot from './components/BarPlot';
import CelonisPlot from './components/CelonisPlot';

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
    to: 'celonis',
    description: 'Celonis-like plot that shows the network of nodes',
    plot: <CelonisPlot />,
  },
];
