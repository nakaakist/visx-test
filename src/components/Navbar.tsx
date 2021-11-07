import { FC } from 'react';
import { Link } from 'react-router-dom';
import { plotRoutes } from '../plotRoutes';
import * as styles from './Navbar.css';

const Navbar: FC = () => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div>
            <Link to="/" className={styles.title}>
              <div>LearnVisx</div>
            </Link>
          </div>
          <hr className={styles.hr} />
          <div className={styles.menu}>
            {plotRoutes.map((r) => (
              <Link key={r.to} to={r.to} className={styles.menuItem}>
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className={styles.navbarSpace} />
    </>
  );
};

export default Navbar;
