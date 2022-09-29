import { Link, Outlet } from 'react-router-dom';
import styles from '../Page/Music.css';

export default function Music() {
  return (
    <div>
      <h1 className={styles.music}>This is Music</h1>
      <nav className={styles.Navigation}>
        <Link to="">Classic Rock</Link>
        <Link to="jam">Jam Bands</Link>
        <Link to="metal">Metal</Link>
      </nav>
      <Outlet />
    </div>
  );
}
