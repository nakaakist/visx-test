import { FC } from 'react';
import { Link } from 'react-router-dom';
import { plotRoutes } from '../plotRoutes';
import * as styles from './Home.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LearnVisx</h1>
      <p className={styles.description}>
        This site is for learning {'&'} testing{' '}
        <a href="https://airbnb.io/visx/">visx library</a>.
      </p>
      <hr className={styles.hr} />
      <h2 className={styles.plotTitle}>Plots</h2>
      <ul>
        {plotRoutes.map((r) => (
          <Link key={r.name} to={r.to} className={styles.plotItem}>
            <li>{r.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
