import { ReactElement } from 'react';
import BarPlot from './pages/BarPlot';

export type PlotRoute = {
  name: string;
  to: string;
  element: ReactElement;
};

export const plotRoutes: PlotRoute[] = [
  {
    name: 'bar',
    to: 'bar',
    element: <BarPlot />,
  },
  {
    name: 'celonis',
    to: 'bar',
    element: <BarPlot />,
  },
];
