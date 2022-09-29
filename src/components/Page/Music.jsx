import { Link, Outlet } from 'react-router-dom';
import styles from '../Page/Music.css';

export default function Music() {
  return (
    <div>
      <h1 className={styles.music}>This is Music</h1>

      <form className={styles.form}>
        <label>
          Name:
          <input name="name" placeholder="Your Name" required />
        </label>

        <fieldset className={styles.radio}>
          <legend>Does this amp go to 11?</legend>
          <label>
            <input type="radio" name="amp" value="true" checked />
            True
          </label>
          <label>
            <input type="radio" name="amp" value="false" />
            False
          </label>
        </fieldset>

        <label>
          <p>Rock N Roll?</p>
          <select required>
            <option disabled selected value="">
              Select an option
            </option>
            <option value="1">HELL YEAH!</option>
            <option value="2">OH HELL YEAH!</option>
            <option value="3">OH HELLLLLLL YEAH!</option>
          </select>
        </label>

        <label className={styles.text}>
          How hard do you Rock N Roll?
          <textarea name="bio" placeholder="Do you 🤘 ?" required />
        </label>
        <input className={styles.submit} type="submit" value="Rock On!" />
      </form>

      <nav className={styles.Navigation}>
        <Link to="">Classic Rock</Link>
        <Link to="jam">Jam Bands</Link>
        <Link to="metal">Metal</Link>
      </nav>
      <Outlet />
    </div>
  );
}
