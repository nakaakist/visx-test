import { FC, ReactNode } from 'react';
import * as styles from './Container.css';

export type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
