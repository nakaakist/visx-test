import { FC, ReactNode } from 'react';
import { renderMultiLineText } from '../utils/utils';
import * as styles from './PlotPage.css';

export type PlotPageProps = {
  title: string;
  description: string;
  plot: ReactNode;
};

const PlotPage: FC<PlotPageProps> = ({
  title,
  description,
  plot,
}: PlotPageProps) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>
        {renderMultiLineText(description)}
      </div>
      {plot}
    </>
  );
};

export default PlotPage;
