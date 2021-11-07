import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './NotFound.css';

const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <Link to="/">home</Link>
    </div>
  );
};

export default NotFound;
