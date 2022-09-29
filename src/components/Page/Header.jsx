import Navigation from './Navigation.jsx';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>

      <h1>Music and Animals</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
    </header>
  );
}
