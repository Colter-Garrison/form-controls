import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Main</NavLink>
      <NavLink to="music">Music</NavLink>
      <NavLink to="animals">Animals</NavLink>
    </nav>
  );
}
